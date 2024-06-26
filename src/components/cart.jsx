import {
    Box,
    Text,
    Image,
    Button,
    Input,
    Spacer,
    HStack,
    VStack,
    Select,

} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import OrderFragment from "./orderFragment";
import UserProfileDrawer from "./UserProfileDrawer";

export default function Cart() {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);

    const { sid } = locationData.sid;

    const [loading, setLoading] = useState(true);
    const [cartInfo, setCartInfo] = useState([]);
    const [cartInfoLoaded, setCartInfoLoaded] = useState(false);
    const [voucherInfo, setVoucherInfo] = useState([]);

    const [subTotal, setSubTotal] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [appliedVoucher, setAppliedVoucher] = useState({ mid: '', VoucherCode: '', VoucherPercentage: 0 });

    const proceedToPay = async () => {
        // TODO change locationData according to need and navigate to checkout page
        locationData.proceedToPayData = {
            VoucherCode: appliedVoucher.VoucherCode,
            TotalAmount: subTotal + deliveryCharge - (subTotal * appliedVoucher.VoucherPercentage / 100)
        }
        navigate('/checkout', { state: locationData });
    }

    const fetchCartInfo = async () => {
        const postData = {
            sid,
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/cart/cartInfo`;

        try {
            const response = await axios.post(apiUrl, postData);
            setCartInfo(response.data.manufacturerInfo);
            setCartInfoLoaded(true); // Set cartInfoLoaded to true after cart info is loaded
            setLoading(false);
        } catch (error) {
            alert('Failed to fetch cart info');
        }
    }

    const fetchVoucherInfo = async () => {
        const postData = {
            sid,
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/vouchers/fetchVouchers`;

        try {
            const response = await axios.post(apiUrl, postData);
            setVoucherInfo(response.data);
        } catch (error) {
            alert('Failed to fetch voucher info');
        }
    }

    useEffect(() => {
        fetchCartInfo();
    }, []);

    useEffect(() => {
        if (cartInfoLoaded) {
            fetchVoucherInfo();
        }
    }, [cartInfoLoaded]);

    useEffect(
        () => {
            let subTotal = 0;
            let deliveryCharge = 0;

            cartInfo.forEach(orderFragment => {
                deliveryCharge += orderFragment.totalDeliveryCharge;
                let fragmentTotal = 0;
                orderFragment.products.forEach(product => {
                    fragmentTotal += product.Price;
                });
                subTotal += fragmentTotal;
                if (fragmentTotal !== orderFragment.totalPrice) {
                    // alert('Fragment total price mismatch');
                }
            });

            setSubTotal(subTotal);
            setDeliveryCharge(deliveryCharge);
        }, [cartInfo]
    );

    const handleVoucherSelect = () => {
        const uniqueMID = [...new Set(cartInfo.map(orderFragment => orderFragment.mid))];

        const filteredVoucherInfo = voucherInfo.filter(voucher => {
            return uniqueMID.includes(voucher.mid) &&
                voucher.MinPurchase <= subTotal &&
                new Date(voucher.Validity) >= new Date();
        });

        setVoucherInfo(filteredVoucherInfo);
    }


    if (loading) {
        return (
            <Box
                className="baloo"
                w={'100%'}
                h={'100%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
            >
                <Text
                    fontSize={'3xl'}
                    fontWeight={'bold'}
                >
                    Loading...
                </Text>
            </Box>
        )
    }

    return (
        <>
            {/* Drawer */}
            <UserProfileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

            <Box
                className="baloo"
                w={'100%'}
                h={'12%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                bg={'#190F37'}
            >

                <Box
                    w={'2%'}
                    h={'100%'}
                />

                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    onClick={
                        () => {
                            navigate('/home', { state: locationData })
                        }
                    }
                >
                    <Image
                        mb={4}
                        src={'/white-home.svg'}
                        boxSize={'80%'}
                    />
                </Box>

                <Box
                    w={'55%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        color={'#F9F871'}
                    >
                        Cart
                    </Text>
                </Box>

                <Box
                    w={'15%'}
                    h={'70%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'full'}
                    bg={'#FFFFFF'}
                >
                    <Image
                        src={'/profile.svg'}
                        boxSize={'60%'}
                        onClick={handleOpenDrawer}
                    />
                </Box>

                <Box
                    w={'8%'}
                    h={'100%'}
                />

            </Box>

            <Box
                className="baloo"
                w={'86%'}
                h={'50%'}
                top={'15%'}
                left={'7%'}
                pos={'fixed'}
                flexDirection={'column'}
                overflow={'auto'}
            >

                {
                    cartInfo.map((orderFragment, index) => {
                        return (
                            <OrderFragment
                                index={index}
                                key={orderFragment.mid}
                                orderFragment={orderFragment}
                            />
                        )
                    })
                }

            </Box>

            <Box
                className="baloo"
                w={'86%'}
                h={'34%'}
                bottom={'0px'}
                left={'7%'}
                pos={'fixed'}
            >
                <VStack spacing={'auto'}>
                    <Button
                        fontSize={'md'}
                        size={'xs'}
                        w={'70%'}
                        borderRadius={'full'}
                        onClick={
                            () => {
                                navigate('/categories', { state: locationData })
                            }
                        }
                    >
                        Click to Add More Items...
                    </Button>
                </VStack>

                <VStack spacing={'auto'} align={'left'}>
                    <HStack>
                        <Text
                            noOfLines={1}
                            textAlign={'left'}
                            fontSize={'lg'}
                        >
                            SubTotal
                        </Text>
                        <Spacer></Spacer>
                        <Text
                            noOfLines={1}
                            textAlign={'right'}
                            fontSize={'lg'}
                        >
                            {`Tk. ${subTotal}`}
                        </Text>
                    </HStack>

                    <HStack>
                        <Text
                            noOfLines={1}
                            textAlign={'left'}
                            fontSize={'lg'}
                        >
                            Delivery Fee
                        </Text>
                        <Spacer></Spacer>
                        <Text
                            noOfLines={1}
                            textAlign={'right'}
                            fontSize={'lg'}
                        >
                            {`Tk. ${deliveryCharge}`}
                        </Text>
                    </HStack>

                    {
                        appliedVoucher.VoucherCode !== '' &&
                        <HStack>
                            <Text
                                color={'red'}
                            >
                                Voucher Applied
                            </Text>
                            <Spacer></Spacer>
                            <Text
                                color={'red'}
                                fontSize={'lg'}
                            >
                                {`-Tk. ${(cartInfo.find(man => man.mid === appliedVoucher.mid).totalPrice * appliedVoucher.VoucherPercentage / 100)}`}
                            </Text>

                        </HStack>
                    }

                    <HStack>

                        <Select
                            w={'70%'}
                            h={'70%'}
                            border={'2px'}
                            textAlign={'center'}
                            onChange={
                                (e) => {
                                    setAppliedVoucher(JSON.parse(e.target.value));
                                }
                            }
                            onClick={handleVoucherSelect}
                        >
                            <option value={JSON.stringify({ VoucherCode: '', VoucherPercentage: 0 })}> Voucher </option>

                            {
                                voucherInfo.map((voucher, index) => {
                                    return (
                                        <option
                                            key={voucher.VoucherCode}
                                            value={JSON.stringify(voucher)}
                                        >
                                            {voucher.VoucherCode}
                                        </option>
                                    )
                                })
                            }

                        </Select>

                        <Spacer></Spacer>

                        <Button
                            bg={'green'}
                            color={'black'}
                            size='sm'
                            isDisabled={
                                appliedVoucher.VoucherCode === ''
                            }
                            onClick={
                                () => {
                                    if (appliedVoucher.VoucherCode !== '') {
                                        alert('Voucher Applied')
                                    }
                                }
                            }
                        >
                            Apply
                        </Button>

                    </HStack>

                    <HStack>
                        <Text
                            noOfLines={1}
                            textAlign={'left'}
                            fontSize={'lg'}
                            color={'#122F79'}
                        >
                            Total
                        </Text>
                        <Spacer></Spacer>
                        <Text
                            noOfLines={1}
                            textAlign={'right'}
                            fontSize={'lg'}
                            color={'#122F79'}
                        >
                            {`Tk. ${subTotal + deliveryCharge - (subTotal * appliedVoucher.VoucherPercentage / 100)}`}
                        </Text>
                    </HStack>

                </VStack>


                <VStack spacing={'auto'}>
                    <Button
                        mt={1}
                        w={'60%'}
                        size={'md'}
                        borderRadius={'full'}
                        bg={'red'}
                        color={'white'}
                        fontSize={'lg'}
                        onClick={proceedToPay}
                    >
                        Proceed to Checkout
                    </Button>

                </VStack>
            </Box >
        </>
    );
}
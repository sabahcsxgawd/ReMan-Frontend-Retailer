import {
    Box,
    Text,
    Image,
    Button,
    Input,
    Spacer,
    HStack,
    VStack

} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import OrderFragment from "./orderFragment";

export default function Cart() {

    const [loading, setLoading] = useState(true);
    const [cartInfo, setCartInfo] = useState([]);

    const [subTotal, setSubTotal] = useState(0);
    const [deliveryCharge, setDeliveryCharge] = useState(0);

    useEffect(() => {
        const fetchCartInfo = async () => {
            try {
                const postData = {
                    sid: "37c86bde-7c02-4bd5-923a-b302efdcf466"
                }
                const apiUrl = `${import.meta.env.VITE_API_URL}/cart/cartInfo`;

                const response = await axios.post(apiUrl, postData);
                setCartInfo(response.data.manufacturerInfo);
                setLoading(false);
            } catch (error) {
                alert('Failed to fetch cart info');
            }
        }

        fetchCartInfo();

    }, [])

    useEffect(() => {
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
                alert('Fragment total price mismatch');
            }
        });
        setSubTotal(subTotal);
        setDeliveryCharge(deliveryCharge);
    }, [cartInfo]);


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
                        h={'30%'}
                        w={'70%'}
                        borderRadius={'full'}
                    >
                        Click to Add More Items...
                    </Button>
                </VStack>

                <VStack spacing={'auto'} align={'left'}>
                    <HStack>
                        <Text
                            noOfLines={1}
                            textAlign={'left'}
                            fontSize={'2xl'}
                        >
                            SubTotal
                        </Text>
                        <Spacer></Spacer>
                        <Text
                            noOfLines={1}
                            textAlign={'right'}
                            fontSize={'2xl'}
                        >
                            {`Tk. ${subTotal}`}
                        </Text>
                    </HStack>

                    <HStack>
                        <Text
                            noOfLines={1}
                            textAlign={'left'}
                            fontSize={'2xl'}
                        >
                            Delivery Fee
                        </Text>
                        <Spacer></Spacer>
                        <Text
                            noOfLines={1}
                            textAlign={'right'}
                            fontSize={'2xl'}
                        >
                            {`Tk. ${deliveryCharge}`}
                        </Text>
                    </HStack>

                    <HStack>
                        <Text
                            noOfLines={1}
                            textAlign={'left'}
                            fontSize={'2xl'}
                            color={'#122F79'}
                        >
                            Total
                        </Text>
                        <Spacer></Spacer>
                        <Text
                            noOfLines={1}
                            textAlign={'right'}
                            fontSize={'2xl'}
                            color={'#122F79'}
                        >
                            {`Tk. ${subTotal + deliveryCharge}`}
                        </Text>
                    </HStack>
                    
                </VStack>

                <VStack>
                    <Button
                        w={'90%'}
                        borderRadius={'full'}
                        bg={'red'}
                        color={'white'}
                        fontSize={'2xl'}
                    >
                        Proceed to Checkout
                    </Button>

                </VStack>

            </Box >
        </>
    );
}
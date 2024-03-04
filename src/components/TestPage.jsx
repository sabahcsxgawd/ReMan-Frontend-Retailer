import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import {
    Box,
    Image,
    Text,
    IconButton,
    VStack,
    HStack,
    Button,
    Spacer,
    Input,
    useNumberInput

} from '@chakra-ui/react';

export default function TestPage() {


    const navigate = useNavigate();
    let locationData = useLocation().state;
    let inc, dec, input;

    const { pid, sid } = locationData;

    const [productInfo, setProductInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [orderQuantity, setOrderQuantity] = useState(locationData.prevOrderQuantity ? locationData.prevOrderQuantity : 0);
    const [discount, setDiscount] = useState(0);

    const goToCart = async () => {
        locationData.prevOrderQuantity = 0;

        const postData = {
            product: {
                sid,
                pid,
                Quantity: parseInt(orderQuantity),
                Price: parseFloat(orderQuantity * productInfo.UnitPrice * (100 - discount) / 100)
            }
        }
        const apiUrl = `${import.meta.env.VITE_API_URL}/cart/addToCart`;
        try {
            const response = await axios.post(apiUrl, postData);
            alert(response.data.message);
            navigate('/cart', { state: locationData });
        } catch (error) {
            alert('Error adding to cart')
        }
    };

    const fetchProductInfo = async () => {
        const postData = {
            pid
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/products/productInfo`;

        try {
            const response = await axios.post(apiUrl, postData);
            setProductInfo(response.data.productInfo);
            setLoading(false);
        } catch (error) {
            alert("Error fetching product info. Please try again later.");
        }
    };

    useEffect(() => {
        // fetchProductInfo();

    }, []);

    useEffect(() => {

        if (orderQuantity < productInfo.MinQuantityForDiscount) {
            setDiscount(0);
        }

        else {
            setDiscount(Math.min(productInfo.MaximumDiscount, productInfo.MinimumDiscount + Math.floor((orderQuantity - productInfo.MinQuantityForDiscount) / productInfo.ProductQuantityForDiscountRate) * productInfo.DiscountRate));
        }

    }, [orderQuantity]);

    useEffect(() => {
        if (!loading) {
            const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
                useNumberInput({
                    step: 10,
                    defaultValue: orderQuantity,
                    min: productInfo.MinQuantityForSale,
                    max: productInfo.TotalQuantity,
                });

            inc = getIncrementButtonProps();
            dec = getDecrementButtonProps();
            input = getInputProps();
        }
    }, [loading]);


    if (loading) {
        return (
            <Box
                w={"100%"}
                h={"100%"}
                pos={"fixed"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir={"column"}
            >
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
                <Text
                    className="baloo"
                    fontSize={"2xl"}
                >
                    Loading...
                </Text>
            </Box>
        );
    }

    return (
        <>
            <Box
                className='baloo'
                w={'100%'}
                h={'13%'}
                top={0}
                position={'fixed'}
                bg={'#190F37'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    onClick={
                        () => {
                            navigate(-1, { state: locationData });
                        }
                    }
                >
                    <Image
                        boxSize={'55%'}
                        src="/arrow-left-circle.svg"
                    />
                </Box>
                <Box
                    w={'60%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        color={'#ffffff'}
                        noOfLines={1}
                        fontSize={'3xl'}
                    >
                        Select Quantity
                    </Text>
                </Box>
                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <IconButton
                        icon={<Image
                            boxSize={'55%'}
                            src="/shopping-cart.svg"
                        />}
                        isRound={true}
                        size={'lg'}
                        onClick={
                            () => {
                                navigate('/cart', { state: locationData });
                            }
                        }
                    />
                </Box>
            </Box>

            <Box
                className='baloo'
                w={'90%'}
                left={'5%'}
                h={'85%'}
                top={'15%'}
                pos={'fixed'}
                display={'flex'}
                alignItems={'center'}
                flexDir={'column'}
                overflow={'auto'}
            >
                <VStack>
                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Manufacturer : {productInfo.ManufacturerName}
                    </Text>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Product : {productInfo.ProductName}
                    </Text>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Weight/Volume : {productInfo.Weight_volume}{productInfo.Unit}
                    </Text>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Category : {productInfo.CategoryName}
                    </Text>

                    <Text
                        noOfLines={3}
                        textAlign={'center'}
                        fontSize={'xl'}
                    >
                        Description : {productInfo.Description}
                    </Text>


                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Per Unit Price : Tk. {productInfo.UnitPrice}
                    </Text>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Total Quantity : {productInfo.TotalQuantity}
                    </Text>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Minimum Delivery Charge : {productInfo.MinimumDeliveryCharge}
                    </Text>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        Delivery Charge Increment Rate : {productInfo.DeliveryChargeIncrementRate}
                    </Text>

                    <HStack
                        justifyContent={'center'}
                        w={'100%'}
                    >
                        <Text
                            mt={1}
                            noOfLines={1}
                            fontSize={'xl'}
                        >
                            Rating :
                        </Text>

                        {
                            [...Array(Math.round(productInfo.Rating))].map((item) => {
                                return (
                                    <Image
                                        boxSize={'30px'}
                                        src={'star-yellow.svg'}
                                    />
                                )
                            })
                        }

                        {
                            [...Array(5 - Math.round(productInfo.Rating))].map((item) => {
                                return (
                                    <Image
                                        boxSize={'30px'}
                                        src={'star-white.svg'}
                                    />
                                )
                            })
                        }

                        <Text
                            mt={1}
                            noOfLines={1}
                            fontSize={'xl'}
                        >
                            ({productInfo.Rating})
                        </Text>

                    </HStack>

                    <Text
                        noOfLines={1}
                        fontSize={'xl'}
                    >
                        {
                            discount === 0 ?
                                `No Discount Available` :
                                `Applied Discount: ${discount}%`
                        }
                    </Text>

                    <Image
                        boxSize={'200px'}
                        src={productInfo.Image}
                    />

                    <Box
                        w={'100%'}
                        mt={5}
                        display={'flex'}
                        borderRadius={'xl'}
                        bg={'#d9d9d9'}
                    >
                        <Box
                            w={'30%'}
                            ml={'2'}
                            mt={'2'}
                            mb={'2'}
                        >
                            <VStack>

                                <Button
                                    {...inc}
                                    variant={'none'}
                                    size={'lg'}
                                    bg={'black'}
                                    color={'white'}
                                    fontSize={'4xl'}
                                    borderRadius={'xl'}
                                    onClick={
                                        () => {
                                            setOrderQuantity(input.value);
                                        }
                                    }
                                >
                                    +
                                </Button>

                                <Input
                                    {...input}
                                    value={orderQuantity}
                                    variant={'unstyled'}
                                    textAlign={'center'}
                                    color={'green'}
                                    fontSize={'xl'}
                                    onChange={
                                        () => {
                                            setOrderQuantity(input.value);
                                        }
                                    }
                                >

                                </Input>

                                <Button
                                    {...dec}
                                    variant={'none'}
                                    size={'lg'}
                                    bg={'black'}
                                    color={'white'}
                                    fontSize={'4xl'}
                                    borderRadius={'xl'}
                                    onClick={
                                        () => {
                                            setOrderQuantity(input.value);
                                        }
                                    }
                                >
                                    -
                                </Button>

                            </VStack>

                        </Box>

                        <Spacer />

                        <Box
                            w={'70%'}
                            mr={'2'}
                            mt={'2'}
                            mb={'2'}
                        >
                            <VStack
                                spacing={1}
                            >
                                <Text
                                    fontSize={'sm'}
                                    noOfLines={1}
                                    color={'red.500'}
                                >
                                    Minimum Order Quantity: {productInfo.MinQuantityForSale}
                                </Text>

                                <Text
                                    fontSize={'sm'}
                                    noOfLines={1}
                                    color={'red.500'}
                                >
                                    Minimum Purchase for Discount: {productInfo.MinQuantityForDiscount}
                                </Text>

                                <Text
                                    fontSize={'sm'}
                                    noOfLines={1}
                                    color={'red.500'}
                                >
                                    Minimum Discount : {productInfo.MinimumDiscount}%
                                </Text>

                                <Text
                                    fontSize={'sm'}
                                    noOfLines={1}
                                    color={'red.500'}
                                >
                                    Maximum Discount : {productInfo.MaximumDiscount}%
                                </Text>

                                <Text
                                    fontSize={'sm'}
                                    noOfLines={1}
                                    color={'red.500'}
                                >
                                    Discount Increment Rate: {productInfo.DiscountRate}%
                                </Text>

                                <Text
                                    fontSize={'sm'}
                                    noOfLines={1}
                                    color={'red.500'}
                                >
                                    Discount Increment Quantity: {productInfo.ProductQuantityForDiscountRate}
                                </Text>

                            </VStack>
                        </Box>

                    </Box>

                    <Text
                        mt={4}
                        noOfLines={1}
                        fontSize={'2xl'}
                    >
                        Total Price : Tk. {orderQuantity * productInfo.UnitPrice * (100 - discount) / 100}
                    </Text>

                    <Button
                        leftIcon={
                            <Image
                                boxSize={'30px'}
                                src={'shopping-cart-white.svg'}
                            />

                        }
                        mb={5}
                        bg={'blue.500'}
                        color={'white'}
                        borderRadius={'xl'}
                        onClick={
                            () => {
                                if (orderQuantity < productInfo.MinQuantityForSale) {
                                    alert("Minimum order quantity is " + productInfo.MinQuantityForSale);
                                    setOrderQuantity(productInfo.MinQuantityForSale);
                                }
                                else if (orderQuantity > productInfo.TotalQuantity) {
                                    alert("Not enough stock available.");
                                    setOrderQuantity(productInfo.TotalQuantity);
                                }
                                else {
                                    goToCart();
                                }
                            }

                        }
                    >
                        Add To Cart
                    </Button>

                </VStack>

            </Box>
        </>
    );
}
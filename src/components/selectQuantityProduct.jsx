import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

import {
    Box,
    Spacer,
    Text,
    Image,
    IconButton,
    VStack,
    Button,
    Input

} from "@chakra-ui/react";

export default function SelectQuantityProduct() {
    const location = useLocation();
    const navigate = useNavigate();

    const additionalInfo = location.state?.additionalInfo || {};
    const { pid } = additionalInfo;

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const topPartHeight = screenHeight * 0.13;

    const [productInfo, setProductInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [orderQuantity, setOrderQuantity] = useState(0);
    const [discount, setDiscount] = useState(0);

    console.log(pid);

    useEffect(() => {
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

        fetchProductInfo();

    }, []);

    useEffect(() => {

        if (orderQuantity < productInfo.MinQuantityForDiscount) {
            setDiscount(0);
        }

        else {
            setDiscount(Math.min(productInfo.MaximumDiscount, productInfo.MinimumDiscount + Math.floor((orderQuantity - productInfo.MinQuantityForDiscount) / productInfo.ProductQuantityForDiscountRate) * productInfo.DiscountRate));
        }

    }, [orderQuantity, productInfo]);

    if (loading) {
        return (
            <Box
                className="baloo"
                w={`${screenWidth}px`}
                h={`${screenHeight}px`}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
            >
                <Text
                    fontSize={'3xl'}
                    color={'#000000'}
                >
                    Loading...
                </Text>
            </Box>
        )
    }

    return (
        <>
            <Box
                className='baloo'
                w={`${screenWidth}px`}
                h={`${topPartHeight}px`}
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
                            navigate(-1);
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
                    />
                </Box>
            </Box>

            <Box
                className="baloo"
                w={`${screenWidth * 0.8}px`}
                ml={`${screenWidth * 0.1}px`}
                top={`${topPartHeight + 20}px`}
                bottom={'30px'}
                position={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
            >
                <VStack spacing={2}>
                    <Text
                        color={'#007321'}
                        noOfLines={1}
                        fontSize={'lg'}
                    >
                        {`Manufacturer : ${productInfo.ManufacturerName}`}
                    </Text>

                    <Text
                        color={'#13529B'}
                        noOfLines={2}
                        fontSize={'lg'}
                        textAlign={'center'}
                    >
                        {`Product: ${productInfo.ProductName} ${productInfo.Weight_volume}${productInfo.Unit}`}
                    </Text>

                    <Text
                        color={'#13529B'}
                        noOfLines={2}
                        fontSize={'lg'}
                        textAlign={'center'}
                    >
                        {`Category: ${productInfo.CategoryName}`}
                    </Text>

                    <Text
                        color={'#AC2323'}
                        noOfLines={3}
                        fontSize={'sm'}
                        textAlign={'center'}
                    >
                        {`Description: ${productInfo.Description}`}
                    </Text>

                    <Text
                        color={'#007321'}
                        noOfLines={1}
                        fontSize={'lg'}
                    >
                        {`Per Unit Price: Tk. ${productInfo.UnitPrice}`}
                    </Text>

                    <Text
                        color={'#007321'}
                        noOfLines={1}
                        fontSize={'lg'}
                    >
                        {`Total Quantity: ${productInfo.TotalQuantity}`}
                    </Text>

                    <Text
                        color={'#13529B'}
                        noOfLines={1}
                        fontSize={'lg'}
                    >
                        {
                            discount === 0 ?
                                `No Discount Available` :
                                `Applied Discount: ${discount}%`
                        }
                    </Text>
                </VStack>

                <Box
                    w={'100%'}
                    h={'35%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    bg={'#d9d9d9'}
                    mt={'5%'}
                    mb={'6%'}
                    borderRadius={'xl'}
                    flexDir={'row'}
                >

                    <Box
                        w={'35%'}
                        h={'100%'}
                        display={'flex'}
                        justifyContent={'right'}
                        alignItems={'center'}
                        ml={'5%'}
                    >
                        <VStack
                            spacing={4}
                        >

                            <Image
                                boxSize={'40px'}
                                src="/addSign.svg"
                                onClick={
                                    () => {
                                        if (orderQuantity > productInfo.TotalQuantity) {
                                            setOrderQuantity(productInfo.TotalQuantity);
                                            alert("Not enough stock available.");
                                        }
                                        else {
                                            setOrderQuantity(parseInt(orderQuantity) + 1);
                                        }
                                    }
                                }
                            />

                            <Input
                                required={true}
                                color={'green'}
                                fontWeight={'bold'}
                                fontSize={'xl'}
                                textAlign={'center'}
                                placeholder={'30'}
                                variant={'unstyled'}
                                type="number"
                                value={orderQuantity}
                                onChange={
                                    (e) => {
                                        setOrderQuantity(e.target.value);
                                    }
                                }
                            />

                            <Image
                                boxSize={'50px'}
                                src="/minusSign.svg"
                                onClick={
                                    () => {
                                        if (orderQuantity > productInfo.MinQuantityForSale) {
                                            setOrderQuantity(orderQuantity - 1);
                                        }
                                        else {
                                            setOrderQuantity(productInfo.MinQuantityForSale);
                                            alert("Minimum order quantity is " + productInfo.MinQuantityForSale);
                                        }
                                    }
                                }
                            />

                        </VStack>
                    </Box>

                    <Box
                        w={'65%'}
                        h={'100%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >

                        <VStack spacing={2}>

                            <Text
                                color={'red'}
                                textAlign={'left'}
                                fontSize={'xs'}
                            >
                                {`Min. Order Quantity: ${productInfo.MinQuantityForSale}`}
                            </Text>

                            <Text
                                color={'red'}
                                textAlign={'left'}
                                fontSize={'xs'}
                            >
                                {`Min. Purchase for Discount: ${productInfo.MinQuantityForDiscount}`}
                            </Text>

                            <Text
                                color={'red'}
                                textAlign={'left'}
                                fontSize={'xs'}
                            >
                                {`Min. Discount : ${productInfo.MinimumDiscount}%`}
                            </Text>

                            <Text
                                color={'red'}
                                textAlign={'left'}
                                fontSize={'xs'}
                            >
                                {`Max. Discount : ${productInfo.MaximumDiscount}%`}
                            </Text>

                            <Text
                                color={'red'}
                                textAlign={'left'}
                                fontSize={'xs'}
                            >
                                {`Discount Increment Rate: ${productInfo.DiscountRate}%`}
                            </Text>

                            <Text
                                color={'red'}
                                textAlign={'left'}
                                fontSize={'xs'}
                            >
                                {`Discount Increment Quantity: ${productInfo.ProductQuantityForDiscountRate}`}
                            </Text>

                        </VStack>

                    </Box>

                </Box>

                <Text
                    color={'#AC2323'}
                    noOfLines={1}
                    fontSize={'xl'}
                >
                    {`Total Price: Tk. ${orderQuantity * productInfo.UnitPrice * (100 - discount) / 100}`}
                </Text>

                <Button
                    bg={'#1B2A78'}
                    mt={'3%'}
                    w={'60%'}
                    color={'#ffffff'}
                    fontSize={'xl'}
                    borderRadius={'xl'}
                    _hover={
                        {
                            bg: '#1B2A78'
                        }
                    }
                    leftIcon={
                        <Image
                            boxSize={'30px'}
                            src="/shopping-cart-white.svg"
                        />
                    }
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
                                navigate('/cart');
                            }
                        }

                    }
                >
                    <Spacer></Spacer>
                    Add To Cart
                    <Spacer></Spacer>
                </Button>

            </Box >
        </>
    )
}
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

import {
    Box,
    Spacer,
    Image,
    IconButton,
    VStack,
    HStack,
    Text,
    Textarea,
    Divider,
    Spinner,
    Button

} from '@chakra-ui/react';


import { getFormattedDate } from './OrderHistoryItem';
import OrderDetailProductItem from './OrderDetailProductItem';
import StarIcon from './StarIcon';

export default function OrderDetails() {

    const navigate = useNavigate();
    let locationData = useLocation().state;

    const [isLoading, setIsLoading] = useState(true);
    const [orderDetails, setOrderDetails] = useState({});
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const characterLimit = 150; // Set your desired character limit

    const handleReviewChange = (event) => {
        const inputReview = event.target.value;
        if (inputReview.length <= characterLimit) {
            setReview(inputReview);
        }
    };

    const handleSubmitReview = async () => {
        // TODO: Submit review and rating to the server
        const postData = {
            oid: locationData.oid,
            mid: locationData.mid,
            Rating: rating,
            Review: review
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/order/addReviewRating`;

        try {
            const response = await axios.post(apiUrl, postData);
            if (response.data.success === true) {
                alert('Review submitted successfully');
                setRating(0);
                setReview('');
            }
        } catch (error) {
            console.log('Error submitting review');
        }
    }

    const handleStarClick = (clickedRating) => {
        setRating((prevRating) => (prevRating === clickedRating ? Math.max(0, prevRating - 1) : clickedRating));
    };

    const fetchOrderDetails = async () => {
        const postData = {
            mid: locationData.mid,
            oid: locationData.oid
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/order/retailer/singleOrder`;

        try {
            const response = await axios.post(apiUrl, postData);
            if (response.data.DeliveryDate === null) {
                response.data.DeliveryDate = 'Waiting for delivery date';
            }

            else {
                response.data.DeliveryDate = getFormattedDate(response.data.DeliveryDate);
            }

            response.data.OrderDate = getFormattedDate(response.data.OrderDate);

            setOrderDetails(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error fetching order details');
        }
    }

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    if (isLoading) {
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
            {/* top part */}
            <Box
                className='baloo'
                w={"100%"}
                h={"12%"}
                bg={'#190F37'}
                pos={"fixed"}
                display={"flex"}
                alignItems={"center"}
            >

                <Box display={'flex'} ml={5}>
                    <IconButton
                        icon={<Image src="arrow-left-circle.svg" alt="back" />}
                        size="lg"
                        isRound={true}
                        onClick={() => navigate('/orderHistory', { state: locationData })}
                    />
                </Box>

                <Spacer />

                <Box display={'flex'}>
                    <Text color="white" fontSize="3xl">
                        Order Details
                    </Text>
                </Box>

                <Spacer />

            </Box>

            {/* main content */}
            <Box
                className='baloo'
                w={"100%"}
                h={"85%"}
                top={"15%"}
                pos={"fixed"}
                overflow={"auto"}
            >
                <VStack
                    align={'left'}
                    ml={3}
                >

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Order ID
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'orange.600'}
                        >
                            {locationData.oid}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Transaction ID
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'blue.600'}
                        >
                            {orderDetails.TransactionID}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Order Date
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'teal.500'}
                        >
                            {orderDetails.OrderDate}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Delivery Status
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'pink.500'}
                        >
                            {orderDetails.DeliveryStatus}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Delivery Date
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'yellow.500'}
                        >
                            {orderDetails.DeliveryDate}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Shipment Status
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'purple.500'}
                        >
                            {orderDetails.ShipmentStatus}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Shipment Status
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'purple.500'}
                        >
                            {orderDetails.ShipmentStatus}
                        </Text>

                    </HStack>

                    {
                        orderDetails.VoucherCode !== null &&
                        <HStack>

                            <Text
                                textAlign={'center'}
                                noOfLines={2}
                                fontSize={'xl'}
                            >
                                Applied Voucher
                            </Text>

                            <Text
                                textAlign={'center'}
                                fontSize={'xl'}
                            >
                                :
                            </Text>

                            <Text
                                textAlign={'center'}
                                fontSize={'xl'}
                                noOfLines={2}
                                color={'green.400'}
                            >
                                {orderDetails.VoucherCode}
                            </Text>

                        </HStack>
                    }

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Payment Method
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'blue.500'}
                        >
                            {orderDetails.PaymentMethod}
                        </Text>

                    </HStack>

                    <HStack>

                        <Text
                            textAlign={'center'}
                            noOfLines={2}
                            fontSize={'xl'}
                        >
                            Payment Status
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                        >
                            :
                        </Text>

                        <Text
                            textAlign={'center'}
                            fontSize={'xl'}
                            noOfLines={2}
                            color={'red.500'}
                        >
                            {orderDetails.PaymentStatus}
                        </Text>

                    </HStack>

                </VStack>

                <Box mt={5}>
                    <Text
                        textAlign={'center'}
                        fontSize={'2xl'}
                    >
                        Ordered Products
                    </Text>

                    <Divider
                        w={'96%'}
                        ml={'2%'}
                        mb={'2'}
                        borderWidth={2}
                        borderColor={'black'}
                    />

                    {
                        orderDetails.Products.map((product) => {
                            return (
                                <OrderDetailProductItem
                                    key={product.pid}
                                    product={product}
                                />
                            );
                        })
                    }

                    <Divider
                        w={'96%'}
                        ml={'2%'}
                        mt={2}
                        mb={2}
                        borderWidth={2}
                        borderColor={'black'}
                    />

                    <Box
                        display={'flex'}
                    >
                        <Text
                            fontSize={'lg'}
                            ml={3}
                        >
                            SubTotal
                        </Text>

                        <Spacer />

                        <Text
                            fontSize={'lg'}
                            mr={3}
                            color={'green.700'}
                        >
                            Tk. {orderDetails.RawPrice.toFixed(2)}
                        </Text>

                    </Box>

                    <Box
                        display={'flex'}
                    >
                        <Text
                            fontSize={'lg'}
                            ml={3}
                        >
                            Delivery Fee
                        </Text>

                        <Spacer />

                        <Text
                            fontSize={'lg'}
                            mr={3}
                            color={'orange.400'}
                        >
                            + Tk. {orderDetails.DeliveryCharge.toFixed(2)}
                        </Text>

                    </Box>

                    <Box
                        display={'flex'}
                    >
                        <Text
                            fontSize={'lg'}
                            ml={3}
                        >
                            Discount
                        </Text>

                        <Spacer />

                        <Text
                            fontSize={'lg'}
                            mr={3}
                            color={'red.700'}
                        >
                            - Tk. {orderDetails.ReducedAmount.toFixed(2)}
                        </Text>

                    </Box>

                    <Divider
                        w={'96%'}
                        ml={'2%'}
                        mt={'2'}
                        mb={'2'}
                        borderWidth={2}
                        borderColor={'black'}
                    />

                    <Box
                        display={'flex'}
                    >
                        <Text
                            fontSize={'xl'}
                            ml={3}
                        >
                            Total
                        </Text>

                        <Spacer />

                        <Text
                            fontSize={'lg'}
                            mr={3}
                            color={'#3D5DB0'}
                        >
                            Tk. {orderDetails.FinalPrice.toFixed(2)}
                        </Text>

                    </Box>

                    <Divider
                        w={'96%'}
                        ml={'2%'}
                        mt={'2'}
                        mb={'2'}
                        borderWidth={2}
                        borderColor={'black'}
                    />

                    <Box
                        display={'flex'}
                        mt={5}
                        alignItems={'center'}
                    >
                        <Text
                            fontSize={'2xl'}
                            ml={3}
                        >
                            Rate
                        </Text>

                        <Spacer />

                        {[1, 2, 3, 4, 5].map((index) => (
                            <StarIcon
                                key={index}
                                selected={index <= rating}
                                onClick={() => handleStarClick(index)}
                            />
                        ))}

                    </Box>

                    <Box
                        w={'94%'}
                        mt={5}
                        ml={'3%'}
                        mb={5}
                    >
                        <Text
                            fontSize={'2xl'}
                        >
                            Review
                        </Text>

                        <Text
                            color="gray.500"
                        >
                            {`${review.length}/${characterLimit} characters`}
                        </Text>

                        <VStack
                            align="start"
                            spacing={4}
                        >
                            <Textarea
                                borderWidth={2}
                                value={review}
                                onChange={handleReviewChange}
                                placeholder="Write your review..."
                            />

                            <Button
                                colorScheme="teal"
                                onClick={handleSubmitReview}
                            >
                                Submit
                            </Button>

                        </VStack>

                    </Box>

                </Box>

            </Box>

        </>
    )
}
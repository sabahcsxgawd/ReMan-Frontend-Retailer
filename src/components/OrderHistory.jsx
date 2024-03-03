import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';
import OrderHistoryItem from './OrderHistoryItem';
import UserProfileDrawer from "./UserProfileDrawer";

import {
    Box,
    Spacer,
    Image,
    IconButton,
    ButtonGroup,
    VStack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Spinner

} from '@chakra-ui/react';

export default function OrderHistory() {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);

    const screenHeight = window.screen.height;
    const screenWidth = window.screen.width;

    const topPartHeightPercentage = 0.12;
    const bottomPartHeightPercentage = 0.11;
    const middlePartPaddingPercentage = 0.02;
    const middlePartHeightPercentage = 1 - topPartHeightPercentage - bottomPartHeightPercentage - (2 * middlePartPaddingPercentage);

    const [isloading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    const fetchOrderHistory = async () => {
        try {
            const postData = {
                sid: locationData.sid
            };
            const apiUrl = `${import.meta.env.VITE_API_URL}/order/retailer`;
            const response = await axios.post(apiUrl, postData);
            setOrders(response.data.orders);
            setIsLoading(false);
        } catch (error) {
            console.log('Error fetching Order History');
        }
    }

    useEffect(() => {
        fetchOrderHistory();
    }, []);

    if (isloading) {
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
            {/* Drawer */}
            <UserProfileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

            {/* top part */}
            <Box
                className='baloo'
                w={'100%'}
                h={`${topPartHeightPercentage * 100}%`}
                top={0}
                pos={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box>
                    <VStack ml={'3'}>

                        <Image
                            mt={'1'}
                            src='reman-logo.svg'
                            boxSize={`${screenHeight * topPartHeightPercentage * 0.5}px`}
                        />

                        <Text
                            noOfLines={1}
                            fontWeight={'bold'}
                            fontSize={'sm'}
                            mt={'-3'}
                        >
                            ReMan
                        </Text>

                        <Text
                            noOfLines={1}
                            fontWeight={'bold'}
                            fontSize={'xs'}
                            mt={'-3'}
                        >
                            Connecting Shops
                        </Text>

                    </VStack>
                </Box>

                <Spacer />

                <Box>
                    <ButtonGroup gap={'3'} mr={'5'}>
                        <IconButton
                            icon={<Image
                                src='shopping-cart.svg'
                                alt='cart'
                                boxSize={`${screenHeight * topPartHeightPercentage * 0.4}px`}
                            />}
                            isRound={true}
                            boxSize={`${screenHeight * topPartHeightPercentage * 0.6}px`}
                            bg={'#d9d9d9'}
                            onClick={() => navigate('/cart', { state: locationData })}
                        />

                        <IconButton
                            icon={<Image
                                src='profile.svg'
                                alt='profile'
                                boxSize={`${screenHeight * topPartHeightPercentage * 0.4}px`}
                            />}
                            isRound={true}
                            boxSize={`${screenHeight * topPartHeightPercentage * 0.6}px`}
                            bg={'#d9d9d9'}
                            onClick={handleOpenDrawer}
                        />

                    </ButtonGroup>
                </Box>
            </Box>

            {/* middle part top padding */}
            <Box
                w={'100%'}
                h={`${middlePartPaddingPercentage * 100}%`}
                top={`${topPartHeightPercentage * 100}%`}
                pos={'fixed'}
                bg={'white'}
            />
            {/* middle part */}
            <Box
                w={'90%'}
                h={`${middlePartHeightPercentage * 100}%`}
                left={'5%'}
                top={`${(topPartHeightPercentage + middlePartPaddingPercentage) * 100}%`}
                bottom={`${(bottomPartHeightPercentage + middlePartPaddingPercentage) * 100}%`}
                pos={'fixed'}
                overflow={'auto'}
            >
                {
                    orders.map((order) => {
                        return (
                            <OrderHistoryItem
                                key={order.oid + order.mid}
                                order={order}
                            />
                        );
                    })
                }

            </Box>

            {/* middle part bottom padding */}
            <Box
                w={'100%'}
                h={`${middlePartPaddingPercentage * 100}%`}
                bottom={`${bottomPartHeightPercentage * 100}%`}
                pos={'fixed'}
                bg={'white'}
            />

            {/* bottom part */}
            <Box
                className='baloo'
                w={'100%'}
                h={`${bottomPartHeightPercentage * 100}%`}
                bottom={0}
                pos={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderTopColor={'black'}
                borderTopWidth={'2px'}
            >
                <Spacer />

                <Box>
                    <VStack>
                        <Image
                            mb={'-1'}
                            src='/home.svg'
                            alt='home'
                            boxSize={`${screenHeight * bottomPartHeightPercentage * 0.55}px`}
                            onClick={() => navigate('/home', { state: locationData })}
                        />
                        <Text
                            mt={'-1'}
                            noOfLines={1}
                        >
                            Home
                        </Text>
                    </VStack>
                </Box>

                <Spacer />
                <Spacer />

                <Box
                    onClick={() => navigate('/categories', { state: locationData })}
                >
                    <VStack>
                        <Image
                            mb={'-1'}
                            src='/category.svg'
                            alt='Categories'
                            boxSize={`${screenHeight * bottomPartHeightPercentage * 0.55}px`}
                        />
                        <Text
                            mt={'-2'}
                            noOfLines={1}
                        >
                            Categories
                        </Text>
                    </VStack>
                </Box>

                <Spacer />

            </Box>

        </>
    );
}
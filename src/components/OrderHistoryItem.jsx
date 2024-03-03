import {
    Box,
    Image,
    VStack,
    HStack,
    Text,
    Button
} from '@chakra-ui/react';

import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderHistoryItem({ order }) {

    const orderStatusMap = {
        'In Progress': '#957AE3',
        'Delivered': '#007321',
        'Cancelled': '#B12626',
        'Out for Delivery': '#996322',
    };

    const Time_AM_PM_Map = {
        'AM': '#957AE3',
        'PM': '#F64157'
    }

    if (order.PaymentMethod.includes('Online')) {
        order.PaymentMethod = 'Online';
    }

    const orderDate = new Date(order.OrderDate);
    const formattedOrderDate = `${orderDate.getUTCDate()} / ${(orderDate.getUTCMonth() + 1).toString().padStart(2, '0')} / ${orderDate.getUTCFullYear()}`;

    const navigate = useNavigate();
    let locationData = useLocation().state;

    return (
        <Box
            w={'100%'}
            h={'25%'}
        >
            <Box
                w={'100%'}
                h={'92%'}
                borderRadius={'xl'}
                borderWidth={2}
                borderColor={'black'}
                bg={'#F5F5F5'}
                display={'flex'}
            >
                <Box
                    w={'20%'}
                    display={'flex'}
                    justifyContent={'right'}
                    alignItems={'center'}
                    borderRadius={'xl'}
                >
                    <Image
                        boxSize={'95%'}
                        src='manufacturer.svg'
                    />
                </Box>

                <Box
                    className='baloo'
                    w={'50%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <VStack
                        ml={1}
                        mr={1}
                        spacing={0}
                    >
                        <HStack
                            w={'100%'}
                            spacing={0}
                        >
                            <Text
                                w={'65%'}
                                noOfLines={1}
                                color={'#3A59A7'}
                                textAlign={'left'}
                                fontSize={'sm'}
                            >
                                Payment Method :
                            </Text>

                            <Text
                                w={'35%'}
                                noOfLines={1}
                                color={'#000000'}
                                textAlign={'right'}
                                fontSize={'sm'}
                            >
                                {order.PaymentMethod}
                            </Text>
                        </HStack>

                        <HStack
                            w={'100%'}
                            spacing={0}
                        >
                            <Text
                                w={'55%'}
                                noOfLines={1}
                                color={'#38BA55'}
                                textAlign={'left'}
                                fontSize={'sm'}
                            >
                                Manufacturer :
                            </Text>

                            <Text
                                w={'45%'}
                                noOfLines={1}
                                color={'#38BA55'}
                                textAlign={'right'}
                                fontSize={'sm'}
                            >
                                {order.ManufacturerName}
                            </Text>

                        </HStack>

                        <HStack
                            w={'100%'}
                            spacing={0}
                        >
                            <Text
                                w={'45%'}
                                noOfLines={1}
                                color={'#000000'}
                                textAlign={'left'}
                                fontSize={'sm'}
                            >
                                Order ID :
                            </Text>

                            <Text
                                w={'55%'}
                                noOfLines={1}
                                color={'#000000'}
                                textAlign={'right'}
                                fontSize={'sm'}
                            >
                                {order.oid}
                            </Text>

                        </HStack>

                        <HStack
                            w={'100%'}
                            spacing={0}
                        >
                            <Text
                                w={'65%'}
                                noOfLines={1}
                                color={'#5A6131'}
                                textAlign={'left'}
                                fontSize={'sm'}
                            >
                                Payment Status :
                            </Text>

                            <Text
                                w={'35%'}
                                noOfLines={1}
                                color={orderStatusMap['In Progress']}
                                textAlign={'right'}
                                fontSize={'sm'}
                            >
                                {order.PaymentStatus}
                            </Text>

                        </HStack>

                        <HStack
                            w={'100%'}
                            spacing={0}
                        >
                            <Text
                                w={'65%'}
                                noOfLines={1}
                                color={'#5A6131'}
                                textAlign={'left'}
                                fontSize={'sm'}
                            >
                                Delivery Status :
                            </Text>

                            <Text
                                w={'35%'}
                                noOfLines={1}
                                color={orderStatusMap['Cancelled']}
                                textAlign={'right'}
                                fontSize={'sm'}
                            >
                                {order.DeliveryStatus}
                            </Text>

                        </HStack>

                    </VStack>

                </Box>

                <Box
                    className='baloo'
                    w={'30%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'right'}
                    alignItems={'center'}
                >
                    <VStack>
                        <HStack>
                            <Text>
                                10:00
                            </Text>
                            <Text>
                                AM
                            </Text>
                        </HStack>

                        <Text>
                            {formattedOrderDate}
                        </Text>

                        <Button
                            bg={'#d9d9d9'}
                            borderRadius={'xl'}
                            onClick={
                                () => {
                                    locationData.oid = order.oid;
                                    navigate('/order-details', { state: locationData });
                                }
                            }
                        >
                            More Info
                        </Button>

                    </VStack>

                </Box>

            </Box>

            <Box
                w={'100%'}
                h={'8%'}
                bg={'white'}
            />

        </Box>
    );
}
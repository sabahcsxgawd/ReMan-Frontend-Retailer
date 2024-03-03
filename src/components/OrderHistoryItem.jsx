import {
    Box,
    Image,
    VStack,
    HStack,
    Text,
    Button
} from '@chakra-ui/react';

import { useLocation, useNavigate } from 'react-router-dom';

export function getFormattedDate(orderDate) {
    if (orderDate === null || orderDate === undefined) {
        return '';
    }
    orderDate = new Date(orderDate);
    return `${orderDate.getUTCDate().toString().padStart(2, '0')} / ${(orderDate.getUTCMonth() + 1).toString().padStart(2, '0')} / ${orderDate.getUTCFullYear()}`;
}

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
    const formattedOrderDate = getFormattedDate(orderDate);

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
                    w={'55%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <VStack
                        w={'100%'}
                        ml={'2'}
                        spacing={0}
                    >
                        <OrderHistoryMiddleFragment
                            w1={60}
                            color1={'#3A59A7'}
                            color2={'black'}
                            text1={'Payment Method'}
                            text2={order.PaymentMethod}
                        />

                        <OrderHistoryMiddleFragment
                            w1={50}
                            color1={'#38BA55'}
                            color2={'#38BA55'}
                            text1={'Manufacturer'}
                            text2={order.ManufacturerName}
                        />

                        <OrderHistoryMiddleFragment
                            w1={55}
                            color1={'#5A6131'}
                            color2={orderStatusMap['In Progress']}
                            text1={'Payment Status'}
                            text2={order.PaymentStatus}
                        />

                        <OrderHistoryMiddleFragment
                            w1={55}
                            color1={'#5A6131'}
                            color2={orderStatusMap[order.DeliveryStatus]}
                            text1={'Delivery Status'}
                            text2={order.DeliveryStatus}
                        />

                        <OrderHistoryMiddleFragment
                            w1={58}
                            color1={'#black'}
                            color2={'black'}
                            text1={'Shipment Status'}
                            text2={order.ShipmentStatus}
                        />

                    </VStack>

                </Box>

                <Box
                    className='baloo'
                    w={'25%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'right'}
                    alignItems={'center'}
                >
                    <VStack
                        w={'100%'}
                    >
                        <HStack>
                            <Text
                                noOfLines={1}
                                fontSize={'md'}
                            >
                                10:00
                            </Text>

                            <Text
                                noOfLines={1}
                                fontSize={'md'}
                                color={Time_AM_PM_Map['AM']}
                            >
                                AM
                            </Text>

                        </HStack>

                        <Text
                            noOfLines={1}
                            fontSize={'sm'}
                        >
                            {formattedOrderDate}
                        </Text>

                        <Button
                            size={'sm'}
                            bg={'#d9d9d9'}
                            borderRadius={'xl'}
                            onClick={
                                () => {
                                    locationData.oid = order.oid;
                                    locationData.mid = order.mid;
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

export function OrderHistoryMiddleFragment({ w1, color1, color2, text1, text2 }) {
    return (
        <HStack
            w={'100%'}
            display={'flex'}
            spacing={0}
        >
            <Text
                w={`${w1}%`}
                noOfLines={1}
                color={color1}
                textAlign={'left'}
                fontSize={'sm'}
            >
                {text1} :
            </Text>

            <Text
                w={`${100 - w1}%`}
                noOfLines={1}
                color={color2}
                textAlign={'right'}
                fontSize={'sm'}
            >
                {text2}
            </Text>
        </HStack>
    );
}
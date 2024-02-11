import {
    Box,
    Text,
    Image,
    VStack,

} from "@chakra-ui/react";

import SingleOrderFragment from "./singleOrderFragment";


export default function OrderFragment({ index, orderFragment }) {

    const singleOrderFragments = orderFragment.products;

    return (
        <>
            {
                index !== 0 &&
                <Box
                    w={'100%'}
                    h={'4%'}
                >
                </Box>
            }
            <Box
                w={'100%'}
                h={'48%'}
                bg={'#566884'}
                pos={'sticky'}
                display={'flex'}
                overflow={'auto'}
                flexDir={'column'}
                borderRadius={'2xl'}
            >

                <Box
                    w={'94%'}
                    h={'68%'}
                    ml={'3%'}
                    mt={'2%'}
                    display={'flex'}
                    flexDir={'column'}
                    overflow={'auto'}
                >
                    <VStack>

                        {
                            singleOrderFragments.map((order) => {
                                return (
                                    <SingleOrderFragment
                                        key={order.pid}
                                        order={order}
                                    />
                                );
                            })
                        }

                    </VStack>

                </Box>

                <Box
                    w={'100%'}
                    h={'15%'}
                    display={'flex'}
                    justifyContent={'left'}
                    pos={'sticky'}
                >
                    <Text
                        ml={'5%'}
                        color={'green.400'}
                        fontSize={'lg'}
                    >
                        {`Manufacturer: \u00A0${orderFragment.ManufacturerName}`}
                    </Text>
                </Box>

                <Box
                    w={'100%'}
                    h={'15%'}
                    display={'flex'}
                    justifyContent={'left'}
                    alignItems={'center'}
                    pos={'sticky'}
                >
                    <Text
                        ml={'5%'}
                        color={'green.400'}
                        fontSize={'lg'}
                    >
                        {`Delivery Charge: \u00A0Tk. \u00A0${orderFragment.totalDeliveryCharge}`}
                    </Text>
                </Box>

            </Box>
        </>
    );
}
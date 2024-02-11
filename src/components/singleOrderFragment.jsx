import {
    Box,
    Text,
    Image,

} from "@chakra-ui/react";

export default function SingleOrderFragment({ order }) {

    const discount = ((order.UnitPrice * order.Quantity) - order.Price) * 100 / (order.UnitPrice * order.Quantity);

    return (
        <Box
            w={'100%'}
            h={'100%'}
        >

            <Box
                w={'100%'}
                h={'70%'}
                display={'flex'}
                flexDir={'row'}
            >
                <Box
                    w={'55%'}
                    h={'100%'}
                >
                    <Text
                        noOfLines={3}
                        fontSize={'md'}
                        textAlign={'left'}
                    >
                        {`${order.Quantity}x \u00A0${order.Weight_volume}${order.Unit}`}
                        <br />
                        {`${order.ProductName}`}
                    </Text>

                </Box>

                <Box
                    w={'10%'}
                    h={'50%'}
                >
                    <Image
                        src={'/trash.svg'}
                        boxSize={'80%'}
                    />

                </Box>

                <Box
                    w={'35%'}
                    h={'100%'}
                >
                    <Text
                        noOfLines={2}
                        fontSize={'lg'}
                        color={'orange.400'}
                        textAlign={'right'}
                    >
                        {`Tk. ${order.Price}`}
                    </Text>

                </Box>

            </Box>

            <Box
                w={'100%'}
                h={'15%'}
                display={'flex'}
                justifyContent={'left'}
                alignItems={'center'}
            >
                <Text
                    ml={'2%'}
                    fontSize={'md'}
                    textAlign={'left'}
                    noOfLines={1}
                    color={'yellow.400'}
                >
                    {`Unit Price \u00A0Tk. ${order.UnitPrice}`}
                </Text>

            </Box>

            <Box
                w={'100%'}
                h={'15%'}
                display={'flex'}
                justifyContent={'left'}
                alignItems={'center'}
            >
                <Text
                    ml={'2%'}
                    mt={'1%'}
                    fontSize={'md'}
                    textAlign={'left'}
                    noOfLines={1}
                    color={'yellow.400'}
                >
                    {`Applied Discount: \u00A0${discount.toFixed(2)}%`}
                </Text>

            </Box>

        </Box>
    );
}
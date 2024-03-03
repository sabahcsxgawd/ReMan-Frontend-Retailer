import {
    Box,
    Spacer,
    Text
} from '@chakra-ui/react';

export default function OrderDetailProductItem({ product }) {
    return (
        <Box
            display={'flex'}
        >
            <Text
                fontSize={'md'}
                ml={3}
            >
                {product.Quantity}x &nbsp; {product.Weight_volume}{product.Unit} &nbsp; {product.ProductName}
            </Text>

            <Spacer />

            <Text
                fontSize={'lg'}
                mr={3}
                color={'pink.700'}
            >
                Tk. {product.Price.toFixed(2)}
            </Text>

        </Box>
    );
}
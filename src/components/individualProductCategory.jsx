import {
    Box,
    HStack,
    VStack,
    Text,
    Spacer,
    Image
} from '@chakra-ui/react';

export default function IndividualProductCategory({ category, screenWidth, screenHeight, manufacturerName, productName, weightVolume, unit, unitPrice }) {
    return (
        <Box
            w={'100%'}
            h={`${screenHeight * 0.2}px`}
            borderWidth={2}
            borderColor={'#000000'}
            borderRadius={'3xl'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <HStack>
                <VStack
                    spacing={'0px'}
                    align={'left'}
                // ml={'-15%'}
                >
                    <Text
                        color={'#007321'}
                    >
                        {manufacturerName}
                    </Text>
                    <Text
                        color={'#13529B'}
                    >
                        {productName}
                    </Text>
                    <Text
                        color={'#007321'}
                    >
                        {`${weightVolume}${unit}`}
                    </Text>
                </VStack>
                <Spacer />
                <VStack spacing={'3px'}>
                    <Image
                        // TODO: Change the image path
                        src={`/category-images/${category.toLowerCase()}.svg`}
                        boxSize={`${screenWidth * 0.15}px`}
                    />
                    <Text
                        color={'#122F79'}
                    >
                        {`Tk. ${unitPrice} Per Unit`}
                    </Text>
                </VStack>
                <Spacer />
                <VStack
                    spacing={'15px'}
                // mr={'-12%'}
                >
                    <Image
                        src="/add-to-cart.svg"
                        boxSize={`${screenWidth * 0.12}px`}
                    />
                    <Text
                        color={'#AC0101'}
                    >
                        {/* TODO: Change the MRP value */}
                        {`(MRP : ${unitPrice})`}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
}
import {
    Box,
    Spacer,
    HStack,
    Text,
    Image,
} from '@chakra-ui/react';

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomColor = getRandomColor();
console.log(randomColor);

export default function HomeCategoryItem({ screenHeight, screenWidth, categoryName, categoryImagePath }) {
    return (
        <Box
            w={'100%'}
            h={`${screenHeight * 0.15}px`}
            borderRadius={'30px'}
            bg={getRandomColor()}
        >
            <HStack>
                <Text
                    fontSize={`${screenWidth * 0.07}px`}
                    w={'100%'}
                    h={`${screenHeight * 0.15}px`}
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                >
                    {categoryName}
                </Text>
                <Image
                    src={categoryImagePath}
                    alt={categoryName}
                    boxSize={`${screenHeight * 0.12}px`}
                />
                <Spacer />
                <Spacer />
            </HStack >
        </Box>
    );
}
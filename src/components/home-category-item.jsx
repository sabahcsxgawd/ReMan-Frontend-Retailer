import {
    Box,
    Spacer,
    HStack,
    Text,
    Image,
} from '@chakra-ui/react';

import { useNavigate, useLocation } from 'react-router-dom';

export function getRandomColor() {
    const letters = "789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

export default function HomeCategoryItem({ screenHeight, screenWidth, categoryName, categoryImagePath }) {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    return (
        <Box
            w={'100%'}
            h={`${screenHeight * 0.15}px`}
            borderRadius={'30px'}
            bg={getRandomColor()}
            onClick={
                () => {
                    navigate(`/categories/${categoryName}`, {state: locationData})
                }
            }
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
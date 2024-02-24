import {
    Box,
    Spacer,
    Image, Text
} from '@chakra-ui/react';

import { useLocation, useNavigate } from 'react-router-dom';

export function getRandomColor() {
    const letters = "789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}


export default function HomeCategoryItem({ categoryName, categoryImageSize }) {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    return (
        <Box
            w={'100%'}
            h={'25%'}
            onClick={() => navigate(`/categories/${categoryName}`, { state: locationData })}
        >
            <Box
                w={'90%'}
                ml={'5%'}
                h={'92%'}
                bg={getRandomColor}
                borderRadius={'xl'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Spacer />
                <Text
                    noOfLines={1}
                    fontWeight={'bold'}
                    fontSize={'2xl'}
                >
                    {`${categoryName}`}
                </Text>
                <Spacer />
                <Image
                    src={`/category-images/${categoryName.toLowerCase()}.svg`}
                    alt={`${categoryName}`}
                    boxSize={`${categoryImageSize}px`} />
                <Spacer />

            </Box>

            <Box
                h={'8%'} />
        </Box>
    );
}


import {
    Box,
    Text
} from '@chakra-ui/react';
import { getRandomColor } from './home-category-item';


export default function PopularCategoryItems({ screenWidth, category }) {
    return (
        <Box
            bg={getRandomColor()}
            w={`${screenWidth * 0.95 * 5 / 21}px`}
            border={'2px solid black'}
            borderRadius={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            onClick={() => window.location.href = `/categories/${category}`}
        >
            <Text fontSize={'md'}>{category}</Text>
        </Box>
    );
}
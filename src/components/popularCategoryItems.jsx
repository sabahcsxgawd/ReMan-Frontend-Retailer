import {
    Box,
    Text
} from '@chakra-ui/react';

import { getRandomColor } from './HomeCategoryItem';

import { useNavigate, useLocation } from 'react-router-dom';

export default function PopularCategoryItems({ screenWidth, category }) {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    return (
        <Box
            bg={getRandomColor()}
            w={`${screenWidth * 0.95 * 5 / 21}px`}
            border={'2px solid black'}
            borderRadius={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            onClick={
                () => {
                    navigate(`/categories/${category}`, {state: locationData})
                }
            }
        >
            <Text fontSize={'md'}>{category}</Text>
        </Box>
    );
}
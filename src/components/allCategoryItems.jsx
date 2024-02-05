import { getRandomColor } from "./home-category-item";

import {
    Button,
    Text,
} from '@chakra-ui/react';

import { ChevronRightIcon } from "@chakra-ui/icons";

export default function AllCategoryItems({ category }) {
    return (
        <Button
            w={'100%'}
            h={'90px'}
            borderRadius={'full'}
            rightIcon={<ChevronRightIcon boxSize={12} />}
            bg={getRandomColor()}
            onClick={() => window.location.href = `/categories/${category}`}
        >
            <Text
                fontSize={'40px'}
                ml={'20px'}
            >
                {category}
            </Text>
        </Button>
    );
}
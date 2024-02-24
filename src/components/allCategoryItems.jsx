import { getRandomColor } from "./HomeCategoryItem";
import { useNavigate, useLocation } from "react-router-dom";

import {
    Button,
    Text,
} from '@chakra-ui/react';

import { ChevronRightIcon } from "@chakra-ui/icons";

export default function AllCategoryItems({ category }) {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    return (
        <Button
            w={'100%'}
            h={'90px'}
            borderRadius={'full'}
            rightIcon={<ChevronRightIcon boxSize={12} />}
            bg={getRandomColor()}
            onClick={
                () => {
                    navigate(`/categories/${category}`, {state: locationData})
                }
            }
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
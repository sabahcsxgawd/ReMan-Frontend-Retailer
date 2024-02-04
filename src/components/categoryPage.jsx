import { useEffect, useState } from 'react';

import axios from 'axios';

import {
    Box,
    HStack,
    VStack,
    Spacer,
    Button,
    IconButton,
    Image,
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    SimpleGrid

} from '@chakra-ui/react';

import PopularCategoryItems from './popularCategoryItems';
import AllCategoryItems from './allCategoryItems';

export function CategoryPage() {

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const topPartHeight = screenHeight * 0.1;
    const searchPartHeight = screenHeight * 0.08;
    const popularPartHeight = screenHeight * 0.16;
    const allCategoriesHeight = screenHeight * 0.06;
    const bottomPartHeight = screenHeight * 0.1;

    const logoSize = topPartHeight * 0.5;

    const [allCategories, setAllCategories] = useState([]);
    const [popularCategories, setPopularCategories] = useState([]);

    useEffect(() => {
        async function fetchAllCategories() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/allCategories`);
                setAllCategories(response.data.categories);
            } catch (error) {
                alert("Error fetching categories. Please try again later.");
            }
        }
        async function fetchPopularCategories() {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/products/recommendedCategories`);
                console.log(response.data);
                setPopularCategories(response.data.categories);
            } catch (error) {
                alert("Error fetching popular categories. Please try again later.");
            }
        }
        fetchAllCategories();
        fetchPopularCategories();
    }, []);

    return (
        <VStack className="baloo">

            <Box
                w={`${screenWidth}px`}
                h={`${topPartHeight}px`}
                position={'fixed'}
                zIndex={100}
            >
                <HStack>
                    <VStack
                        mt={`${topPartHeight * 0.1}px`}
                        ml={`${screenWidth * 0.05}px`}
                    >
                        <Image
                            src="reman-logo.svg"
                            boxSize={`${logoSize}px`}
                        />
                        <Text
                            mt={`${-topPartHeight * 0.1}px`}
                            fontSize={`${logoSize * 0.33}px`}
                        >
                            ReMan
                        </Text>
                        <Text
                            mt={`${-topPartHeight * 0.15}px`}
                            fontSize={`${logoSize * 0.25}px`}
                        >
                            Connecting Shops
                        </Text>
                    </VStack>
                    <Spacer />
                    <IconButton
                        mr={`${screenWidth * 0.03}px`}
                        mt={`${topPartHeight * 0.1}px`}
                        isRound={true}
                        boxSize={`${topPartHeight * 0.6}px`}
                        icon={<Image src="shopping-cart.svg" boxSize={`${topPartHeight * 0.4}px`} />}
                    />
                    <IconButton
                        mr={`${screenWidth * 0.05}px`}
                        mt={`${topPartHeight * 0.1}px`}
                        isRound={true}
                        boxSize={`${topPartHeight * 0.6}px`}
                        icon={<Image src="profile.svg" boxSize={`${topPartHeight * 0.4}px`} />}
                    />
                </HStack>
            </Box>

            <Box
                w={`${screenWidth}px`}
                h={`${searchPartHeight}px`}
                position={'fixed'}
                zIndex={100}
                top={`${topPartHeight}px`}
            >
                <HStack
                >
                    <Spacer />
                    <InputGroup
                        w={`${screenWidth * 0.7}px`}
                        size={'lg'}
                    >
                        <InputLeftElement>
                            <Image src="search.svg" />
                        </InputLeftElement>
                        <Input
                            fontSize={'md'}
                            placeholder="Search products by category"
                            focusBorderColor="transparent"
                            borderRadius={'full'}
                            bg={'#d9d9d9'}
                        >
                        </Input>
                    </InputGroup>
                    <Spacer />
                    <IconButton
                        mt={`${searchPartHeight * 0.15}px`}
                        mb={`${searchPartHeight * 0.15}px`}
                        isRound={true}
                        boxSize={`${searchPartHeight * 0.7}px`}
                        bg={'#dfdfdf'}
                        icon={<Image src="filter.svg" boxSize={`${searchPartHeight * 0.5}px`} />}
                    />
                    <Spacer />
                </HStack>
            </Box>

            <Box
                w={`${screenWidth}px`}
                h={`${popularPartHeight}px`}
                position={'fixed'}
                top={`${topPartHeight + searchPartHeight}px`}
            >
                <VStack>
                    <HStack
                        mt={`${popularPartHeight * 0.05}px`}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Spacer />
                        <Image
                            src='fire.svg'
                            boxSize={`${popularPartHeight * 0.18}px`}
                        />
                        <Text
                            fontSize={`${popularPartHeight * 0.18}px`}
                        >
                            Popular Categories
                        </Text>
                        <Spacer />
                    </HStack>
                    <SimpleGrid
                        columns={4}
                        w={'95%'}
                        spacingX={`${screenWidth * 0.95 / 63}px`}
                        spacingY={`${popularPartHeight * 0.12}px`}
                    >
                        {
                            popularCategories.map((category, index) => {
                                return (
                                    <PopularCategoryItems
                                        key={index}
                                        screenWidth={screenWidth}
                                        category={category.CategoryName}
                                    />
                                );
                            }
                            )
                        }
                    </SimpleGrid>
                </VStack>
            </Box>

            <Box
                w={`${screenWidth}px`}
                h={`${allCategoriesHeight}px`}
                position={'fixed'}
                zIndex={100}
                top={`${topPartHeight + searchPartHeight + popularPartHeight}px`}
            >
                <HStack
                    mt={`${allCategoriesHeight * 0.2}px`}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Spacer />
                    <Image
                        src='category-all.svg'
                        boxSize={`${allCategoriesHeight * 0.6}px`}
                    />
                    <Text
                        fontSize={`${allCategoriesHeight * 0.6}px`}
                    >
                        All Categories
                    </Text>
                    <Spacer />
                </HStack>
            </Box>

            <Box
                w={'85%'}
                top={`${topPartHeight + searchPartHeight + popularPartHeight + allCategoriesHeight}px`}
                bottom={`${bottomPartHeight}px`}
                mt={`${screenHeight * 0.02}px`}
                position={'fixed'}
                overflow={'auto'}
            >
                <VStack>

                    {
                        allCategories.map((category, index) => (
                            <AllCategoryItems
                                category={category.CategoryName}
                                key={index}
                            />
                        ))                        
                    }
                </VStack>
            </Box>

            <Box
                w={`${screenWidth}px`}
                h={`${bottomPartHeight}px`}
                position={'fixed'}
                zIndex={100}
                bottom={0}
                border={'1px solid black'}
            >
                <HStack>
                    <Spacer />
                    <VStack
                        mt={`${bottomPartHeight * 0.1}px`}
                        align={'center'}
                        onClick={() => window.location.href = "/home"}
                    >
                        <Image
                            src="home.svg"
                            boxSize={`${bottomPartHeight * 0.5}px`}
                        />
                        <Text
                            mt={`${-bottomPartHeight * 0.1}px`}
                        >
                            Home
                        </Text>
                    </VStack>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <VStack
                        mt={`${bottomPartHeight * 0.1}px`}
                        align={'center'}
                    >
                        <Image
                            src="order-history.svg"
                            boxSize={`${bottomPartHeight * 0.5}px`}
                        />
                        <Text
                            mt={`${-bottomPartHeight * 0.1}px`}
                        >
                            Order History
                        </Text>
                    </VStack>
                    <Spacer />
                </HStack>
            </Box>

        </VStack>

    );
}
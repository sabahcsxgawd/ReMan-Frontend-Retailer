import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import {
    Box,
    HStack,
    VStack,
    Spacer,
    IconButton,
    Image,
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    filter

} from '@chakra-ui/react';

import HomeCategoryItem from "./home-category-item";

export default function HomePage() {

    const navigate = useNavigate();
    const locationData = useLocation().state;


    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const topFixedHeight = screenHeight * 0.12;
    const bottomFixedHeight = screenHeight * 0.1;

    const logoSize = topFixedHeight * 0.5;
    const searchBoxHeight = screenHeight * 0.1;

    const categoryMarginTop = screenHeight * 0.05;
    const categoryMarginBottom = screenHeight * 0.01;

    const [searchText, setSearchText] = useState('');

    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/allCategories`);
                setCategories(response.data.categories);
            } catch (error) {
                alert("Error fetching categories. Please try again later.");
            }
        }
        // fetchCategories();
    }, []);

    useEffect(
        () => {
            if (searchText === '') {
                setFilteredCategories(categories);
            }
            else {
                setFilteredCategories(
                    categories.filter(
                        (category) => category.CategoryName.toLowerCase().includes(searchText.toLowerCase())
                    )
                );
            }
        }, [searchText, categories]
    );


    return (
        <>
            <Box
                w={`${screenWidth}px`}
                h={`${topFixedHeight}px`}
                bg={'#ffffff'}
                position={'fixed'}
                zIndex={100}
            >
                <HStack>
                    <VStack
                        className="baloo"
                        mt={`${topFixedHeight * 0.15}px`}
                        ml={`${screenWidth * 0.05}px`}
                    >
                        <Image
                            src="reman-logo.svg"
                            boxSize={`${logoSize}px`}
                        />
                        <Text
                            mt={`${-topFixedHeight * 0.1}px`}
                            fontSize={`${logoSize * 0.35}px`}
                        >
                            ReMan
                        </Text>
                        <Text
                            mt={`${-topFixedHeight * 0.15}px`}
                            fontSize={`${logoSize * 0.25}px`}
                        >
                            Connecting Shops
                        </Text>
                    </VStack>
                    <Spacer />
                    <IconButton
                        mr={`${screenWidth * 0.03}px`}
                        mt={`${topFixedHeight * 0.1}px`}
                        isRound={true}
                        boxSize={`${topFixedHeight * 0.6}px`}
                        icon={<Image src="shopping-cart.svg" boxSize={`${topFixedHeight * 0.4}px`} />}
                        onClick={
                            () => {
                                navigate('/cart', { state: locationData })
                            }
                        }
                    />
                    <IconButton
                        mr={`${screenWidth * 0.05}px`}
                        mt={`${topFixedHeight * 0.1}px`}
                        isRound={true}
                        boxSize={`${topFixedHeight * 0.6}px`}
                        icon={<Image src="profile.svg" boxSize={`${topFixedHeight * 0.4}px`} />}
                    />
                </HStack>
            </Box>

            <Box
                className="baloo"
                w={`${screenWidth}px`}
                h={`${searchBoxHeight}px`}
                top={`${topFixedHeight}px`}
                position={'fixed'}
                zIndex={100}
            >
                <HStack
                    mt={`${searchBoxHeight * 0.15}px`}
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
                            placeholder="Search for categories"
                            focusBorderColor="transparent"
                            borderRadius={'full'}
                            bg={'#d9d9d9'}
                            onChange={
                                (e) => {
                                    setSearchText(e.target.value);
                                }
                            }
                        >
                        </Input>
                    </InputGroup>
                    <Spacer />
                    <IconButton
                        mt={`${searchBoxHeight * 0.15}px`}
                        mb={`${searchBoxHeight * 0.15}px`}
                        isRound={true}
                        boxSize={`${searchBoxHeight * 0.7}px`}
                        bg={'#dfdfdf'}
                        icon={<Image src="filter.svg" boxSize={`${searchBoxHeight * 0.5}px`} />}
                    />
                    <Spacer />
                </HStack>
            </Box>

            <Box
                className="baloo"
                top={`${topFixedHeight + searchBoxHeight + categoryMarginTop}px`}
                bottom={`${bottomFixedHeight + categoryMarginBottom}px`}
                w={`${screenWidth * 0.88}px`}
                ml={`${screenWidth * 0.06}px`}
                pos={'fixed'}
                overflow={'auto'}
            >
                <VStack>                    

                    {
                        filteredCategories.map((category, index) => (
                            <HomeCategoryItem
                                screenHeight={screenHeight}
                                screenWidth={screenWidth}
                                categoryName={category.CategoryName}
                                categoryImagePath={category.Image}
                                key={index}
                            />
                        ))
                    }

                </VStack>

            </Box>

            <Box
                bg={'#ffffff'}
                w={`${screenWidth}px`}
                h={`${bottomFixedHeight}px`}
                bottom={'0px'}
                position={'fixed'}
                border={'1px solid black'}
                zIndex={100}
            >
                <HStack>
                    <Spacer />
                    <VStack
                        className="baloo"
                        mt={`${bottomFixedHeight * 0.1}px`}
                        align={'center'}
                        onClick={
                            () => {
                                navigate('/home', { state: locationData });
                            }
                        }
                    >
                        <Image
                            src="home.svg"
                            boxSize={`${bottomFixedHeight * 0.5}px`}
                        />
                        <Text
                            mt={`${-bottomFixedHeight * 0.1}px`}
                        >
                            Home
                        </Text>
                    </VStack>
                    <Spacer />
                    <VStack
                        className="baloo"
                        mt={`${bottomFixedHeight * 0.1}px`}
                        align={'center'}
                    >
                        <Image
                            src="order-history.svg"
                            boxSize={`${bottomFixedHeight * 0.5}px`}
                        />
                        <Text
                            mt={`${-bottomFixedHeight * 0.1}px`}
                        >
                            Order History
                        </Text>
                    </VStack>
                    <Spacer />
                    <VStack
                        className="baloo"
                        mt={`${bottomFixedHeight * 0.1}px`}
                        align={'center'}
                        onClick={
                            () => {
                                navigate('/categories', { state: locationData });
                            }
                        }
                    >
                        <Image
                            src="category.svg"
                            boxSize={`${bottomFixedHeight * 0.5}px`}
                        />
                        <Text
                            mt={`${-bottomFixedHeight * 0.1}px`}
                        >
                            Categories
                        </Text>
                    </VStack>
                    <Spacer />
                </HStack>
            </Box>
        </>
    );
}

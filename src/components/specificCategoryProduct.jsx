import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    Input

} from '@chakra-ui/react';

import IndividualProductCategory from "./individualProductCategory";

export default function SpecificCategoryProduct() {


    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const topPartHeight = screenHeight * 0.12;
    const searchPartHeight = screenHeight * 0.1;

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');

    const { category } = useParams();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const postData = {
                    CategoryName: category
                }
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/products/productByCategory`, postData);
                setProducts(response.data.products);
                setFilteredProducts(response.data.products);
            } catch (error) {
                alert("Error fetching products. Please try again later.");
            }
        }
        fetchProducts();
    }, [category]);

    useEffect(() => {
        if (searchText === '') {
            setFilteredProducts(products);
        }
        else {
            const filtered = products.filter((product) => {
                return product.ManufacturerName.toLowerCase().includes(searchText.toLowerCase()) || product.ProductName.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredProducts(filtered);
        }

    }, [searchText, products]);

    return (
        <VStack className="baloo">
            <Box
                bg={'#190F37'}
                opacity={0.85}
                w={`${screenWidth}px`}
                h={`${topPartHeight}px`}
                position={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <HStack>
                    <Image
                        src="/home.svg"
                        bg={'#ffffff'}
                        boxSize={`${topPartHeight * 0.6}px`}
                        borderRadius={'xl'}
                        pos={'absolute'}
                        left={0}
                        ml={'5%'}
                        onClick={() => window.location.href = '/home'}
                    />
                    <Text
                        color={'#ffffff'}
                        fontSize={'2xl'}
                    >
                        {category}
                    </Text>
                    <Image
                        src="/shopping-cart.svg"
                        bg={'#ffffff'}
                        boxSize={`${topPartHeight * 0.6}px`}
                        borderRadius={'xl'}
                        pos={'absolute'}
                        right={0}
                        mr={'5%'}
                    />
                </HStack>
            </Box>

            <Box
                w={`${screenWidth}px`}
                h={`${searchPartHeight}px`}
                position={'fixed'}
                top={`${topPartHeight}px`}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <HStack
                >
                    <Spacer />
                    <InputGroup
                        w={`${screenWidth * 0.75}px`}
                        size={'lg'}
                    >
                        <InputLeftElement>
                            <Image src="/search.svg" />
                        </InputLeftElement>
                        <Input
                            fontSize={'md'}
                            placeholder="Search Products/Manufacturers"
                            focusBorderColor="transparent"
                            borderRadius={'full'}
                            bg={'#d9d9d9'}
                            onChange={(e) => setSearchText(e.target.value)}
                        >
                        </Input>
                    </InputGroup>
                    <Spacer />
                    <IconButton
                        isRound={true}
                        boxSize={`${searchPartHeight * 0.7}px`}
                        bg={'#dfdfdf'}
                        icon={<Image src="/filter.svg" boxSize={`${searchPartHeight * 0.5}px`} />}
                    />
                    <Spacer />
                </HStack>
            </Box>

            <Box
                w={'90%'}
                top={`${topPartHeight + searchPartHeight + 15}px`}
                bottom={10}
                position={'fixed'}
                overflow={'auto'}
            >
                {
                    filteredProducts.map((product, index) => {
                        return (
                            <IndividualProductCategory
                                index={index}
                                key={product.pid}
                                pid={product.pid}
                                manufacturerName={product.ManufacturerName}
                                productName={product.ProductName}
                                weightVolume={product.Weight_volume}
                                unit={product.Unit}
                                unitPrice={product.UnitPrice}
                                category={category}
                            />
                        )

                    })
                }
            </Box >
        </VStack >
    );
}
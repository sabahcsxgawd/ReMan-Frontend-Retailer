import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

import {
    Box,
    Spacer,
    Image,
    IconButton,
    ButtonGroup,
    VStack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Spinner

} from '@chakra-ui/react'

export default function TestPage() {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    const screenHeight = window.screen.height;
    const screenWidth = window.screen.width;

    const topPartHeightPercentage = 0.12;
    const searchAndFilterPartHeightPercentage = 0.1;
    const productsAndCategoriesHeightPercentage = 0.67;
    const bottomPartHeightPercentage = 0.11;

    const categoryImageSize = screenHeight * productsAndCategoriesHeightPercentage * 0.18;
    const productImageSize = screenHeight * productsAndCategoriesHeightPercentage * 0.9 * 0.2;

    const [isloading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/allCategories`);
            setCategories(response.data.categories);
            setFilteredCategories(response.data.categories);
            setIsLoading(false);
        } catch (error) {
            alert("Error fetching categories. Please try again later.");
        }
    }

    const fetchProducts = async (category) => {
        try {
            const postData = {
                CategoryName: category
            }
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/products/productByCategory`, postData);
            return response.data.products;
        } catch (error) {
            alert("Error fetching products. Please try again later.");
        }
    }



    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        categories.map(async (category) => {
            let newProducts = await fetchProducts(category.CategoryName);
            newProducts.forEach((newProduct) => {
                newProduct.category = category.CategoryName.toLowerCase();
            });
            setProducts([...products, ...newProducts]);
        }
        );
        setFilteredProducts(products);
        setIsLoading(false);
    }, [categories]);

    useEffect(
        () => {
            if (searchText === '') {
                setFilteredCategories(categories);
                setFilteredProducts(products);
            }
            else {
                setFilteredCategories(
                    categories.filter(
                        (category) => category.CategoryName.toLowerCase().includes(searchText.toLowerCase())
                    )
                );
                setFilteredProducts(
                    products.filter(
                        (product) =>
                            product.ManufacturerName.toLowerCase().includes(searchText.toLowerCase()) ||
                            product.ProductName.toLowerCase().includes(searchText.toLowerCase())
                    )
                );
            }
        }, [searchText]
    );

    if (isloading) {
        return (
            <Box
                w={"100%"}
                h={"100%"}
                pos={"fixed"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir={"column"}
            >
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
                <Text
                    className="baloo"
                    fontSize={"2xl"}
                >
                    Loading...
                </Text>
            </Box>
        );
    }

    return (
        <>
            {/* top part */}
            <Box
                className='baloo'
                w={'100%'}
                h={`${topPartHeightPercentage * 100}%`}
                top={0}
                pos={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box>
                    <VStack ml={'3'}>

                        <Image
                            mt={'1'}
                            src='reman-logo.svg'
                            boxSize={`${screenHeight * topPartHeightPercentage * 0.5}px`}
                        />

                        <Text
                            noOfLines={1}
                            fontWeight={'bold'}
                            fontSize={'sm'}
                            mt={'-3'}
                        >
                            ReMan
                        </Text>

                        <Text
                            noOfLines={1}
                            fontWeight={'bold'}
                            fontSize={'xs'}
                            mt={'-3'}
                        >
                            Connecting Shops
                        </Text>

                    </VStack>
                </Box>

                <Spacer />

                <Box>
                    <ButtonGroup gap={'3'} mr={'5'}>
                        <IconButton
                            icon={<Image
                                src='shopping-cart.svg'
                                alt='cart'
                                boxSize={`${screenHeight * topPartHeightPercentage * 0.4}px`}
                            />}
                            isRound={true}
                            boxSize={`${screenHeight * topPartHeightPercentage * 0.6}px`}
                            bg={'#d9d9d9'}
                        />

                        <IconButton
                            icon={<Image
                                src='profile.svg'
                                alt='profile'
                                boxSize={`${screenHeight * topPartHeightPercentage * 0.4}px`}
                            />}
                            isRound={true}
                            boxSize={`${screenHeight * topPartHeightPercentage * 0.6}px`}
                            bg={'#d9d9d9'}
                        />

                    </ButtonGroup>
                </Box>
            </Box>

            {/* search and filter part */}
            <Box
                className='baloo'
                w={'100%'}
                h={`${searchAndFilterPartHeightPercentage * 100}%`}
                top={`${topPartHeightPercentage * 100}%`}
                pos={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <InputGroup ml={'5'}>
                    <InputLeftElement
                        boxSize={`${screenHeight * searchAndFilterPartHeightPercentage * 0.6}px`}
                        children={
                            <Image
                                mt={'3'}
                                ml={'2'}
                                src='search.svg'
                                alt='search'
                            />
                        }
                    />
                    <Input
                        ml={'1'}
                        w={'95%'}
                        h={`${screenHeight * searchAndFilterPartHeightPercentage * 0.75}px`}
                        type='text'
                        placeholder='Search Products / Categories'
                        fontSize={'md'}
                        borderRadius={'full'}
                        bg={'#d9d9d9'}
                        focusBorderColor="transparent"
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                </InputGroup>

                <IconButton
                    mr={'5'}
                    bg={'#d9d9d9'}
                    size={'lg'}
                    isRound={true}
                    icon={
                        <Image
                            src='filter.svg'
                            alt='filter'
                            boxSize={`${screenHeight * searchAndFilterPartHeightPercentage * 0.55}px`}
                        />
                    }
                />

            </Box>

            {/* products and categories */}
            <Box
                className='baloo'
                w={'100%'}
                h={`${productsAndCategoriesHeightPercentage * 100}%`}
                top={`${(topPartHeightPercentage + searchAndFilterPartHeightPercentage) * 100}%`}
                pos={'fixed'}
                overflow={'scroll'}
            >

                {
                    filteredCategories.map((category) => (
                        <TestHomeCategoryItem
                            key={category.CategoryName}
                            categoryName={category.CategoryName}
                            categoryImagePath={category.Image}
                            categoryImageSize={categoryImageSize}
                        />
                    ))
                }

                {
                    filteredProducts.map((product) => (
                        <TestHomeProductItem
                            key={product.pid}
                            pid={product.pid}
                            manufacturerName={product.ManufacturerName}
                            productName={product.ProductName}
                            weightVolume={product.Weight_volume}
                            unit={product.Unit}
                            unitPrice={product.UnitPrice}
                            category={product.category}
                            productImageSize={productImageSize}
                        />
                    ))
                }


            </Box>

            {/* bottom part */}
            <Box
                className='baloo'
                w={'100%'}
                h={`${bottomPartHeightPercentage * 100}%`}
                bottom={0}
                pos={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderTopColor={'black'}
                borderTopWidth={'2px'}
            >
                <Spacer />

                <Box>
                    <VStack>
                        <Image
                            mb={'-1'}
                            src='/home.svg'
                            alt='home'
                            boxSize={`${screenHeight * bottomPartHeightPercentage * 0.55}px`}
                        />
                        <Text
                            mt={'-2'}
                            noOfLines={1}
                        >
                            Home
                        </Text>
                    </VStack>
                </Box>

                <Spacer />

                <Box>
                    <VStack>
                        <Image
                            mb={'-1'}
                            src='/order-history.svg'
                            alt='Order History'
                            boxSize={`${screenHeight * bottomPartHeightPercentage * 0.55}px`}
                        />
                        <Text
                            mt={'-2'}
                            noOfLines={1}
                        >
                            Order History
                        </Text>
                    </VStack>
                </Box>

                <Spacer />

                <Box>
                    <VStack>
                        <Image
                            mb={'-1'}
                            src='/category.svg'
                            alt='Categories'
                            boxSize={`${screenHeight * bottomPartHeightPercentage * 0.55}px`}
                        />
                        <Text
                            mt={'-2'}
                            noOfLines={1}
                        >
                            Categories
                        </Text>
                    </VStack>
                </Box>

                <Spacer />

            </Box>

        </>
    )
}

function getRandomColor() {
    const letters = "789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function TestHomeCategoryItem({ categoryName, categoryImagePath, categoryImageSize }) {
    return (
        <Box
            w={'100%'}
            h={'25%'}
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
                    src={`${categoryImagePath}`}
                    alt={`${categoryName}`}
                    boxSize={`${categoryImageSize}px`}
                />
                <Spacer />

            </Box>

            <Box
                h={'8%'}
            />
        </Box>
    );
}

function TestHomeProductItem({ pid, manufacturerName, productName, weightVolume, unit, unitPrice, category, productImageSize }) {
    return (
        <Box
            w={'100%'}
            h={'50%'}
        >
            <Box
                h={'5%'}
            />

            <Box
                w={'90%'}
                ml={'5%'}
                h={'90%'}
                borderRadius={'xl'}
                display={'flex'}
                borderWidth={2}
                borderColor={'black'}
            >
                <Box
                    ml={'3%'}
                    w={'45%'}
                    display={'flex'}
                    alignItems={'center'}
                >

                    <VStack align={'left'}>

                        <Text
                            noOfLines={1}
                            color={'green'}
                        >
                            {manufacturerName}
                        </Text>

                        <Text
                            noOfLines={3}
                            color={'blue'}
                        >
                            {productName}
                        </Text>

                        <Text
                            noOfLines={1}
                            color={'green'}
                        >
                            {weightVolume}{unit}
                        </Text>

                    </VStack>
                </Box>

                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <VStack>
                        <Spacer />
                        <Image
                            src={`/category-images/${category}.svg`}
                            boxSize={`${productImageSize}px`}
                        />

                        <Spacer />

                        <Text
                            noOfLines={2}
                            color={'blue'}
                            textAlign={'center'}
                            fontSize={'sm'}
                        >
                            Tk. {unitPrice} per unit
                        </Text>

                    </VStack>
                </Box>

                <Spacer />

                <Box
                    mr={'3%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <VStack>

                        <Spacer />
                        <Image
                            src='/add-to-cart.svg'
                            boxSize={`${productImageSize * 0.6}px`}
                        />

                        <Spacer />

                        <Text
                            noOfLines={2}
                            color={'maroon'}
                            textAlign={'center'}
                            fontSize={'sm'}
                        >
                            MRP : Tk. {unitPrice * 1.2}
                        </Text>

                    </VStack>
                </Box>

            </Box>

        </Box >
    );
}
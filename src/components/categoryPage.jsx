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

import { ChevronRightIcon } from '@chakra-ui/icons';

import PopularCategoryItems from './popularCategoryItems';
import { getRandomColor } from './home-category-item';

export function CategoryPage() {
    // we need topPart, searchPart, PopularCategories, AllCategories, A scrollable list of products
    // and bottomPart
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const topPartHeight = screenHeight * 0.1;
    const searchPartHeight = screenHeight * 0.08;
    const popularPartHeight = screenHeight * 0.16;
    const allCategoriesHeight = screenHeight * 0.06;
    const bottomPartHeight = screenHeight * 0.1;

    const logoSize = topPartHeight * 0.5;

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
                            placeholder="Search for products"
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
                        mr={`${screenWidth * 0.07}px`}
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
                        <PopularCategoryItems screenWidth={screenWidth} category="Toothpaste" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Chips" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Soap" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Chips" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Chips" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Chips" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Egg" />
                        <PopularCategoryItems screenWidth={screenWidth} category="Chips" />
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
                    mt={`${allCategoriesHeight * 0.15}px`}
                    mr={`${screenWidth * 0.07}px`}
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
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                    <Button
                        w={'100%'}
                        h={'90px'}
                        borderRadius={'full'}
                        rightIcon={<ChevronRightIcon boxSize={12}/>}
                        bg={getRandomColor()}            
                    >
                        <Text
                            fontSize={'40px'}
                            ml={'20px'}
                        >
                            Chips
                        </Text>
                    </Button>
                </VStack>
            </Box>

            <Box
                w={`${screenWidth}px`}
                h={`${bottomPartHeight}px`}
                position={'fixed'}
                zIndex={100}
                bottom={0}
            >
                <HStack>
                    <Spacer />
                    <VStack
                        mt={`${bottomPartHeight * 0.1}px`}
                        align={'center'}
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
import { useState } from "react";
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

    OrderedList,
    ListItem

} from '@chakra-ui/react';



export default function HomePage() {

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    const topFixedHeight = screenHeight * 0.12;
    const bottomFixedHeight = screenHeight * 0.1;

    const logoSize = topFixedHeight * 0.5;
    const searchBoxHeight = screenHeight * 0.1;


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
            // bg={'#d9d9d9'}
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
                            placeholder="Search for products"
                            focusBorderColor="transparent"
                            borderRadius={'full'}
                            bg={'#d9d9d9'}
                        >
                        </Input>
                    </InputGroup>
                    <Spacer />
                    <IconButton
                        mt={`${searchBoxHeight * 0.15}px`}
                        mb={`${searchBoxHeight * 0.15}px`}
                        isRound={true}
                        boxSize={`${searchBoxHeight * 0.7}px`}
                        icon={<Image src="filter.svg" boxSize={`${searchBoxHeight * 0.6}px`} />}
                    />
                    <Spacer />
                </HStack>
            </Box>

            <Box
                className="baloo"
                top={`${topFixedHeight + searchBoxHeight}px`}
                bottom={`${bottomFixedHeight}px`}
                w={`${screenWidth}px`}
                pos={'fixed'}
                overflow={'auto'}
            >
                <OrderedList
                    mt={`${screenHeight * 0.03}px`}
                    mb={`${screenHeight * 0.05}px`}
                    ml={`${screenWidth * 0.22}px`}
                    spacing={3}
                    fontSize={`${screenWidth * 0.04}px`}
                >
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </OrderedList>
            </Box>

            <Box
                bg={'#ffffff'}
                w={`${screenWidth}px`}
                h={`${bottomFixedHeight}px`}
                bottom={'0px'}
                position={'fixed'}
                zIndex={100}
            >
                <HStack>
                    <Spacer />
                    <VStack
                        className="baloo"
                        mt={`${bottomFixedHeight * 0.1}px`}
                        align={'center'}
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
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Image,
    Text,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function UserProfileDrawer({ isOpen, onClose }) {
    const navigate = useNavigate();
    const locationData = useLocation().state;

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent
                borderRadius={'3xl'}
                className='baloo'
                opacity={0.9}
                bg={'#0C2E62'}
            >
                <DrawerCloseButton />
                <DrawerHeader />

                <DrawerBody>
                    <VStack spacing={5} align="center">
                        <Image
                            src="/my-profile.svg"
                            boxSize="100px"
                            borderRadius="full"
                        />

                        <Text
                            noOfLines={1}
                            fontSize="2xl"
                            fontWeight="bold"
                            color={'black'}
                        >
                            Abul Hossain
                        </Text>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                        >
                            My Profile
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                            onClick={
                                () => {
                                    onClose();
                                    navigate('/categories', { state: locationData });
                                }
                            }
                        >
                            Categories
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                            onClick={
                                () => {
                                    onClose();
                                    navigate('/orderHistory', { state: locationData });
                                }
                            }
                        >
                            Order History
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                            onClick={
                                () => {
                                    onClose();
                                    navigate('/notifications', { state: locationData });
                                }
                            }
                        >
                            Notifications
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                        >
                            Analysis
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                        >
                            Log Out
                        </Button>

                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
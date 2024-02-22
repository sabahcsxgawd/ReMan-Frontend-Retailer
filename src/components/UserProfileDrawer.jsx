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

export default function UserProfileDrawer({ isOpen, onClose }) {
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
                <DrawerHeader/>

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
                        >
                            Categories
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
                        >
                            Order History
                        </Button>

                        <Button
                            w={'80%'}
                            borderRadius={'full'}
                            borderColor={'black'}
                            borderWidth={'2px'}
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
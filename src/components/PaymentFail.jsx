import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import {
    Box,
    Image,
    Text,
    VStack,

} from "@chakra-ui/react";

import UserProfileDrawer from "./UserProfileDrawer";

export default function PaymentFail() {

    const navigate = useNavigate();

    const sid = localStorage.getItem('sid');
    const shopName = localStorage.getItem('shopName');

    // useLocation().state = {
    //     sid:sid,
    //     shopName:shopName
    // };

    localStorage.clear();    

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);

    return (
        <>
            {/* Drawer */}
            {/* <UserProfileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> */}

            <Box
                className="baloo"
                w={'100%'}
                h={'12%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                bg={'#190F37'}
            >

                <Box
                    w={'2%'}
                    h={'100%'}
                />

                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    onClick={
                        () => {
                            navigate('/home', {
                                state: {
                                    sid: sid,
                                    shopName: shopName
                                }
                            });
                        }
                    }
                >
                    <Image
                        mb={4}
                        src={'/white-home.svg'}
                        boxSize={'80%'}
                    />
                </Box>

                <Box
                    w={'55%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        color={'#F9F871'}
                    >
                        Payment
                    </Text>
                </Box>

                <Box
                    w={'15%'}
                    h={'70%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'full'}
                    bg={'#FFFFFF'}
                >
                    <Image
                        src={'/profile.svg'}
                        boxSize={'60%'}
                        onClick={handleOpenDrawer}
                    />
                </Box>

                <Box
                    w={'8%'}
                    h={'100%'}
                />

            </Box>

            <Box
                className="baloo"
                w={'80%'}
                h={'50%'}
                top={'25%'}
                left={'10%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                bg={'red'}
                borderRadius={'40px'}
            >

                <VStack>
                    <Image
                        src="/exclamation.svg"
                        boxSize={'25%'}
                    />

                    <Text
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        color={'#F9F871'}
                    >
                        Oopss
                    </Text>
                    <Text
                        fontSize={'1.5rem'}
                        color={'#F9F871'}
                    >
                        Payment Failed
                    </Text>

                </VStack>

            </Box>

            <Box
                className="baloo"
                w={'90%'}
                h={'15%'}
                top={'80%'}
                left={'5%'}
                bg={'#1B2A78'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                borderRadius={'60px'}
            >
                <Text
                    color={'white'}
                    fontSize={'2xl'}
                    noOfLines={1}
                    onClick={
                        () => {
                            navigate('/home', {
                                state: {
                                    sid: sid,
                                    shopName: shopName
                                }
                            });
                        }
                    }
                >
                    Go Back to Home
                </Text>
            </Box>
        </>
    )
}
import { useNavigate, useLocation } from "react-router-dom"
import {
    Box,
    Image,
    Text,
    VStack,

} from "@chakra-ui/react"

export default function PaymentSuccess() {

    const navigate = useNavigate();
    // let locationData = useLocation().state;
    // locationData.sid = localStorage.getItem('sid');
    // console.log(locationData);
    // localStorage.clear();
    const sid = localStorage.getItem('sid');
    localStorage.clear();

    return (
        <>
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
                                    sid: sid
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
                bg={'#13529B'}
                borderRadius={'40px'}
            >

                <VStack>
                    <Image
                        src="/tick.svg"
                        boxSize={'25%'}
                    />

                    <Text
                        color={'white'}
                        fontSize={'2.5rem'}
                    >
                        Thank You
                    </Text>

                    <Text
                        color={'white'}
                        fontSize={'1.2rem'}
                    >
                        Your payment has been
                    </Text>

                    <Text
                        color={'white'}
                        fontSize={'1.2rem'}
                    >
                        successfully processed
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
                                    sid: sid
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
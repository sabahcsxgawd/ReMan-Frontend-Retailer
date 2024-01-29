import { useState, useEffect } from 'react';

import {
    Box,
    Button,
    Input,
    Text,
    VStack,
    Checkbox
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

import Logo from './logo';


export default function LoginPhoneOTP() {

    const otpRegex = /^\d{0,6}$/;
    const [otp, setOTP] = useState('');
    const OTP_RESEND_TIME = 20;
    const [counter, setCounter] = useState(OTP_RESEND_TIME);

    useEffect(() => {
        let timer;

        // Function to decrement the counter and set up the timer
        const decrementCounter = () => {
            setCounter((prevCounter) => prevCounter - 1);
        };

        // Set up a timer to decrement the counter every second
        if (counter > 0) {
            timer = setInterval(decrementCounter, 1000);
        }

        // Clear the timer when the component unmounts or when the counter reaches 0
        return () => {
            clearInterval(timer);
        };
    }, [counter]);

    return (
        <VStack className='baloo' spacing="0.1rem" align='center'>

            <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />

            <Text
                pt={{ base: '1.5%', }}
                fontSize={{ base: 'xl', }}
                fontWeight={{ base: 'bold', }}
            >
                A 6-digit OTP has been sent to your mobile number
            </Text>


            <Box
                borderRadius={{ base: 'xl', }}
                bg={{ base: 'black', }}
                mt={{ base: '1%', }}
                height={{ base: '5.2rem', }}
                width={{ base: '40%' }}>
                <Text
                    mt={{ base: '2%', }}
                    pl={{ base: '3%', }}
                    color={{ base: 'white', }}
                    fontSize={{ base: '1.2rem', }}
                    fontWeight={{ base: 'bold', }}>
                    OTP
                </Text>
                <Input
                    fontSize={{ base: '1.4rem', }}
                    color={{ base: 'green', }}
                    fontWeight={{ base: 'bold', }}
                    pl={{ base: '3%', }}
                    variant={{ base: 'unstyled', }}
                    required={true}
                    value={otp}
                    onChange={(e) => {
                        const inputOTP = e.target.value;
                        if (otpRegex.test(inputOTP)) {
                            setOTP(inputOTP);
                        }
                    }
                    }
                >
                </Input>
            </Box>

            <Button

                bg={'#B2A425'}
                _hover={'#B2A425'}
                borderRadius={{ base: 'full', }}
                mt={{ base: '1.5%', }}
                size={{ base: 'lg', }}
                isDisabled={counter > 0 ? true : false}
                onClick={() => {
                    setCounter(OTP_RESEND_TIME);
                }
                }
            >
                <Text
                    color={{ base: 'black', }}
                >
                    {
                        counter > 0 ? `Resend OTP in ${counter}s` : 'Resend OTP'
                    }
                </Text>
            </Button>

            <Button
                bg={{ base: '#C8B7F7', }}
                _hover={{ bg: '#957AE3' }}
                borderRadius={{ base: 'full', }}
                mt={{ base: '1.5%', }}
                size={{ base: 'lg', }}
                rightIcon={<ChevronRightIcon boxSize={6} />}
            >
                <Text
                    color={{ base: 'black', }}
                    pl={{ base: '15%' }}>
                    Continue
                </Text>
            </Button>

        </VStack>
    );
}

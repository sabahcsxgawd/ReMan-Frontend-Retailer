import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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


export default function LoginPhoneNum() {

    const mobileRegex = /^\+880\d{0,10}$/;
    const [mobileNum, setMobileNum] = useState('+880');

    const pinRegex = /^\d{0,5}$/;
    const [pin, setPIN] = useState('');

    const navigate = useNavigate();

    const continueButtonDisabled = () => {
        return mobileNum.length !== 14 || pin.length !== 5;
    }

    const loginRetailer = async () => {
        const postData = {
            phoneNumber: mobileNum,
            password: pin
        };

        console.log(postData);

        try {
            const response = await axios.post('https://reman.us.to/api/authentication/retailer', postData);
            console.log('Response from server:', response.data);
            navigate('/regok');
        } catch (error) {
            // Handle the error response
            console.error('Failed to post data:', error.message);
        }
    }

    return (
        <>
            <Button
                ml={{ base: '73%', }}
                mt={{ base: '10%', }}
                position={{ base: 'absolute', }}
                className='baloo'
                bg={{ base: '#000000', }}
                borderRadius={{ base: 'full', }}
                size={{ base: 'md', }}
                onClick={() => {
                    navigate('/reg');
                }}
            >
                <Text
                    color={{ base: 'white' }}
                >
                    Register
                </Text>
            </Button>

            <VStack className='baloo' spacing="0.1rem" align='center'>

                <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />

                <Text
                    mt={{ base: '5%', }}
                    fontSize={{ base: 'xl', }}
                    fontWeight={{ base: 'bold', }}
                >
                    Please Provide Your Mobile Number
                </Text>


                <Box
                    borderRadius={{ base: 'xl', }}
                    bg={{ base: 'black', }}
                    mt={{ base: '2%', }}
                    height={{ base: '5rem', }}
                    width={{ base: '85%' }}>
                    <Text
                        mt={{ base: '2%', }}
                        pl={{ base: '3%', }}
                        color={{ base: 'white', }}
                        fontSize={{ base: '1rem', }}
                        fontWeight={{ base: 'bold', }}>
                        Mobile Number
                    </Text>
                    <Input
                        fontSize={{ base: '1.6rem', }}
                        color={{ base: 'green', }}
                        fontWeight={{ base: 'bold', }}
                        pl={{ base: '3%', }}
                        variant={{ base: 'unstyled', }}
                        required={true}
                        value={mobileNum}
                        onChange={(e) => {
                            const inputNumber = e.target.value;
                            if (mobileRegex.test(inputNumber)) {
                                setMobileNum(inputNumber);
                            }
                        }
                        }
                    >
                    </Input>
                </Box>

                <Box
                    mt={{ base: '5%', }}
                    borderRadius={{ base: 'xl', }}
                    bg={{ base: 'black', }}
                    height={{ base: '5rem', }}
                    width={{ base: '85%' }}>
                    <Text
                        mt={{ base: '2%', }}
                        pl={{ base: '3%', }}
                        color={{ base: 'white', }}
                        fontSize={{ base: '1.2rem', }}
                        fontWeight={{ base: 'bold', }}>
                        PIN
                    </Text>
                    <Input
                        fontSize={{ base: '1.4rem', }}
                        color={{ base: 'green', }}
                        fontWeight={{ base: 'bold', }}
                        pl={{ base: '3%', }}
                        variant={{ base: 'unstyled', }}
                        required={true}
                        type='password'
                        value={pin}
                        onChange={(e) => {
                            const inputPIN = e.target.value;
                            if (pinRegex.test(inputPIN)) {
                                setPIN(inputPIN);
                            }
                        }
                        }
                    >
                    </Input>
                </Box>

                {/* <Checkbox
                mt={'2%'}
                colorScheme='green'
                size={'lg'}  
                borderColor={'blue'}      
            >
                <Text
                    fontSize={{ base: 'xl', }}
                    fontWeight={{ base: 'bold', }}
                >
                    I agree to Terms and Conditions
                </Text>
            </Checkbox> */}
                <Button
                    bg={{ base: '#C8B7F7', }}
                    _hover={{ bg: '#957AE3' }}
                    borderRadius={{ base: 'full', }}
                    mt={{ base: '5%', }}
                    size={{ base: 'lg', }}
                    rightIcon={<ChevronRightIcon boxSize={6} />}
                    isDisabled={continueButtonDisabled()}
                    onClick={loginRetailer}
                >
                    <Text
                        color={{ base: 'black', }}
                        pl={{ base: '15%' }}>
                        Login
                    </Text>
                </Button>

            </VStack>
        </>
    );
}

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


export default function LoginPIN() {

    const pinRegex = /^\d{0,5}$/;
    const [pin, setPIN] = useState('');
    const [confirmPin, setConfirmPin] = useState('');

    return (
        <VStack className='baloo' spacing="0.1rem" align='center'>

            <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />

            <Text
                pt={{ base: '1.5%', }}
                fontSize={{ base: '2xl', }}
                fontWeight={{ base: 'bold', }}
            >
                Create a 5-digit PIN Number
            </Text>


            <Box
                borderRadius={{ base: 'xl', }}
                bg={{ base: 'black', }}
                height={{ base: '5rem', }}
                width={{ base: '40%' }}>
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

            <Text
                pt={{ base: '1.5%', }}
                fontSize={{ base: '2xl', }}
                fontWeight={{ base: 'bold', }}
            >
                Confirm Your PIN Number
            </Text>


            <Box
                borderRadius={{ base: 'xl', }}
                bg={{ base: 'black', }}
                height={{ base: '5rem', }}
                width={{ base: '40%' }}>
                <Text
                    mt={{ base: '2%', }}
                    pl={{ base: '3%', }}
                    color={{ base: 'white', }}
                    fontSize={{ base: '1.2rem', }}
                    fontWeight={{ base: 'bold', }}>
                    Confirm PIN
                </Text>
                <Input
                    fontSize={{ base: '1.4rem', }}
                    color={{ base: 'green', }}
                    fontWeight={{ base: 'bold', }}
                    pl={{ base: '3%', }}
                    variant={{ base: 'unstyled', }}
                    required={true}
                    type='password'
                    value={confirmPin}
                    onChange={(e) => {
                        const inputPIN = e.target.value;
                        if (pinRegex.test(inputPIN)) {
                            setConfirmPin(inputPIN);
                        }
                    }
                    }
                >
                </Input>
            </Box>



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

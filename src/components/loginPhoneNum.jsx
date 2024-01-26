import { useState } from 'react';

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

    return (
        <VStack className='baloo' spacing="0.1rem" align='center'>

            <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />

            <Text
                pt={{ base: '1.5%', }}
                fontSize={{ base: 'xl', }}
                fontWeight={{ base: 'bold', }}
            >
                Please Provide Your Mobile Number
            </Text>


            <Box
                borderRadius={{ base: 'xl', }}
                bg={{ base: 'black', }}
                mt={{ base: '1%', }}
                height={{ base: '5rem', }}
                width={{ base: '40%' }}>
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

            <Checkbox
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
            </Checkbox>
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

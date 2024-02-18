import {
    Text,
    VStack,
    Image,
    Button
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';

import Logo from "./logo";
import InfoText from "./infoText";

export default function RegOk() {

    const navigate = useNavigate();

    return (
        <VStack className="baloo" spacing="0rem" align="center">
            <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />
            <VStack
                bg={'#957AE3'}
                borderRadius={'2xl'}
                mt={'2%'}
                width={'85%'}
            >
                <Image
                    mt={'4%'}
                    src="tick.svg"
                    alt='tick'
                    boxSize={'15%'}
                />

                <InfoText mb={'0%'} fontSize={'2.5rem'} color={'white'} text={'Thank You'} />
                <InfoText mb={'0%'} fontSize={'1.2rem'} color={'white'} text={'We have collected your information.'} />
                <InfoText mb={'0%'} fontSize={'1.2rem'} color={'white'} text={'We are going to contact you and'} />
                <InfoText mb={'0%'} fontSize={'1.2rem'} color={'white'} text={'verify you as soon as possible.'} />
                <InfoText mb={'0%'} fontSize={'1.2rem'} color={'white'} text={'After successful verification,'} />
                <InfoText mb={'3%'} fontSize={'1.2rem'} color={'white'} text={'you can log into the app.'} />

            </VStack>

            <Button
                bg={{ base: '#C8B7F7', }}
                _hover={{ bg: '#957AE3' }}
                borderRadius={{ base: 'full', }}
                mt={{ base: '5%', }}
                size={{ base: 'lg', }}
                rightIcon={<ChevronRightIcon boxSize={8} />}
                onClick={
                    () => {
                        navigate(`/login`)                    
                    }
                }
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
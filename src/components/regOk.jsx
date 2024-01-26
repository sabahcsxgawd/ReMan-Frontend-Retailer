import {
    Text,
    VStack,
    Image,
    Box
} from '@chakra-ui/react'

import Logo from "./logo";
import InfoText from "./infoText";

export default function RegOk() {
    return (
        <VStack className="baloo" spacing="0rem" align="center">
            <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />
            <VStack
                bg={'#957AE3'}
                borderRadius={'2xl'}
                mt={'2%'}
                width={'30%'}
            >
                <Image
                    mt={'2%'}
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
        </VStack>
    );
}
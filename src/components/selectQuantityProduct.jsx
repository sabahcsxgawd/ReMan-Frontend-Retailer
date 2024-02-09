import { useLocation } from "react-router-dom";

import {
    Box,
    Spacer,
    Text,
    Image,
    IconButton

} from "@chakra-ui/react";

export default function SelectQuantityProduct() {
    const location = useLocation();

    const additionalInfo = location.state?.additionalInfo || {};
    const { pid, category, manufacturerName, productName, weightVolume, unit, unitPrice } = additionalInfo;

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const topPartHeight = screenHeight * 0.13;


    return (
        <>
            <Box
                className='baloo'
                w={`${screenWidth}px`}
                h={`${topPartHeight}px`}
                top={0}
                position={'fixed'}
                bg={'#190F37'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Image
                        boxSize={'55%'}
                        src="/arrow-left-circle.svg"
                    />
                </Box>
                <Box
                    w={'60%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        color={'#ffffff'}
                        noOfLines={1}
                        fontSize={'3xl'}
                    >
                        Select Quantity
                    </Text>
                </Box>
                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <IconButton
                        icon={<Image
                            boxSize={'55%'}
                            src="/shopping-cart.svg"
                        />}
                        isRound={true}
                        size={'lg'}
                    />
                </Box>
            </Box>

            <Box
                w={`${screenWidth * 0.8}px`}
                ml={`${screenWidth * 0.1}px`}
                top={`${topPartHeight + 20}px`}
                bottom={'30px'}
                position={'fixed'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bg={'#abcdef'}
            >

            </Box>
        </>
    )
}
import {
    Box,
    Spacer,
    Image, VStack,
    Text
} from '@chakra-ui/react';

import { useLocation, useNavigate } from 'react-router-dom';

export default function HomeProductItem({ pid, manufacturerName, productName, weightVolume, unit, unitPrice, category, productImageSize }) {

    const navigate = useNavigate();
    let locationData = useLocation().state;

    return (
        <Box
            w={'100%'}
            h={'50%'}
        >
            <Box
                h={'5%'} />

            <Box
                w={'90%'}
                ml={'5%'}
                h={'90%'}
                borderRadius={'xl'}
                display={'flex'}
                borderWidth={2}
                borderColor={'black'}
            >
                <Box
                    ml={'3%'}
                    w={'45%'}
                    display={'flex'}
                    alignItems={'center'}
                >

                    <VStack align={'left'}>

                        <Text
                            noOfLines={1}
                            color={'green'}
                        >
                            {manufacturerName}
                        </Text>

                        <Text
                            noOfLines={3}
                            color={'blue'}
                        >
                            {productName}
                        </Text>

                        <Text
                            noOfLines={1}
                            color={'green'}
                        >
                            {weightVolume}{unit}
                        </Text>

                    </VStack>
                </Box>

                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <VStack>
                        <Spacer />
                        <Image
                            src={`/category-images/${category}.svg`}
                            boxSize={`${productImageSize}px`} />

                        <Spacer />

                        <Text
                            noOfLines={2}
                            color={'blue'}
                            textAlign={'center'}
                            fontSize={'sm'}
                        >
                            Tk. {unitPrice} per unit
                        </Text>

                    </VStack>
                </Box>

                <Spacer />

                <Box
                    mr={'3%'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <VStack>

                        <Spacer />
                        <Image
                            src='/add-to-cart.svg'
                            boxSize={`${productImageSize * 0.6}px`}
                            onClick={
                                () => {
                                    locationData.pid = pid;
                                    navigate(`/categories/${category}/select-quantity`, { state: locationData });
                                }
                            }
                        />
                        <Spacer />

                        <Text
                            noOfLines={2}
                            color={'maroon'}
                            textAlign={'center'}
                            fontSize={'sm'}
                        >
                            MRP : Tk. {unitPrice * 1.2}
                        </Text>

                    </VStack>
                </Box>

            </Box>

        </Box>
    );
}

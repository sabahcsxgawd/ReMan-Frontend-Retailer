import {
    Box,
    HStack,
    VStack,
    Text,
    Spacer,
    Image
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

export default function IndividualProductCategory({ pid, index, category, manufacturerName, productName, weightVolume, unit, unitPrice }) {
    const navigate = useNavigate();

    const additionalInfo = {
        pid
    }

    return (
        <>
            {
                index > 0 &&
                <Box
                    w={'100%'}
                    h={'4%'}
                />
            }

            <Box
                w={'100%'}
                h={'48%'}
                borderWidth={2}
                borderRadius={'3xl'}
                borderColor={'#000000'}
                display={'flex'}
            >
                <Box
                    w={'44%'}
                    h={'100%'}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <VStack
                        ml={'5%'}
                        align={'left'}
                    >
                        <Text
                            noOfLines={2}
                            color={'#007321'}
                            fontSize={'md'}
                        >
                            {manufacturerName}
                        </Text>
                        <Text
                            noOfLines={4}
                            color={'#13529B'}
                            fontSize={'md'}
                        >
                            {productName}
                        </Text>
                        <Text
                            noOfLines={1}
                            color={'#007321'}
                            fontSize={'md'}
                        >
                            {weightVolume}{unit}
                        </Text>
                    </VStack>
                </Box>

                <Box
                    w={'30%'}
                    h={'100%'}
                    display={'flex'}
                    flexDir={'column'}
                >
                    <Box
                        w={'100%'}
                        h={'80%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Image
                            w={'80%'}
                            src={`/category-images/${category.toLowerCase()}.svg`}
                        />
                    </Box>

                    <Box
                        w={'100%'}
                        h={'20%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                    >
                        <Text
                            noOfLines={3}
                            fontSize={'sm'}
                            color={'#122F79'}
                        >
                            {`Tk. ${unitPrice} Per Unit`}
                        </Text>
                    </Box>

                </Box>

                <Box
                    w={'26%'}
                    h={'100%'}
                    display={'flex'}
                    flexDir={'column'}
                >
                    <Box
                        w={'100%'}
                        h={'80%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        onClick={() => navigate(`/categories/${category}/select-quantity`,
                            {
                                state: {
                                    additionalInfo
                                }
                            })}
                    >
                        <Image
                            boxSize={'60%'}
                            src="/add-to-cart.svg"
                        />
                    </Box>

                    <Box
                        w={'100%'}
                        h={'20%'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                    >
                        <Text
                            noOfLines={3}
                            fontSize={'sm'}
                            color={'#AC0101'}
                        >
                            {`(MRP : Tk. ${Math.round(unitPrice * 1.2)})`}
                        </Text>
                    </Box>

                </Box>

            </Box>
        </>
    )
}
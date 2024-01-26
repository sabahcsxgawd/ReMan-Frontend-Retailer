import { useState } from 'react';

import {
  Box,
  Button,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';

import Logo from './logo';


export default function Reg() {

  const NID_LENGTH = 13;
  const [nidValue, setNidValue] = useState('');
  const [fullName, setFullName] = useState('');
  const [shopName, setShopName] = useState('');

  const handleFullNameChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setFullName(getFormattedInput(sanitizedInput));
  }

  const handleShopNameChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setShopName(getFormattedInput(sanitizedInput));
  }

  const getFormattedInput = (sanitizedInput) => {
    const formattedInput = sanitizedInput
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedInput;
  }

  return (
    <VStack className='baloo' spacing="0.1rem" align='center'>

      <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />

      <Text
        pt={{ base: '1.5%', }}
        fontSize={{ base: 'lg', }}
        fontWeight={{ base: 'bold', }}>
        Please Enter Your Information
      </Text>

      <Box
        borderRadius={{ base: 'xl', }}
        bg={{ base: 'black', }}
        mt={{ base: '1%', }}
        height={{ base: '4rem', }}
        width={{ base: '40%' }}>
        <Text
          mt={{ base: '1%', }}
          pl={{ base: '3%', }}
          color={{ base: 'white', }}
          fontSize={{ base: '0.85rem', }}
          fontWeight={{ base: 'bold', }}>
          Full Name
        </Text>
        <Input
          fontSize={{ base: '1.3rem', }}
          color={{ base: 'green', }}
          fontWeight={{ base: 'bold', }}
          placeholder="ABC DEF"
          pl={{ base: '3%', }}
          variant={{ base: 'unstyled', }}
          required={true}
          value={fullName}
          onChange={handleFullNameChange}
        >
        </Input>
      </Box>

      <Box
        borderRadius={{ base: 'xl', }}
        bg={{ base: 'black', }}
        mt={{ base: '1%', }}
        height={{ base: '4rem', }}
        width={{ base: '40%' }}>
        <Text
          mt={{ base: '1%', }}
          pl={{ base: '3%', }}
          color={{ base: 'white', }}
          fontSize={{ base: '0.85rem', }}
          fontWeight={{ base: 'bold', }}>
          NID
        </Text>
        <Input
          fontSize={{ base: '1.3rem', }}
          color={{ base: 'green', }}
          fontWeight={{ base: 'bold', }}
          placeholder="1111111111111"
          pl={{ base: '3%', }}
          variant={{ base: 'unstyled', }}
          required={true}
          value={nidValue}
          onChange={(e) => {
            const currNIDValue = e.target.value.replace(/\D/g, '');
            if (currNIDValue.length <= NID_LENGTH) {
              setNidValue(currNIDValue);
            }
          }
          }
        >
        </Input>
      </Box>

      <Box
        borderRadius={{ base: 'xl', }}
        bg={{ base: 'black', }}
        mt={{ base: '1%', }}
        height={{ base: '4rem', }}
        width={{ base: '40%' }}>
        <Text
          mt={{ base: '1%', }}
          pl={{ base: '3%', }}
          color={{ base: 'white', }}
          fontSize={{ base: '0.85rem', }}
          fontWeight={{ base: 'bold', }}>
          Shop Name
        </Text>
        <Input
          fontSize={{ base: '1.3rem', }}
          color={{ base: 'green', }}
          fontWeight={{ base: 'bold', }}
          placeholder="ABC DEF"
          pl={{ base: '3%', }}
          variant={{ base: 'unstyled', }}
          required={true}
          value={shopName}
          onChange={handleShopNameChange}
        >
        </Input>
      </Box>

      <Box
        borderRadius={{ base: 'xl', }}
        bg={{ base: 'black', }}
        mt={{ base: '1%', }}
        height={{ base: '4rem', }}
        width={{ base: '40%' }}>
        <Text
          mt={{ base: '1%', }}
          pl={{ base: '3%', }}
          color={{ base: 'white', }}
          fontSize={{ base: '0.85rem', }}
          fontWeight={{ base: 'bold', }}>
          Email (Optional)
        </Text>
        <Input
          fontSize={{ base: '1.3rem', }}
          color={{ base: 'green', }}
          fontWeight={{ base: 'bold', }}
          placeholder="ABC DEF"
          pl={{ base: '3%', }}
          variant={{ base: 'unstyled', }}
          type='email'
          required={false}
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
          pl={{ base: '5%' }}>
          Create New Account
        </Text>
      </Button>

    </VStack>
  );
}

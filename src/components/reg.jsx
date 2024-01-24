import React from 'react';
import { useState } from 'react';

import {
  Box,
  Button,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ChevronRightIcon } from '@chakra-ui/icons';


function Reg() {

  const [nidValue, setNidValue] = useState('');

  return (
    <>
      <VStack className='reg' spacing="0.1rem" align='center'>
        <Image
          pt={{ base: '2%', }}
          width={{ base: '6%', }}
          height={{ base: '6%', }}
          src="reman-logo.svg"
          alt="ReMan" />

        <Text
          pt={{ base: '0%', }}
          fontSize={{ base: '4xl', }}
          fontWeight={{ base: 'bold', }}
          color='gray.700'>
          ReMan
        </Text>

        <Text
          pt={{ base: '0%', }}
          fontSize={{ base: '2xl', }}
          color='gray.650'
          fontWeight={{ base: 'bold', }}>
          Connecting Shops
        </Text>

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
              if (currNIDValue.length <= 13) {
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
    </>
  );
}

export default Reg;

import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

function RegistrationForm() {
  return (
    <>
      <Box as="main" p={4}>
        <Box as="header" mb={4}>
          <HStack>
            <Image src="/vite.svg" alt="ReMan logo" mr={4} />
            <Text fontSize="xl" fontWeight="bold">Connecting Shops</Text>
          </HStack>
        </Box>

        <Heading as="h1" mb={4}>
          Please enter your Personal Information
        </Heading>

        <VStack spacing={4}>
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="NID" placeholder="Enter your NID number" />
          <Input label="Shop Name" placeholder="Enter your shop name" />
          <Input label="Email (Optional)" placeholder="Enter your email" />
          <Button colorScheme="blue" variant="solid">
            Create New Account
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default RegistrationForm;

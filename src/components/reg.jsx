import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  Box,
  Button,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';

import Logo from './logo';
import LoginPhoneOTP from './loginPhoneOTP';
import LoginPIN from './loginPIN';


export default function Reg() {

  const NID_LENGTH = 13;
  const TIN_LENGTH = 12;
  const MOBILE_LENGTH = 14;
  const ZIP_LENGTH = 4;
  const nidRegex = /^\d{0,13}$/;
  const tinRegex = /^\d{0,12}$/;
  const mobileRegex = /^\+880\d{0,10}$/;
  const zipCodeRegex = /^\d{0,4}$/;

  const [mobileNum, setMobileNum] = useState('+880');
  const [nidValue, setNidValue] = useState('');
  const [tinValue, setTinValue] = useState('');
  const [shopType, setShopType] = useState('Select Shop Type');
  const [shopName, setShopName] = useState('');
  const [shopEmail, setShopEmail] = useState('');
  const [shopWebsite, setShopWebsite] = useState('');
  const [street, setStreet] = useState('');
  const [addressDetails, setAddressDetails] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [thana, setThana] = useState('');
  const [division, setDivision] = useState('');

  const [regPageState, setregPageState] = useState(5);

  const navigate = useNavigate();

  const addRetailer = async (pin) => {
    const postData = {
      ShopPhoneNumber: mobileNum,
      TIN: tinValue,
      ShopName: shopName,
      ShopType: shopType,
      Website: shopWebsite,
      ShopEmail: shopEmail,
      Password: pin,
      ShopImage: `/public/${shopName}.png`,
      HouseNumber: 'A-210',
      Street: street,
      ZIP: parseInt(zipCode, 10),
      Thana: thana,
      Division: division,
      AddressDetails: addressDetails,
      OwnerName: 'Rahim Malick',
      OwnerDateOfBirth: '',
      OwnerImage: '/public/owner.png',
      OwnerNID: nidValue,
    };
    try {
      const response = await axios.post('https://reman.us.to/api/registration/addRetailer', postData);
      // If successful, you can handle the response
      console.log('Response from server:', response.data);
      navigate('/regok');
    } catch (error) {
      // Handle the error response
      console.error('Failed to post data:', error.message);
    }
  }

  const getFormattedInput = (sanitizedInput) => {
    const formattedInput = sanitizedInput
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedInput;
  }

  const handleShopNameChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setShopName(getFormattedInput(sanitizedInput));
  }

  const handleThanaChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^A-Za-z\s]/g, '');
    setThana(getFormattedInput(sanitizedInput));
  }

  const checkShopName = () => {
    return shopName.length > 0;
  }

  const checkOwnerNID = () => {
    return nidValue.length === NID_LENGTH;
  }

  const checkTIN = () => {
    return tinValue.length === TIN_LENGTH;
  }

  const checkMobileNum = () => {
    return mobileNum.length === MOBILE_LENGTH;
  }

  const checkShopType = () => {
    return shopType !== 'Select Shop Type';
  }

  const checkEmail = () => {
    return (shopEmail.length === 0) || shopEmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const checkStreet = () => {
    return street.length > 0;
  }

  const checkAddressDetails = () => {
    return addressDetails.length > 0;
  }

  const checkZIP = () => {
    return zipCode.length === ZIP_LENGTH;
  }

  const checkThana = () => {
    return thana.length > 0;
  }

  const checkDivision = () => {
    return division !== 'Select Division';
  }

  const handleContinueClick = () => {
    if (regPageState === 1) {
      if (checkShopName() && checkOwnerNID() && checkTIN() && checkMobileNum()) {
        setregPageState(2);
      }
      else {
        alert('Please fill all the required fields');
      }
    }
    else if (regPageState === 2) {
      if (checkShopType() && checkEmail()) {
        setregPageState(3);
      }
      else {
        alert('Please fill all the required fields');
      }
    }
    else if (regPageState === 3) {
      if (checkStreet() && checkAddressDetails() && checkZIP() && checkThana() && checkDivision()) {
        setregPageState(4);
      }
      else {
        alert('Please fill all the required fields');
      }
    }
  }

  const handleOTPContinueClick = (regPageState) => {
    setregPageState(regPageState)
  }

  return (
    <>

      {regPageState < 6 && regPageState > 1 &&
        <Button
          ml={{ base: '5%', }}
          mt={{ base: '10%', }}
          position={{ base: 'absolute', }}
          className='baloo'
          bg={{ base: '#000000', }}
          borderRadius={{ base: 'full', }}
          size={{ base: 'md', }}
          onClick={() => {
            setregPageState(Math.max(1, regPageState - 1));
          }}
        >
          <Text
            color={{ base: 'white' }}
          >
            Go Back
          </Text>
        </Button>
      }

      {regPageState < 6 &&
        <Button
          ml={{ base: '75%', }}
          mt={{ base: '10%', }}
          position={{ base: 'absolute', }}
          className='baloo'
          bg={{ base: '#000000', }}
          borderRadius={{ base: 'full', }}
          size={{ base: 'md', }}
          onClick={() => {
            navigate('/login');
          }}
        >
          <Text
            color={{ base: 'white' }}
          >
            Login
          </Text>
        </Button>
      }

      {regPageState < 4 &&

        <VStack className='baloo' spacing="0.4rem" align='center'>

          <Logo pt={'5%'} imgSize={'20%'} fontSize1={'3xl'} fontSize2={'xl'} />

          <Text
            pt={{ base: '1.5%', }}
            fontSize={{ base: 'md', }}
            fontWeight={{ base: 'bold', }}>
            Please Enter Your Information
          </Text>

          {regPageState === 1 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
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
          }

          {regPageState === 1 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Owner NID
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
                  const currNIDValue = e.target.value;
                  if (nidRegex.test(currNIDValue)) {
                    setNidValue(currNIDValue);
                  }
                }
                }
              >
              </Input>
            </Box>
          }


          {regPageState === 1 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                TIN
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="111111111111"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={true}
                value={tinValue}
                onChange={(e) => {
                  const currTINValue = e.target.value;
                  if (tinRegex.test(currTINValue)) {
                    setTinValue(currTINValue);
                  }
                }
                }
              >
              </Input>
            </Box>
          }

          {regPageState === 1 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '2%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Shop Mobile Number
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
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
          }

          {regPageState === 2 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Shop Type
              </Text>
              <Select
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="Select Shop Type"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={true}
                value={shopType}
                onChange={(e) => {
                  setShopType(e.target.value);
                }}
              >
                <option value="Grocery">Grocery</option>
                <option value="Electronics">Electronics</option>
              </Select>
            </Box>
          }

          {regPageState === 2 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Shop Email (Optional)
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
                value={shopEmail}
                onChange={(e) => {
                  setShopEmail(e.target.value);
                }}
              >
              </Input>
            </Box>
          }

          {regPageState === 2 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Shop Website (Optional)
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="ABC DEF"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={false}
                value={shopWebsite}
                onChange={(e) => {
                  setShopWebsite(e.target.value);
                }}
              >
              </Input>
            </Box>
          }

          {/* {regPageState === 3 &&
        <Box
          borderRadius={{ base: 'xl', }}
          bg={{ base: 'black', }}
          mt={{ base: '1%', }}
          height={{ base: '4.2rem', }}
          width={{ base: '85%' }}>
          <Text
            mt={{ base: '1%', }}
            pl={{ base: '3%', }}
            color={{ base: 'white', }}
            fontSize={{ base: '0.85rem', }}
            fontWeight={{ base: 'bold', }}>
            Address House Number
          </Text>
          <Input
            fontSize={{ base: '1.3rem', }}
            color={{ base: 'green', }}
            fontWeight={{ base: 'bold', }}
            placeholder="A-210"
            pl={{ base: '3%', }}
            variant={{ base: 'unstyled', }}
            required={true}
          // value={shopWebsite}
          // onChange={(e) => {
          //   setShopWebsite(e.target.value);
          // }}
          >
          </Input>
        </Box>
      } */}

          {regPageState === 3 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Street
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="Rankin Street"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={true}
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              >
              </Input>
            </Box>
          }

          {regPageState === 3 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Address Details
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="A-210, Beside Mosque"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={true}
                value={addressDetails}
                onChange={(e) => {
                  setAddressDetails(e.target.value);
                }}
              >
              </Input>
            </Box>
          }

          {regPageState === 3 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '2%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                ZIP
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                placeholder='1200'
                required={true}
                value={zipCode}
                onChange={(e) => {
                  const inputZIP = e.target.value;
                  if (zipCodeRegex.test(inputZIP)) {
                    setZipCode(inputZIP);
                  }
                }
                }
              >
              </Input>
            </Box>
          }

          {regPageState === 3 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4.2rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Thana
              </Text>
              <Input
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="Cityville"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={true}
                value={thana}
                onChange={handleThanaChange}
              >
              </Input>
            </Box>
          }

          {regPageState === 3 &&
            <Box
              borderRadius={{ base: 'xl', }}
              bg={{ base: 'black', }}
              mt={{ base: '1%', }}
              height={{ base: '4rem', }}
              width={{ base: '85%' }}>
              <Text
                mt={{ base: '1%', }}
                pl={{ base: '3%', }}
                color={{ base: 'white', }}
                fontSize={{ base: '0.85rem', }}
                fontWeight={{ base: 'bold', }}>
                Division
              </Text>
              <Select
                fontSize={{ base: '1.3rem', }}
                color={{ base: 'green', }}
                fontWeight={{ base: 'bold', }}
                placeholder="Select Division"
                pl={{ base: '3%', }}
                variant={{ base: 'unstyled', }}
                required={true}
                value={division}
                onChange={(e) => {
                  setDivision(e.target.value);
                }}
              >
                <option value="Dhaka">Dhaka Division</option>
                <option value="Chattogram">Chattogram Division</option>
                <option value="Rajshahi">Rajshahi Division</option>
                <option value="Khulna">Khulna Division</option>
                <option value="Barishal">Barishal Division</option>
                <option value="Sylhet">Sylhet Division</option>
                <option value="Rangpur">Rangpur Division</option>
                <option value="Mymensingh">Mymensingh Division</option>
              </Select>
            </Box>
          }
          <Button
            bg={{ base: '#C8B7F7', }}
            _hover={{ bg: '#957AE3' }}
            borderRadius={{ base: 'full', }}
            mt={{ base: '1.5%', }}
            size={{ base: 'lg', }}
            rightIcon={<ChevronRightIcon boxSize={6} />}
            onClick={handleContinueClick}
          >
            <Text
              color={{ base: 'black', }}
              pl={{ base: '5%' }}>
              {regPageState === 3 ? 'Create New Account' : 'Continue'}
            </Text>
          </Button>

        </VStack>
      }
      {
        regPageState === 4 &&
        <LoginPhoneOTP handleOTPContinueClick={handleOTPContinueClick} />
      }
      {
        regPageState === 5 &&
        <LoginPIN handlePINContinueClick={addRetailer} />
      }
    </>
  );
}

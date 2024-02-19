import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import {
    Box,
    Text,
    Image,
    VStack,
    HStack,
    Spacer,
    Divider,
    Radio,
    RadioGroup,
    Stack
} from '@chakra-ui/react';


export default function Checkout() {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    const [checkoutMethod, setCheckoutMethod] = useState('Cash On Delivery');

    const handleCheckout = async () => {
        if (checkoutMethod === 'Cash On Delivery') {
            const postData = {
                sid: locationData.sid,
                VoucherCode: locationData.proceedToPayData.VoucherCode,
                PaymentMethod: "Cash On Delivery",
                TransactionID: null
            };

            const apiUrl = `${import.meta.env.VITE_API_URL}/order/addOrder`;

            try {
                const response = await axios.post(apiUrl, postData);
                alert(response.data.message);
                locationData.proceedToPayData = {};
                navigate('/home', { state: locationData })
            } catch (error) {
                alert('Error making payment')
            }
        }
        else if (checkoutMethod === 'Online Payment') {
            const apiUrl = `${import.meta.env.VITE_API_URL}/payment/paymentOnline`;

            try {
                const response = await axios.post(apiUrl);
                console.log(response.data);
                locationData.proceedToPayData.PaymentMethod = 'Online Payment';
                locationData.proceedToPayData.TransactionID = response.data.TransactionID;

                window.location.href = response.data.url;


            } catch (error) {
                alert('Error making payment')
            }
        }
        else {
            alert('Please select a payment method');
        }
    }

    return (
        <>
            <Box
                className="baloo"
                w={'100%'}
                h={'12%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                bg={'#190F37'}
            >

                <Box
                    w={'2%'}
                    h={'100%'}
                />

                <Box
                    w={'20%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    onClick={
                        () => {
                            navigate(-1, { state: locationData });
                        }
                    }
                >
                    <Image
                        src="/arrow-left-circle.svg"
                        boxSize={'65%'}
                    />
                </Box>

                <Box
                    w={'55%'}
                    h={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text
                        fontSize={'3xl'}
                        fontWeight={'bold'}
                        color={'#F9F871'}
                    >
                        Checkout
                    </Text>
                </Box>

                <Box
                    w={'15%'}
                    h={'70%'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={'full'}
                    bg={'#FFFFFF'}
                >
                    <Image
                        src={'/profile.svg'}
                        boxSize={'60%'}
                    />
                </Box>

                <Box
                    w={'8%'}
                    h={'100%'}
                />

            </Box>

            <Box
                className="baloo"
                w={'90%'}
                h={'35%'}
                top={'15%'}
                left={'5%'}
                bg={'#1B2A78'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                borderRadius={'60px'}
            >
                <VStack>

                    <HStack>

                        <Image
                            src="/map-marker.svg"
                        />

                        <Text
                            color={'white'}
                            fontSize={'2xl'}
                            noOfLines={1}
                        >
                            Delivery Address
                        </Text>

                    </HStack>

                    <Spacer />

                    <Text
                        color={'white'}
                        fontSize={'xl'}
                        noOfLines={3}
                        textAlign={'center'}
                    >
                        Palashi Bazaar, Dhaka-1205
                    </Text>

                    <Text
                        color={'white'}
                        fontSize={'xl'}
                        noOfLines={1}
                    >
                        Contact: &nbsp; +8803333333333
                    </Text>

                </VStack>

            </Box>

            <Box
                className="baloo"
                w={'80%'}
                h={'25%'}
                top={'55%'}
                left={'10%'}
                bg={'#dddddd'}
                display={'flex'}
                justifyContent={'left'}
                pos={'fixed'}
                borderRadius={'20px'}
            >
                <VStack
                    ml={'5%'}
                    mt={'2%'}
                >
                    <Text
                        noOfLines={1}
                        fontSize={'2xl'}
                    >
                        Payment Method
                    </Text>

                    <Divider
                        borderColor={'#1B2A78'}
                        borderWidth={1}
                    />

                    <RadioGroup
                        onChange={setCheckoutMethod}
                        value={checkoutMethod}
                    >
                        <Stack>

                            <Radio
                                size={'lg'}
                                colorScheme="orange"
                                value="Cash On Delivery"
                            >
                                Cash On Delivery
                            </Radio>

                            <Radio
                                size={'lg'}
                                colorScheme="orange"
                                value="Online Payment"
                            >
                                Online Payment
                            </Radio>

                        </Stack>

                    </RadioGroup>

                </VStack>
            </Box>

            <Box
                className="baloo"
                w={'70%'}
                h={'8%'}
                bottom={'5%'}
                left={'15%'}
                bg={'red'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                pos={'fixed'}
                borderRadius={'full'}
                onClick={handleCheckout}
            >
                <Text
                    color={'white'}
                    fontSize={'2xl'}
                    noOfLines={1}
                >
                    Checkout
                </Text>
            </Box>

        </>
    );
}
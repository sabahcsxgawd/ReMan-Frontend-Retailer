import {
    Box,
    Text,
    Spacer,
    VStack,
    Textarea,
    Button,
    Divider
} from '@chakra-ui/react';

import axios from 'axios';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import StarIcon from './StarIcon';

export default function ProductRateReview({ pid, name }) {

    const navigate = useNavigate();
    const locationData = useLocation().state;

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const characterLimit = 150; // Set your desired character limit

    const handleReviewChange = (event) => {
        const inputReview = event.target.value;
        if (inputReview.length <= characterLimit) {
            setReview(inputReview);
        }
    };

    const handleSubmitReview = async () => {
        // TODO: Submit review and rating to the server
        const postData = {
            oid: locationData.oid,
            mid: locationData.mid,
            pid: pid,
            Rating: rating,
            Review: review
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/order/addReviewRating`;

        try {
            const response = await axios.post(apiUrl, postData);
            if (response.data.success === true) {
                alert('Review submitted successfully for ' + name);
                setRating(0);
                setReview('');
            }
        } catch (error) {
            console.log('Error submitting review');
        }
    }

    const handleStarClick = (clickedRating) => {
        setRating((prevRating) => (prevRating === clickedRating ? Math.max(0, prevRating - 1) : clickedRating));
    };

    return (
        <>
            <Divider
                w={'96%'}
                ml={'2%'}
                mt={'2'}
                mb={'2'}
                borderWidth={2}
                borderColor={'black'}
            />

            <Box
                w={'90%'}
                h={'50px'}
                display={'flex'}
                mt={5}
                ml={'5%'}
                borderRadius={'2xl'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'column'}
                bg={'teal'}
            >
                <Text
                    color={'black'}
                >
                    Rating & Review for
                </Text>

                <Text
                    color={'white'}
                >
                    {name}
                </Text>
            </Box>

            <Box
                display={'flex'}
                mt={5}
                alignItems={'center'}
            >
                <Text
                    fontSize={'2xl'}
                    ml={3}
                >
                    Rate
                </Text>

                <Spacer />

                {[1, 2, 3, 4, 5].map((index) => (
                    <StarIcon
                        key={index}
                        selected={index <= rating}
                        onClick={() => handleStarClick(index)}
                    />
                ))}

            </Box>

            <Box
                w={'94%'}
                mt={5}
                ml={'3%'}
                mb={5}
            >
                <Text
                    fontSize={'2xl'}
                >
                    Review
                </Text>

                <Text
                    color="gray.500"
                >
                    {`${review.length}/${characterLimit} characters`}
                </Text>

                <VStack
                    align="start"
                    spacing={4}
                >
                    <Textarea
                        borderWidth={2}
                        value={review}
                        onChange={handleReviewChange}
                        placeholder="Write your review..."
                    />

                    <Button
                        colorScheme="teal"
                        onClick={handleSubmitReview}
                    >
                        Submit
                    </Button>

                </VStack>

            </Box>
        </>
    );
}
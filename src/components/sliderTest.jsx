import React, { useState } from 'react';
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    SimpleGrid,
    Box
} from '@chakra-ui/react'


export default function SliderTest() {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300);

    return (
        <>
            <SimpleGrid columns={4} spacing={10} ml={'30px'} mr={'30px'}>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>

            <RangeSlider
                w={'70%'}
                ml={'15%'}
                mt={'10%'}
                onChangeEnd={(value) => console.log(value)}
                defaultValue={[120, 240]} min={min} max={max} step={(max - min) / 11}
                focusThumbOnChange={false}
            >
                <RangeSliderTrack bg='red'>
                    <RangeSliderFilledTrack bg='green' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} borderColor={'blue'} />
                <RangeSliderThumb boxSize={6} index={1} borderColor={'blue'} />
            </RangeSlider>
        </>
    );
};

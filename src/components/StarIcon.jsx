import {
    Image
} from '@chakra-ui/react';

export default function StarIcon({ selected, onClick }) {
    return (
        <Image
            mr={'1.5'}
            src={selected ? 'star-yellow.svg' : 'star-white.svg'}
            boxSize={'12%'}
            onClick={onClick}
        />
    )
}
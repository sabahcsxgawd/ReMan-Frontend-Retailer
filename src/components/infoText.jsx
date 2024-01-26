import {
    Text,
} from '@chakra-ui/react'

export default function InfoText({ mb, fontSize, color, text }) {
    return (
        <Text
            color={color}
            fontSize={fontSize}
            mb={mb}
        >
            {text}
        </Text>
    );
}
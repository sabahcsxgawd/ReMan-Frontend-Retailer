import { Box, Image, Text, VStack } from "@chakra-ui/react";

function Logo({ pt, imgSize, fontSize1, fontSize2 }) {
    return (
        <Box
        >
            <VStack className="baloo" spacing="0rem" align="center">
                <Image
                    pt={pt}
                    boxSize={imgSize}
                    src="reman-logo.svg"
                    alt="ReMan"
                />

                <Text
                    fontSize={fontSize1}
                    fontWeight={'bold'}
                    color="gray.700"
                >
                    ReMan
                </Text>

                <Text
                    fontSize={fontSize2}
                    fontWeight={'bold'}
                    color="gray.650"
                >
                    Connecting Shops
                </Text>
            </VStack>
        </Box>
    );
}

export default Logo;
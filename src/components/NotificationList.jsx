import {
    Box,
    Text,
} from '@chakra-ui/react';


export default function NotificationList({ readStatus }) {

    const textColor = readStatus ? "#AFAFC1" : "red";
    const timeColor = readStatus ? "red.500" : "white";

    return (
        <Box
            w={"100%"}
            h={"25%"}
        >
            <Box
                w={"100%"}
                h={"92%"}
                bg={textColor}
                borderRadius={'3xl'}
                display={"flex"}
                flexDir={"column"}
            >
                <Box
                    w={"100%"}
                    h={"5%"}
                >
                </Box>

                <Box
                    w={"90%"}
                    h={"60%"}
                    ml={"5%"}
                >
                    <Text
                        noOfLines={3}
                        textAlign={"left"}
                    >
                        Fresh Group has launced a brand new
                        product. Check it out now
                    </Text>

                </Box>

                <Box
                    w={"100%"}
                    h={"10%"}
                >
                </Box>

                <Box
                    w={"90%"}
                    h={"20%"}
                    ml={"5%"}
                    display={"flex"}
                    flexDir={"row"}
                >
                    <Box
                        w={"40%"}
                        h={"100%"}
                    >
                        <Text
                            noOfLines={1}
                            textAlign={"left"}
                            color={timeColor}
                        >
                            10 : 00 PM
                        </Text>

                    </Box>

                    <Box
                        w={"10%"}
                        h={"100%"}
                    >

                    </Box>

                    <Box
                        w={"50%"}
                        h={"100%"}
                    >
                        <Text
                            noOfLines={1}
                            textAlign={"right"}
                            color={timeColor}
                        >
                            25 Jul 2024
                        </Text>

                    </Box>

                </Box>

                <Box
                    w={"100%"}
                    h={"5%"}
                >
                </Box>

            </Box>

        </Box>
    );
}
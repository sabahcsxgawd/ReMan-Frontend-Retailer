import {
    Box,
    Text,
} from '@chakra-ui/react';


export default function NotificationList({ notification }) {

    const readStatus = notification.ReadStatus;
    const dateTime = new Date(notification.DateAndTime);

    // Format date as day month year (e.g., 02 Mar 2024)
    const formattedDate = dateTime.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    // Format time as HH:MM AM/PM (e.g., 09:53 PM)
    const formattedTime = dateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const textColor = readStatus ? "#AFAFC1" : "red";
    const timeColor = readStatus ? "red.500" : "white";

    console.log(notification);

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
                        {notification.Message}
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
                            {formattedTime}
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
                            {formattedDate}
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
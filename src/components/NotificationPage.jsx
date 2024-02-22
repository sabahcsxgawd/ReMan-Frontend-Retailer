import { useState } from "react";

import {
    Box,
    Spinner,
    Text,
    Image,
    Spacer,


} from "@chakra-ui/react";

import NotificationList from "./NotificationList";
import UserProfileDrawer from "./UserProfileDrawer";

export default function NotificationPage() {

    // TODO : fetch data from server
    const [isloading, setIsLoading] = useState(false);

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);


    const profilePicPixel = window.screen.height * 0.07;

    if (isloading) {
        return (
            <Box
                w={"100%"}
                h={"100%"}
                pos={"fixed"}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDir={"column"}
            >
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
                <Text
                    className="baloo"
                    fontSize={"2xl"}
                >
                    Loading...
                </Text>
            </Box>
        );
    }

    return (
        <>
            {/* header */}
            <Box
                className="baloo"
                bg={'#190F37'}
                w={"100%"}
                h={"12%"}
                top={"0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                pos={"fixed"}
            >
                <Spacer />

                <Image
                    src="/arrow-left-circle.svg"
                    alt="back"
                    boxSize={`${profilePicPixel}px`}
                />

                <Spacer />
                <Spacer />

                <Text
                    noOfLines={1}
                    fontSize={"2xl"}
                    color={"white"}
                >
                    Notifications
                </Text>

                <Spacer />
                <Spacer />

                <Image
                    src="profile.svg"
                    alt="profile"
                    boxSize={`${profilePicPixel}px`}
                    bg={'white'}
                    borderRadius={"full"}
                    onClick={handleOpenDrawer}
                />

                <UserProfileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}/>

                <Spacer />

            </Box>

            {/* notification list */}
            <Box
                className="baloo"
                w={"90%"}
                h={"80%"}
                bottom={"0"}
                left={"5%"}
                pos={"fixed"}
                overflow={"auto"}
            >

                <NotificationList readStatus={true} />
                <NotificationList readStatus={false} />
                <NotificationList readStatus={true} />
                <NotificationList readStatus={false} />
                <NotificationList readStatus={true} />
                <NotificationList readStatus={false} />
                <NotificationList readStatus={true} />
                <NotificationList readStatus={false} />

            </Box>

        </>
    );
}
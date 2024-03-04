import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

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

    const navigate = useNavigate();
    const locationData = useLocation().state;

    const [isloading, setIsLoading] = useState(true);

    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const handleOpenDrawer = () => setDrawerOpen(true);
    const handleCloseDrawer = () => setDrawerOpen(false);

    // Sorting function
    const customSort = (a, b) => {
        // First, sort by ReadStatus (false comes first)
        const readStatusComparison = a.ReadStatus - b.ReadStatus;

        // If ReadStatus is the same, sort by DateAndTime in descending order
        const dateComparison = new Date(b.DateAndTime) - new Date(a.DateAndTime);

        // Combine the comparisons
        return readStatusComparison || dateComparison;
    };

    const [allNotifications, setAllNotifications] = useState([]);


    const profilePicPixel = window.screen.height * 0.07;

    const fetchAllNotifications = async () => {
        const postData = {
            sid: locationData.sid
        };

        const apiUrl = `${import.meta.env.VITE_API_URL}/notification/allNotificationsRetailer`;

        try {
            const response = await axios.post(apiUrl, postData);
            setAllNotifications(response.data.notifications.sort(customSort));
            setIsLoading(false);
        }
        catch (error) {
            console.log('Error fetching Notifications');
        }
    }


    useEffect(() => {
        fetchAllNotifications();
    }, []);

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
                    onClick={
                        () => {
                            navigate(-1, { state: locationData});
                        }
                    }
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

                <UserProfileDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />

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

                {
                    allNotifications.map((notification) => {
                        return (
                            <NotificationList
                                key={notification.nid}
                                notification={notification}
                            />
                        );
                    })
                }

            </Box>

        </>
    );
}
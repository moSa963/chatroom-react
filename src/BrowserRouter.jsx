import { createBrowserRouter } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreenNav from "./screens/SettingsScreen/SettingsScreenNav";
import RoomsScreen from "./screens/RoomScreens/RoomsScreen";
import CreateRoomScreen from "./screens/RoomScreens/CreateRoomScreen";
import RoomBaseScreen from "./screens/RoomScreens/RoomBaseScreen";
import ShowRoomScreen from "./screens/RoomScreens/ShowRoomScreen";
import RoomSettingsNav from "./screens/RoomSettingsScreens/RoomSettingsNav";
import ConversationScreen from "./screens/RoomScreens/ConversationScreen";
import ShowRoomsUserScreen from "./screens/RoomScreens/ShowRoomsUserScreen";
import RoomSettingsScreen from "./screens/RoomSettingsScreens/RoomSettingsScreen";
import RoomRequestsSreen from "./screens/RoomSettingsScreens/RoomRequestsSreen";
import RoomUsersScreen from "./screens/RoomSettingsScreens/RoomUsersScreen";
import RoomBansScreen from "./screens/RoomSettingsScreens/RoomBansScreen";
import RoomThemeScreen from "./screens/RoomSettingsScreens/RoomThemeScreen";
import ProfileScreen from "./screens/SettingsScreen/ProfileScreen";
import ThemeScreen from "./screens/SettingsScreen/ThemeScreen";
import UserInvitationsScreen from "./screens/SettingsScreen/UserInvitationsScreen";
import UserBaseScreen from "./screens/UsersScreens/UserBaseScreen";
import UserScreen from "./screens/UsersScreens/UserScreen";


export const createRoutes = () => createBrowserRouter([
    {
        path: "dashboard",
        element: <DashboardScreen />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                path: "rooms",
                children: [
                    {
                        index: true,
                        element: <RoomsScreen />
                    },
                    {
                        path: "new",
                        element: <CreateRoomScreen />
                    },
                    {
                        path: ":id",
                        element: <RoomBaseScreen />,
                        children: [
                            {
                                index: true,
                                element: <ShowRoomScreen />
                            },
                            {
                                path: "settings",
                                element: <RoomSettingsNav />,
                                children: [
                                    {
                                        index: true,
                                        element: <RoomSettingsScreen />
                                    },
                                    {
                                        path: "requests",
                                        element: <RoomRequestsSreen />
                                    },
                                    {
                                        path: "users",
                                        element: <RoomUsersScreen />
                                    },
                                    {
                                        path: "bans",
                                        element: <RoomBansScreen />
                                    },
                                    {
                                        path: "theme",
                                        element: <RoomThemeScreen />
                                    },
                                ],
                            },
                            {
                                path: "users/:username",
                                element: <ShowRoomsUserScreen />
                            },
                            {
                                path: "chat",
                                element: <ConversationScreen />
                            },
                        ],
                    },
                ],
            },
            {
                path: "settings",
                element: <SettingsScreenNav />,
                children: [
                    {
                        index: true,
                        element: <ProfileScreen />,
                    },
                    {
                        path: "theme",
                        element: <ThemeScreen />,
                    },
                    {
                        path: "invitations",
                        element: <UserInvitationsScreen />,
                    },
                ],
            },
            {
                path: "users",
                children: [
                    {
                        path: ":username",
                        element: <UserBaseScreen />,
                        children: [
                            {
                                index: true,
                                element: <UserScreen />
                            },
                        ]
                    },
                ],
            },
        ]
    },
    {
        path: "*",
        element: <ErrorScreen status={404} errorText="Sorry. this page does not exist" to={"/dashboard"} toText="HOMR PAGE" />,
    }
]);
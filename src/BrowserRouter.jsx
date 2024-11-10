import { createBrowserRouter } from "react-router-dom";
import ErrorScreen from "./screens/ErrorScreen";


export const createRoutes = () => createBrowserRouter([
    {
        path: "dashboard",
        lazy: () => getLazyComponent(import("./screens/DashboardScreen")),
        children: [
            {
                index: true,
                lazy: () => getLazyComponent(import("./screens/HomeScreen"))
            },
            {
                path: "rooms",
                children: [
                    {
                        index: true,
                        lazy: () => getLazyComponent(import("./screens/RoomScreens/RoomsScreen"))
                    },
                    {
                        path: "new",
                        lazy: () => getLazyComponent(import("./screens/RoomScreens/CreateRoomScreen"))
                    },
                    {
                        path: ":id",
                        lazy: () => getLazyComponent(import("./screens/RoomScreens/RoomBaseScreen")),
                        children: [
                            {
                                index: true,
                                lazy: () => getLazyComponent(import("./screens/RoomScreens/ShowRoomScreen"))
                            },
                            {
                                path: "settings",
                                lazy: () => getLazyComponent(import("./screens/RoomSettingsScreens/RoomSettingsNav")),
                                children: [
                                    {
                                        index: true,
                                        lazy: () => getLazyComponent(import("./screens/RoomSettingsScreens/RoomSettingsScreen"))
                                    },
                                    {
                                        path: "requests",
                                        lazy: () => getLazyComponent(import("./screens/RoomSettingsScreens/RoomRequestsScreen"))
                                    },
                                    {
                                        path: "users",
                                        lazy: () => getLazyComponent(import("./screens/RoomSettingsScreens/RoomUsersScreen"))
                                    },
                                    {
                                        path: "bans",
                                        lazy: () => getLazyComponent(import("./screens/RoomSettingsScreens/RoomBansScreen"))
                                    },
                                    {
                                        path: "theme",
                                        lazy: () => getLazyComponent(import("./screens/RoomSettingsScreens/RoomThemeScreen"))
                                    },
                                ],
                            },
                            {
                                path: "users/:username",
                                lazy: () => getLazyComponent(import("./screens/RoomScreens/ShowRoomsUserScreen"))
                            },
                            {
                                path: "chat",
                                lazy: () => getLazyComponent(import("./screens/RoomScreens/ConversationScreen"))
                            },
                        ],
                    },
                ],
            },
            {
                path: "settings",
                lazy: () => getLazyComponent(import("./screens/SettingsScreen/SettingsScreenNav")),
                children: [
                    {
                        index: true,
                        lazy: () => getLazyComponent(import("./screens/SettingsScreen/ProfileScreen")),
                    },
                    {
                        path: "theme",
                        lazy: () => getLazyComponent(import("./screens/SettingsScreen/ThemeScreen")),
                    },
                    {
                        path: "invitations",
                        lazy: () => getLazyComponent(import("./screens/SettingsScreen/UserInvitationsScreen")),
                    },
                ],
            },
            {
                path: "users",
                children: [
                    {
                        path: ":username",
                        lazy: () => getLazyComponent(import("./screens/UsersScreens/UserBaseScreen")),
                        children: [
                            {
                                index: true,
                                lazy: () => getLazyComponent(import("./screens/RoomScreens/ShowRoomsUserScreen"))
                            },
                        ]
                    },
                ],
            },
        ]
    },
    {
        path: "*",
        element: <ErrorScreen status={404} errorText="Sorry. this page does not exist" to={"/dashboard"} toText="HOME PAGE" />,
    }
]);


const getLazyComponent = async (op) => {
    return {
        Component: (await op).default
    };
}
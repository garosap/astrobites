import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "./colors.json";
import OrdersPage from "./orders";

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Home!</Text>
        </View>
    );
}

function Orders() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}></View>
    );
}

function Challenges() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Challenges!</Text>
        </View>
    );
}

function Profile() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile!</Text>
        </View>
    );
}

// import { View, Text, TouchableOpacity } from "react-native";

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View
            style={{
                flexDirection: "row",
                height: hp("8%"),
                backgroundColor: colors.tabBar,
                width: wp("90%"),
                alignSelf: "center",
                borderRadius: 1000000,
                marginBottom: hp("2%"),
                justifyContent: "center",
                alignItems: "center",
            }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        {label === "Home" && (
                            <MaterialCommunityIcons
                                name="home"
                                color={isFocused ? colors.primary : "#222"}
                                size={wp(7)}
                            />
                        )}

                        {label === "Orders" && (
                            <MaterialCommunityIcons
                                name="bell"
                                color={isFocused ? colors.primary : "#222"}
                                size={wp(7)}
                            />
                        )}

                        {label === "Challenges" && (
                            <MaterialCommunityIcons
                                name="trophy"
                                color={isFocused ? colors.primary : "#222"}
                                size={wp(7)}
                            />
                        )}

                        {label === "Profile" && (
                            <MaterialCommunityIcons
                                name="account"
                                color={isFocused ? colors.primary : "#222"}
                                size={wp(7)}
                            />
                        )}

                        <Text
                            style={{
                                fontSize: wp(3),
                                color: isFocused ? colors.primary : "#222",
                            }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: "#e91e63",
                // tabBarStyle: {
                //     height: hp("8%"),
                //     backgroundColor: colors.primary,
                //     width: wp("90%"),
                //     alignSelf: "center",
                //     borderRadius: 1000,
                //     marginBottom: hp("2%"),
                //     justifyContent: "center",
                //     // padding: "3%",
                // },
                // tabBarShowLabel: false,
                // tabBarLabelStyle: {
                //     flex: 1,
                // },
                // tabBarIconStyle: {
                //     flex: 1,
                // },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersPage}
                options={{
                    tabBarLabel: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bell"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Challenges"
                component={Challenges}
                options={{
                    tabBarLabel: "Challenges",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bell"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bell"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

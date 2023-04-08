import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
    Image,
} from "react-native";
import colors from "./colors.json";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfilePage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Profile</Text>
                <View style={{ paddingLeft: wp("22%") }}>
                    <Text style={styles.rank}>17th Global Rank</Text>
                </View>
                <View style={styles.line} />
                <MaterialCommunityIcons
                    name="diamond-outline"
                    size={wp(5)}
                    color={colors.text}
                />
                <Text style={styles.rank}>3500</Text>
            </View>

            <View style={{ alignItems: "center", paddingTop: hp("2%") }}>
                <Image
                    source={require("./assets/1-removebg-preview.png")}
                    style={{
                        width: wp("30%"),
                        height: hp("15%"),
                        marginTop: hp("3%"),
                        borderRadius: wp("15%"),
                    }}
                />

                <Text
                    style={{
                        fontSize: wp("4%"),
                        fontWeight: "bold",
                        color: colors.text,
                        paddingTop: hp("2%"),
                    }}>
                    Iliadis Viktor, Level 24{" "}
                </Text>
                <Text
                    style={{
                        fontSize: wp("3%"),
                        color: "#666",
                        paddingTop: hp("0.5%"),
                    }}>
                    Star Eater{" "}
                </Text>
                <View
                    style={{
                        backgroundColor: "#3A71F3",
                        width: wp("30%"),
                        height: hp("4%"),
                        borderRadius: wp("2%"),
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: hp("2%"),
                    }}>
                    <Text style={{ color: "white", fontSize: wp("3%") }}>
                        Customize Me
                    </Text>
                </View>
                {/* put a line  */}
                <View
                    style={{
                        height: hp("0.1%"),
                        width: wp("93%"),
                        backgroundColor: "#ddd",
                        marginTop: hp("2.5%"),
                    }}></View>
                <View
                    style={{
                        width: "90%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: hp("2%"),
                    }}>
                    <Text
                        style={{
                            color: colors.text,
                            fontSize: wp(3.5),
                        }}>
                        Level 24
                    </Text>
                    <Text
                        style={{
                            color: colors.text,
                            fontSize: wp(3.5),
                        }}>
                        Level 25
                    </Text>
                </View>
                <View
                    style={{
                        width: "90%",
                        height: wp(3),
                    }}
                />

                <View
                    style={{
                        width: "90%",
                        height: wp(3),
                        backgroundColor: "#D9D9D91E",
                        borderRadius: 10000,
                    }}>
                    <View
                        style={{
                            width: "80%",
                            height: wp(3),
                            backgroundColor: "#7F6CFF",
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 10000,
                            justifyContent: "space-between",
                        }}></View>
                </View>
                <View
                    style={{
                        width: "90%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: hp("2%"),
                    }}>
                    <Text
                        style={{
                            color: colors.text,
                            fontSize: wp(3.5),
                        }}>
                        XP 738/850
                    </Text>
                    <Text
                        style={{
                            color: colors.text,
                            fontSize: wp(3.5),
                        }}>
                        112 To Level Up
                    </Text>
                </View>
                <View
                    style={{
                        height: hp("0.1%"),
                        width: wp("93%"),
                        backgroundColor: "#ddd",
                        marginTop: hp("2.5%"),
                    }}></View>
                <View
                    style={{
                        marginTop: hp("2%"),
                        flexDirection: "row",
                        alignSelf: "flex-start",
                        paddingLeft: wp("4%"),
                    }}>
                    <Text
                        style={{
                            fontSize: wp("4%"),
                            fontWeight: "bold",
                            color: colors.text,
                        }}>
                        Badges
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: hp("2%"),
                        alignSelf: "flex-start",
                        justifyContent: "space-around",
                    }}>
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: wp("3.5%"),
                        }}>
                        <Image
                            source={require("./assets/badge2-removebg-preview.png")}
                            style={{
                                width: wp("18%"),
                                height: hp("10%"),
                                borderRadius: wp("2%"),
                            }}
                        />
                        <Text
                            style={{
                                fontSize: wp("3%"),
                                color: colors.text,
                                fontWeight: "bold",
                                paddingTop: hp("1%"),
                            }}>
                            Steady Ship
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: wp("3.5%"),
                        }}>
                        <Image
                            source={require("./assets/badge3-removebg-preview.png")}
                            style={{
                                width: wp("20%"),
                                height: hp("10%"),
                                borderRadius: wp("2%"),
                            }}
                        />
                        <Text
                            style={{
                                fontSize: wp("3%"),
                                color: colors.text,
                                fontWeight: "bold",
                                paddingTop: hp("1%"),
                            }}>
                            Daredevil
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: wp("3.5%"),
                        }}>
                        <Image
                            source={require("./assets/badge1-removebg-preview.png")}
                            style={{
                                width: wp("18%"),
                                height: hp("10%"),
                                borderRadius: wp("2%"),
                            }}
                        />
                        <Text
                            style={{
                                fontSize: wp("3%"),
                                color: colors.text,
                                fontWeight: "bold",
                                paddingTop: hp("1%"),
                            }}>
                            Enjoyer
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 0.05 * Dimensions.get("window").width,
        paddingTop: 0.08 * Dimensions.get("window").height,
        paddingBottom: 0.02 * Dimensions.get("window").height,
    },
    title: {
        fontSize: 0.06 * Dimensions.get("window").width,
        fontWeight: "bold",
        color: colors.text,
    },
    title2: {
        fontSize: 0.053 * Dimensions.get("window").width,
        fontWeight: "bold",
        color: colors.text,
    },
    rank: {
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
    },
    line: {
        height: "90%",
        width: 1,
        backgroundColor: "#ddd",
        marginHorizontal: wp("3%"),
    },
});

export default ProfilePage;

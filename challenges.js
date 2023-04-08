import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import SearchBar from "./searchBar";
import colors from "./colors.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChallengeCard from "./challengeCard";

const ChallengesPage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const cardWidth = windowWidth * 0.4;
    const cardHeight = windowHeight * 0.2;

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Challenges</Text>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Ongoing Challenges</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginHorizontal: wp(2),
                    }}>
                    <TouchableOpacity onPress={() => alert("Modal")}>
                        <ImageBackground
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                            source={require("./assets/jonhjohn.jpg")}
                            style={styles.x}>
                            <View
                                style={{
                                    width: "60%",
                                    paddingVertical: wp(1),
                                    backgroundColor: colors.background,
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    borderRadius: 10000,
                                    flexDirection: "row",
                                    marginBottom: wp(2),
                                }}>
                                <AntDesign
                                    name="clockcircleo"
                                    size={wp(4)}
                                    color={colors.text}
                                />

                                <Text
                                    style={{
                                        color: colors.text,
                                        fontSize: wp(3.5),
                                    }}>
                                    8:10:15
                                </Text>
                            </View>

                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Galactic
                            </Text>
                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Gourmet
                            </Text>

                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Challenge
                            </Text>

                            {/* </View> */}
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ width: wp(3) }} />

                    <ImageBackground
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 8 }}
                        source={require("./assets/kap.jpg")}
                        style={styles.x}>
                        <View
                            style={{
                                width: "60%",
                                paddingVertical: wp(1),
                                backgroundColor: colors.background,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                borderRadius: 10000,
                                flexDirection: "row",
                                marginBottom: wp(2),
                            }}>
                            <AntDesign
                                name="clockcircleo"
                                size={wp(4)}
                                color={colors.text}
                            />

                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: wp(3.5),
                                }}>
                                15:11:02
                            </Text>
                        </View>

                        <Text style={[styles.cardTitle, { fontSize: wp(5) }]}>
                            Taste Trek
                        </Text>
                        <Text style={[styles.cardTitle, { fontSize: wp(5) }]}>
                            Challenge
                        </Text>
                        {/* </View> */}
                    </ImageBackground>
                    <View style={{ width: wp(3) }} />

                    <ImageBackground
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 8 }}
                        source={require("./assets/jonhjohn.jpg")}
                        style={styles.x}>
                        <View
                            style={{
                                width: "60%",
                                paddingVertical: wp(1),
                                backgroundColor: colors.background,
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                borderRadius: 10000,
                                flexDirection: "row",
                                marginBottom: wp(2),
                            }}>
                            <AntDesign
                                name="clockcircleo"
                                size={wp(4)}
                                color={colors.text}
                            />

                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: wp(3.5),
                                }}>
                                2:10:04
                            </Text>
                        </View>

                        <Text style={[styles.cardTitle, { fontSize: wp(5) }]}>
                            Healthy habits
                        </Text>
                        <Text style={[styles.cardTitle, { fontSize: wp(5) }]}>
                            Challenge
                        </Text>
                        {/* </View> */}
                    </ImageBackground>
                </ScrollView>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Suggested</Text>
                <View>
                    <ChallengeCard
                        title="Taste Trek Challenge"
                        subtitle="2st Place Nationally"
                    />
                    <ChallengeCard
                        title="Healthy Habits Challenge"
                        subtitle="10th Place Nationally"
                    />
                </View>
            </View>
            {/* <View
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "red",
                    zIndex: 1000,
                }}></View> */}
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 0.05 * Dimensions.get("window").width,
        paddingTop: 0.07 * Dimensions.get("window").height,
        paddingBottom: 0.02 * Dimensions.get("window").height,
    },
    title: {
        fontSize: 0.06 * Dimensions.get("window").width,
        fontWeight: "bold",
        color: colors.text,
    },
    x: {
        width: wp(43),
        aspectRatio: 0.92,
        // backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: wp(3),
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    dailyMissions: {
        width: wp(90),
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: wp(0.02),
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.secondary,
        borderRadius: 0.02 * Dimensions.get("window").height,
        paddingHorizontal: 0.0 * Dimensions.get("window").width,
        paddingVertical: 0.015 * Dimensions.get("window").height,
        marginTop: 0.04 * Dimensions.get("window").height,
    },
    searchText: {
        marginRight: 0.02 * Dimensions.get("window").width,
        fontSize: 0.04 * Dimensions.get("window").width,
        color: colors.text,
    },
    searchBar: {
        flex: 1,
        fontSize: 0.07 * Dimensions.get("window").width,
    },

    cardContainer: {
        paddingHorizontal: 16,
        paddingVertical: 0,
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: colors.text,
        marginTop: 0.06 * Dimensions.get("window").width,
    },
    card: {
        width: 200,
        height: 150,
        borderRadius: 8,
        backgroundColor: colors.secondary,
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.text,
    },
});

export default ChallengesPage;

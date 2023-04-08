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
import Card from "./card";

const HomePage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const cardWidth = windowWidth * 0.4;
    const cardHeight = windowHeight * 0.2;

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Welcome, Apo</Text>
                <TouchableOpacity
                    style={styles.bell}
                    onPress={() => alert("Notifications")}>
                    <MaterialCommunityIcons
                        name="bell-outline"
                        size={wp(7)}
                        color={colors.text}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>
                    Weekly Challenge{" "}
                    <AntDesign name="right" size={wp(4)} color={colors.text} />
                </Text>
                {/* <View style={[styles.weeklyChallenges]}> */}
                <ImageBackground
                    resizeMode="cover"
                    imageStyle={{ borderRadius: 8 }}
                    source={require("./assets/jonhjohn.jpg")}
                    style={styles.weeklyChallenges}>
                    <View
                        style={{
                            width: "30%",
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

                        <Text style={{ color: colors.text, fontSize: wp(3.5) }}>
                            12:10:01
                        </Text>
                    </View>

                    <Text style={[styles.cardTitle, { fontSize: wp(5) }]}>
                        Become a
                    </Text>
                    <Text style={[styles.cardTitle, { fontSize: wp(5) }]}>
                        Galactic Critic
                    </Text>
                    {/* </View> */}
                </ImageBackground>
            </View>

            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Daily Misions </Text>
                <View style={[styles.dailyMissions]}>
                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10000,
                            flexDirection: "column",
                            marginBottom: wp(2),
                            paddingVertical: wp(2),
                        }}>
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: wp(3.5),
                                }}>
                                Post 2 Reviews
                            </Text>
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: wp(3.5),
                                }}>
                                <MaterialCommunityIcons
                                    name="diamond-outline"
                                    size={wp(3)}
                                    color={colors.text}
                                />{" "}
                                10
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
                                    width: "50%",
                                    height: wp(3),
                                    backgroundColor: "#7F6CFF",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderRadius: 10000,
                                    justifyContent: "space-between",
                                }}></View>
                        </View>
                    </View>
                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10000,
                            flexDirection: "column",
                            marginBottom: wp(2),
                            paddingVertical: wp(2),
                        }}>
                        <View
                            style={{
                                width: "90%",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: wp(3.5),
                                }}>
                                Refer 5 friends
                            </Text>
                            <Text
                                style={{
                                    color: colors.text,
                                    fontSize: wp(3.5),
                                }}>
                                <MaterialCommunityIcons
                                    name="diamond-outline"
                                    size={wp(3)}
                                    color={colors.text}
                                />{" "}
                                30
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
                    </View>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Cooking near you now</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {/* Replace the following placeholders with your own cards */}
                    {/* <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 1</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 2</Text>
                    </View>
                    <View
                        style={[
                            styles.card,
                            { width: cardWidth, height: cardHeight },
                        ]}>
                        <Text style={styles.cardTitle}>Card 3</Text>
                    </View> */}
                    <Card
                        imageSource={require("./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")}
                        icon={require("./assets/1-removebg-preview.png")}
                        title="Mary Jones - 20 Mins"
                        subtitle="Galactic Cook"
                    />
                    <Card
                        imageSource={require("./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg")}
                        icon={require("./assets/2-removebg-preview.png")}
                        title="Jose Black - 15 Mins"
                        subtitle="Galactic Cook"
                    />
                </ScrollView>
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
    weeklyChallenges: {
        width: wp(90),
        aspectRatio: 2.5,
        // backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: wp(0.02),
        flexDirection: "column",
        justifyContent: "center",
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

export default HomePage;

import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";
import colors from "../colors.json";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChallengeCard from "../components/challengeCard";

const ChallengesPage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const [modalVisible, setModalVisible] = useState(false);
    const [initialModalVisible, setInitialModalVisible] = useState(false);

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
                    <TouchableOpacity
                        onPress={() => setInitialModalVisible(true)}>
                        <ImageBackground
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                            source={require("../../assets/jonhjohn.jpg")}
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
                    <TouchableOpacity
                        onPress={() => setInitialModalVisible(true)}>
                        <ImageBackground
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                            source={require("../../assets/kap.jpg")}
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

                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Taste Trek
                            </Text>
                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Challenge
                            </Text>
                            {/* </View> */}
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{ width: wp(3) }} />
                    <TouchableOpacity
                        onPress={() => setInitialModalVisible(true)}>
                        <ImageBackground
                            resizeMode="cover"
                            imageStyle={{ borderRadius: 8 }}
                            source={require("../../assets/jonhjohn.jpg")}
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

                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Healthy habits
                            </Text>
                            <Text
                                style={[styles.cardTitle, { fontSize: wp(5) }]}>
                                Challenge
                            </Text>
                            {/* </View> */}
                        </ImageBackground>
                    </TouchableOpacity>
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

            {initialModalVisible && (
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: colors.background,
                        zIndex: 1000,
                    }}>
                    <View
                        style={[
                            styles.topBar,
                            { justifyContent: "flex-start" },
                        ]}>
                        <TouchableOpacity
                            onPress={() => setInitialModalVisible(false)}>
                            <AntDesign
                                name="left"
                                size={wp(6)}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.title, { marginLeft: wp(3) }]}>
                            Galactic Gourmet
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginTop: wp(5),
                            marginLeft: wp(5),
                            color: "#848484",
                            fontSize: wp(4.5),
                        }}>
                        Description
                    </Text>
                    <Text
                        style={{
                            marginTop: wp(2),
                            marginLeft: wp(5),
                            color: "#fff",
                            fontSize: wp(4.5),
                        }}>
                        Explore new cuisines and flavors by ordering plates you
                        have never tried before.
                    </Text>
                    <View style={{ height: wp(1) }} />
                    <Text
                        style={{
                            marginTop: wp(5),
                            marginLeft: wp(5),
                            color: "#848484",
                            fontSize: wp(4.5),
                        }}>
                        Competition Status
                    </Text>
                    <Text
                        style={{
                            marginTop: wp(2),
                            marginLeft: wp(5),
                            color: "#fff",
                            fontSize: wp(4.5),
                        }}>
                        Active
                    </Text>
                    <View style={{ height: wp(1) }} />
                    <Text
                        style={{
                            marginTop: wp(5),
                            marginLeft: wp(5),
                            color: "#848484",
                            fontSize: wp(4.5),
                        }}>
                        End Date
                    </Text>
                    <Text
                        style={{
                            marginTop: wp(2),
                            marginLeft: wp(5),
                            color: "#fff",
                            fontSize: wp(4.5),
                        }}>
                        3rd May 2023
                    </Text>
                    <View style={{ height: wp(1) }} />
                    <Text
                        style={{
                            marginTop: wp(5),
                            marginLeft: wp(5),
                            color: "#848484",
                            fontSize: wp(4.5),
                        }}>
                        Reward
                    </Text>
                    <Text
                        style={{
                            marginTop: wp(2),
                            marginLeft: wp(5),
                            color: "#fff",
                            fontSize: wp(4.5),
                        }}>
                        30 Diamonds
                    </Text>
                    <View style={{ height: wp(1) }} />
                    <Text
                        style={{
                            marginTop: wp(5),
                            marginLeft: wp(5),
                            color: "#848484",
                            fontSize: wp(4.5),
                        }}>
                        Participants
                    </Text>
                    <Text
                        style={{
                            marginTop: wp(2),
                            marginLeft: wp(5),
                            color: "#fff",
                            fontSize: wp(4.5),
                        }}>
                        300+
                    </Text>
                    <View style={{ height: wp(1) }} />
                    <Text
                        style={{
                            marginTop: wp(5),
                            marginLeft: wp(5),
                            color: "#848484",
                            fontSize: wp(4.5),
                        }}>
                        Your Progress
                    </Text>
                    <Text
                        style={{
                            marginTop: wp(2),
                            marginLeft: wp(5),
                            color: "#fff",
                            fontSize: wp(4.5),
                        }}>
                        15 Unique Orders
                    </Text>
                    <View style={{ height: wp(1) }} />
                    <View
                        style={{
                            height: 1,
                            width: wp(90),
                            backgroundColor: "#7D7D7D",
                            marginTop: wp(5),
                            alignSelf: "center",
                        }}
                    />
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View
                            style={{
                                backgroundColor: "#3A71F31E",
                                padding: wp(3),
                                width: wp("50%"),
                                // height: hp("4%"),
                                borderRadius: wp("2%"),
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: hp("2%"),
                                marginLeft: wp(5),
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            <Text style={{ color: "#3D8AFF", fontSize: wp(4) }}>
                                Challenge Leaderboard
                            </Text>
                            <AntDesign
                                name="right"
                                size={wp(5)}
                                color={"#3D8AFF"}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            {modalVisible && (
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: colors.background,
                        zIndex: 1020,
                    }}>
                    <View
                        style={[
                            styles.topBar,
                            { justifyContent: "flex-start" },
                        ]}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}>
                            <AntDesign
                                name="left"
                                size={wp(6)}
                                color={colors.text}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.title, { marginLeft: wp(3) }]}>
                            Leaderboard
                        </Text>
                    </View>
                    <View
                        style={{
                            width: wp(90),
                            height: hp(30),
                            alignSelf: "center",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}>
                        <View
                            style={{
                                width: "28%",
                                height: "100%",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}>
                            <Image
                                source={require("../../assets/1-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(13) }}
                            />
                            <Text
                                style={{
                                    fontSize: wp(3),
                                    color: colors.text,
                                    marginBottom: 7,
                                }}>
                                Nick Marcus
                            </Text>

                            <View
                                style={{
                                    width: "90%",
                                    height: "40%",
                                    backgroundColor: "#757096",
                                    borderRadius: wp(1),
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Text
                                    style={{
                                        fontSize: wp(5),
                                        color: colors.text,
                                        marginBottom: 2,
                                    }}>
                                    2
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: "28%",
                                height: "100%",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}>
                            <Image
                                source={require("../../assets/2-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(13) }}
                            />
                            <Text
                                style={{
                                    fontSize: wp(3),
                                    color: colors.text,
                                    marginBottom: 7,
                                }}>
                                Rena Black
                            </Text>

                            <View
                                style={{
                                    width: "90%",
                                    height: "60%",
                                    backgroundColor: "#757096",
                                    borderRadius: wp(1),
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Text
                                    style={{
                                        fontSize: wp(5),
                                        color: colors.text,
                                        marginBottom: 2,
                                    }}>
                                    1
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: "28%",
                                height: "100%",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}>
                            <Image
                                source={require("../../assets/3-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(13) }}
                            />
                            <Text
                                style={{
                                    fontSize: wp(3),
                                    color: colors.text,
                                    marginBottom: 7,
                                }}>
                                Phil Jones
                            </Text>

                            <View
                                style={{
                                    width: "90%",
                                    height: "20%",
                                    backgroundColor: "#757096",
                                    borderRadius: wp(1),
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Text
                                    style={{
                                        fontSize: wp(5),
                                        color: colors.text,
                                        marginBottom: 2,
                                    }}>
                                    3
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.heading}>My Ranking</Text>
                        <View
                            style={{
                                width: wp(90),
                                paddingVertical: wp(2),
                                backgroundColor: "#252A35",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: 8,
                                borderRadius: wp(1),
                            }}>
                            <Text style={{ color: "white" }}>17th Place</Text>
                            <Image
                                source={require("../../assets/1-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(10), width: wp(12) }}
                            />

                            <Text style={{ color: "white" }}>
                                Iliadis Viktor
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <Text style={styles.heading}>Global Ranking</Text>
                        <View
                            style={{
                                width: wp(90),
                                paddingVertical: wp(2),
                                backgroundColor: "#252A35",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: 8,
                                borderRadius: wp(1),
                                marginTop: 10,
                            }}>
                            <Text style={{ color: "white" }}>1st Place</Text>
                            <Image
                                source={require("../../assets/1-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(10), width: wp(12) }}
                            />

                            <Text style={{ color: "white" }}>Rena Black</Text>
                        </View>
                        <View
                            style={{
                                width: wp(90),
                                paddingVertical: wp(2),
                                backgroundColor: "#252A35",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: 8,
                                borderRadius: wp(1),
                                marginTop: 10,
                            }}>
                            <Text style={{ color: "white" }}>2nd Place</Text>
                            <Image
                                source={require("../../assets/1-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(10), width: wp(12) }}
                            />

                            <Text style={{ color: "white" }}>Nick Marcus</Text>
                        </View>

                        <View
                            style={{
                                width: wp(90),
                                paddingVertical: wp(2),
                                backgroundColor: "#252A35",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: 8,
                                borderRadius: wp(1),
                                marginTop: 10,
                            }}>
                            <Text style={{ color: "white" }}>3rd Place</Text>
                            <Image
                                source={require("../../assets/1-removebg-preview.png")}
                                resizeMode={"contain"}
                                style={{ height: wp(10), width: wp(12) }}
                            />

                            <Text style={{ color: "white" }}>Phil Jones</Text>
                        </View>
                    </View>
                </View>
            )}
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
        fontSize: wp(6),
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
    t: {
        fontSize: wp(3),
        fontWeight: "bold",
        color: "white",
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

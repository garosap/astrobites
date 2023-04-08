import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import colors from "./colors.json";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const cardWidth = windowWidth * 0.9;
const cardHeight = windowHeight * 0.07;

const ChallengeCard = ({ icon, title, subtitle, date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    {title}:{" "}
                    <Text style={[styles.title, { fontWeight: "normal" }]}>
                        {subtitle}
                    </Text>
                </Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#3A71F31E",
                        paddingVertical: wp(1.5),
                        paddingHorizontal: wp(2.5),
                        borderRadius: wp(1.5),
                    }}
                    onPress={() => {
                        alert("Collected!");
                    }}>
                    <Text style={{ color: "#3A71F3", fontSize: wp(3) }}>
                        Collect
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: cardHeight,
        borderRadius: 8,
        backgroundColor: colors.secondary,
        padding: wp("2%"),
        marginVertical: wp("1%"),
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    },
    contentContainerGen: {
        flex: 1,
        flexDirection: "column",
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconContainer: {
        width: wp("11%"),
        height: wp("11%"),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: wp("1%"),
    },
    infoContainer: {
        flex: 1,
        fontSize: 6,
        justifyContent: "center",
        alignContent: "center",
        paddingLeft: wp("1%"),
    },
    title: {
        fontSize: wp(3),
        fontWeight: "bold",
        color: "white",
    },
    date: {
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
        paddingLeft: wp("6%"),
        paddingRight: wp("4%"),
    },
    subtitle: {
        fontSize: 10,
        color: "#666",
    },
    line: {
        height: "70%",
        width: 1,
        backgroundColor: "#ddd",
        marginHorizontal: wp("2%"),
    },
});

export default ChallengeCard;

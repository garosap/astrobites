import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import colors from "./colors.json";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const cardWidth = windowWidth * 0.5;
const cardHeight = windowHeight * 0.21;

const Card = ({ imageSource, icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.iconContainer}>
                    <Image source={icon} style={styles.image} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 8,
        backgroundColor: colors.secondary,
        marginRight: 12,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",

        borderRadius: 8,
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    iconContainer: {
        width: wp(14),
        height: wp(14),
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    infoContainer: {
        flex: 1,
        fontSize: 6,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
    },
    subtitle: {
        fontSize: 10,
        color: "#666",
    },
});

export default Card;

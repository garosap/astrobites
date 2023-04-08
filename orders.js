import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
} from "react-native";
import SearchBar from "./searchBar";
import colors from "./colors.json";
import ScheduledCard from "./scheduledCard";
import SuggestedCook from "./suggestedCook";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OrdersPage = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.title}>Orders</Text>
                <Text style={styles.title2}>Athens, Chalandri</Text>
            </View>
            
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Explore</Text>
                <SearchBar placeholder="Search Cooks, Dishes and other" />
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.heading}>Suggested</Text>
                <View>
                    <SuggestedCook icon={require("./assets/1-removebg-preview.png")} title="Iliadis Viktor, 32 Level " subtitle="Galactic Cook" date="Last Order Nov 20"/>
                    <SuggestedCook icon={require("./assets/1-removebg-preview.png")} title="Maria Garos, 23 Level " subtitle="Galactic Cook" date="Last Order Nov 24"/>
                    <SuggestedCook icon={require("./assets/1-removebg-preview.png")} title="Nick Vlach, 120 Level " subtitle="Interstellar Chef" date="Last Order Nov "/>

                </View>
                <Text style={styles.heading}>Scheduled</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    
                    <ScheduledCard imageSource={require("./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")} icon={require("./assets/1-removebg-preview.png")} title="Iliadis Viktor - 20 Mins" subtitle="Galactic Cook" date="20 November 2:30 PM " />
                    <ScheduledCard imageSource={require("./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg")} icon={require("./assets/4-removebg-preview.png")} title="Iliadis Viktor - 20 Mins" subtitle="Galactic Cook" date="20 November 2:30 PM "/>
                    <ScheduledCard imageSource={require("./assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg")} icon={require("./assets/1-removebg-preview.png")} title="Iliadis Viktor - 20 Mins" subtitle="Galactic Cook" date="20 November 2:30 PM "/>

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
        flexDirection: "column",
        justifyContent: "start",
        paddingHorizontal: 0.05 * Dimensions.get("window").width,
        paddingTop: 0.07 * Dimensions.get("window").height,
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
        marginTop: wp('4%')
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
        color: colors.text,
        marginTop: 0.03 * Dimensions.get("window").width,
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

export default OrdersPage;
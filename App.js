import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./TabNavigation";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "./colors.json";
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TabNavigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        // alignItems: "center",
        // justifyContent: "center",
    },
});

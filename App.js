import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import TabNavigation from "./TabNavigation";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "./colors.json";

export default function App() {
    const [signinVariable, setSigninVariable] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Dummy user object
    const user = {
        username: "user",
        password: "123",
    };

    const handleSignin = (username, password) => {
        //Dummy authentication logic
        if (username === user.username && password === user.password) {
            setSigninVariable(true);
        } else {
            alert("Invalid username or password");
        }
    };

    if (!signinVariable) {
        //Render the login screen if signinVariable is false
        return (
            <ImageBackground source={require('./assets/Splash_Screen_new.png')} style={styles.containerApp}>
                <StatusBar style="light" />

                <Text style={{color:colors.text,marginBottom:wp('5%'),fontWeight:'bold',fontSize:wp('6%'),alignSelf:'flex-start',paddingLeft:wp('13%')}}>Sign In</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                        placeholderTextColor={colors.text}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        placeholderTextColor={colors.text}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleSignin(username, password)}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    } else {
        //Render the TabNavigation component if signinVariable is true
        return (
            <View style={styles.containerMain}>
                <StatusBar style="light" />
                <TabNavigation />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerApp: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    containerMain: {
        flex: 1,
        backgroundColor: colors.background,
    },
    inputContainer: {
        width: wp("80%"),
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: hp("2%"),
        paddingHorizontal: wp("4%"),
        paddingVertical: hp("1%"),
    },
    input: {
        width: wp("80%"),
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hp("0.8%"),
        color: colors.text,        
    },
    button: {
        width: wp("80%"),
        borderRadius: 8,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: wp("4%"),
        paddingVertical: hp("1%"),
    },
    buttonText: {
        color: "#fff",
        fontSize: hp("2%"),
    },
});

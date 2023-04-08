import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "./colors.json";
const SearchBar = ({ placeholder, onChangeText }) => {
    const [text, setText] = useState("");

    const handleTextChange = (value) => {
        setText(value);
        onChangeText && onChangeText(value);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.text}
                value={text}
                onChangeText={handleTextChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 5,
    },
    input: {
        padding: 10,
        color: colors.text,
    },
});

export default SearchBar;

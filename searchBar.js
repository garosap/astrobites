import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import colors from "./colors.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SearchBar = ({ placeholder }) => {
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
    onChangeText && onChangeText(value);
  };

  return (
    <View style={styles.container}>
   
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="magnify" color={colors.text} size={20} />
        </View>
 
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    color: colors.text,
    flex: 1
  },
  iconContainer: {
    marginRight: 10
  },
  icon: {
    width: 20,
    height: 20
  }
});

export default SearchBar;

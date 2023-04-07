import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ placeholder, onChangeText }) => {
  const [text, setText] = useState('');

  const handleTextChange = (value) => {
    setText(value);
    onChangeText && onChangeText(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={text}
        onChangeText={handleTextChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  input: {
    padding: 10,
  },
});

export default SearchBar;

import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Icon, {Icons} from './Icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = ({ onBackPress, onSearchPress, category }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/back.png" }} style={{ width: 27, height: 27 }} />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder={"Search " + category}
        placeholderTextColor="#888"
      />

      <TouchableOpacity onPress={onSearchPress}>

        <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/search.png" }} style={{ width: 27, height: 27, }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    // paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 10,
    elevation: 3,
    // padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: 15
  },
});

export default SearchBar;

import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import colors from "../colors.json";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const cardWidth = windowWidth * 0.9;
const cardHeight = windowHeight * 0.07;

const SuggestedCook = ({icon, title, subtitle, date }) => {
    
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>   
        <View style={styles.iconContainer}>
            <Image source={icon}  style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.line} />
        <View>
            <Text style={styles.date}>{date}</Text>
        </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: cardHeight,
    borderRadius: 8,
    backgroundColor: colors.secondary,
    padding:wp('2%'),
    marginVertical:wp('1%'),
    
},
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  contentContainerGen: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  iconContainer: {
    width: wp('11%'),
    height: wp('11%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:wp('1%'),
  },
  infoContainer: {
    flex: 1,
    fontSize: 6,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft:wp('1%'),
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft:wp('6%'),
    paddingRight:wp('4%'),
  },
  subtitle: {
    fontSize: 10,
    color: '#666',
  },
  line: {
    height: '70%',
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: wp('2%'),
  },
});

export default SuggestedCook;

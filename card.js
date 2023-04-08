import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ imageSource, icon, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.info}>
        <View style={styles.icon}>
          {icon}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 200,
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    backgroundColor: '#f1f1f1',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default Card;

import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';

interface ICharacter {
  name: string,
  alterEgo: string,
  imagePath: string
}

const Card: React.FC<ICharacter> = ({ name, alterEgo, imagePath }) => {
  return (
    <View style={styles.container }>
      <Image
        source={{ uri: `https://mobile-marvel-backend-v1.herokuapp.com/${imagePath}`}}
        style={styles.image}
      />
      <Text style={styles.alterEgo}>{alterEgo}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 210,
    borderRadius: 15,
    marginRight: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  image: {
    width: 120,
    height: 210,
    borderRadius: 15,
  },
  alterEgo: {
    fontWeight: '600',
    fontSize: 10,
    color: "#FFFFFF",
    opacity: 0.75,

    position: "absolute",
    left: 14,
    bottom: 45,
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    color: "#FFFFFF",

    flexShrink: 1,

    position: "absolute",
    left: 14,
    bottom: 0,
  },
})
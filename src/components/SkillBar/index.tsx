import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ISkillBar {
  value: number;
}

const SkillBar: React.FC<ISkillBar> =({ value }) => {
  return (
    <View style={styles.progressContent}>
      {new Array(43).fill("").map((p, index) => {
        const power = value * 0.4;
        const type = index <= power;
        
        if(index === power) {
          return <View style={styles.progressStrong} />;
        } else {
          return (
            <View 
              style={
                type ? styles.progressWeackBefore : styles.progressWeackAfter
              }
              />
          );
        }
      })} 
    </View>
  )
}

export default SkillBar;

const styles = StyleSheet.create({
  progress: {
    color: "#fff",
    letterSpacing: 5
  },
  progressWeackBefore: {
    width: 1,
    height: 15,
    backgroundColor: "white"
  },
  progressWeackAfter: {
    width: 2,
    height: 20,
    backgroundColor: "gray"
  },
  progressStrong: {
    width: 2,
    height: 20,
    backgroundColor: "white",
  },
  progressContent: {
    width: '78%',
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent:"space-between"
  },
});
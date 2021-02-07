import React from 'react';
import Constants from 'expo-constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import SkillBar from '../../components/SkillBar/index';

import Back from '../../../assets/icons/back.svg';
import Age from '../../../assets/icons/age.svg';
import Weight from '../../../assets/icons/weight.svg';
import Height from '../../../assets/icons/height.svg';
import Universe from '../../../assets/icons/universe.svg';

interface IParams {
  character: {
    name: string;
    alterEgo: string;
    imagePath: string;
    biography: string;
    caracteristics: {
      birth: number;
      weight: {
        value: number;
        unity: string;
      };
      height: {
        value: number;
        unity: string;
      };
      universe: string;
    };
    abilities: {
      force: number;
      intelligence: number;
      agility: number;
      endurance: number;
      veloctity: number;
    };
    movies: string[];
  }
}

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as IParams;

  const { character } = routeParams;


  return (
    <ImageBackground
      source={{ uri: `https://mobile-marvel-backend-v1.herokuapp.com/${character.imagePath}`}}
      style={styles.container}
    >
      <LinearGradient
        colors={["transparent", "#000"]}
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "140%",
          },
          styles.container,
        ]}
      ></LinearGradient>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>

        <View style={styles.heroContainer}>
          <Text style={styles.alterEgo}>{character.alterEgo}</Text>
          <Text style={styles.name}>{character.name}</Text>
        </View>

        <View style={styles.characteristics}>
          <View style={styles.characteristicsContent}>
            <Age />
            <Text style={styles.characteristicsText}>
              {
                `${ new Date().getFullYear() - character.caracteristics.birth} anos`
              }
            </Text>
          </View>

          <View style={styles.characteristicsContent}>
            <Weight />
            <Text style={styles.characteristicsText}>
              {character.caracteristics.weight.value}
              {character.caracteristics.weight.unity}
            </Text>
          </View>

          <View style={styles.characteristicsContent}> 
            <Height />
            <Text style={styles.characteristicsText}>
              {character.caracteristics.weight.value}
              {character.caracteristics.weight.unity[0]}
            </Text>
          </View>

          <View style={styles.characteristicsContent}>
            <Universe />
            <Text style={styles.characteristicsText}>
              {character.caracteristics.universe}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.biographyText}>
            {character.biography}
          </Text>
        </View>

        <View style={styles.abilities}>
          <Text style={styles.abilitiesTitle}>
              Habilidades
          </Text>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Força</Text>
            <SkillBar value={character.abilities.force} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Inteligência</Text>
            <SkillBar value={character.abilities.intelligence} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Agilidade</Text>
            <SkillBar value={character.abilities.agility} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Resistência</Text>
            <SkillBar value={character.abilities.endurance} />
          </View>
          <View style={styles.abilitiesContent}>
            <Text style={styles.abilitiesText}>Velocidade</Text>
            <SkillBar value={character.abilities.veloctity} />
          </View>
        </View>

        <View style={styles.movies}>
          <Text style={styles.abilitiesTitle}>Filmes</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {character.movies.map((movie) => (
              <View key={movie} style={{ marginRight: 10 }}>
                <Image
                  source={{
                    uri: `https://mobile-marvel-backend-v1.herokuapp.com/${movie}`
                  }}
                  style={styles.image}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  heroContainer: {
    marginTop: 252
  },
  alterEgo: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.75,
    left: 14
  },
  name: {
    fontSize: 40,
    color: '#fff',
    flexShrink: 1,
    left: 14,
    width: 180,
  },
  characteristics: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  characteristicsContent: {
    width: 60,
    height: 48,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  characteristicsText: {
    fontSize: 12,
    color: '#fff'
  },
  biographyText: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.75,
  },
  abilities: {
    marginTop: 15,
    marginBottom: 15
  },
  abilitiesTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 15
  },
  abilitiesText: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.75,
    width: 80,
  },
  abilitiesContent: {
    marginBottom: 15,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  movies: {
    marginTop: 15,
    marginBottom: 15
  },
  image: {
    width: 120,
    height: 210,
    borderRadius: 15
  },
});

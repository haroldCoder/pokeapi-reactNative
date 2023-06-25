import { Alert, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import CardMain from './components/CardMain';

export interface pokemon{
  name: string,
  sprites: {
    back_default: string
  }
}

export default function App() {
  const [pokedata, setPokedata] = useState<Array<pokemon>>([]);

  useEffect(() => {
    getPokeApi();
  }, []);

  const getPokeApi = async () => {
    const res1 = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data;
    const len = res1.results.length;
    const pokemonData = [];

    for (let i = 1; i <= len; i++) {
      const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemonData.push(res2.data);
    }

    setPokedata(pokemonData);
    console.log(pokemonData[0].name);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "#000", height: '100%', paddingTop: 5, padding: 20 }}>
            <Text style={{ color: "#FFFF00", fontSize: 20 }}>PokeApi</Text>
            <View style={{marginTop: 16}}>
            {
              pokedata.length > 0 ? (
                pokedata.map((data: pokemon, index: any) => (
                  <CardMain key={data.name} name={data.name} sprites={data.sprites} />
                ))
              ) : (
                <Text style={{ color: "#FFF" }}>No hay datos disponibles</Text>
              )
            }
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1
  },
});

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function BuscaPersonagem() {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterData();
  }, []);

  const fetchCharacterData = async () => {
    try {
      const randomNumber = getRandomNumber(1, 30);
      const response = await fetch(`https://swapi.dev/api/people/${randomNumber}/`);
      const data = await response.json();
      setCharacter(data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixaExt}>
        <View style={styles.caixa}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            character && (
              <View>
                <Text style={styles.title}>Informações do Personagem:</Text>
                <Text>Nome: {character.name}</Text>
                <Text>Altura: {character.height}</Text>
                <Text>Peso: {character.mass}</Text>
                <Text>***Powered by SWAPI***</Text>
              </View>
            )
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixaExt: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', //branco
    padding: 5,
  },
  caixa: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700', //amarelo
    borderWidth: 5,
    borderColor: '#ddd',
    borderRadius: 1,
    padding: 5,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BuscaPersonagem;

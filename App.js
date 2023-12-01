import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BuscaPersonagem from './src/components/BuscaPersonagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo, que a força esteja com você!</Text>
      <BuscaPersonagem />
      <BuscaPersonagem />
      <BuscaPersonagem />
      <BuscaPersonagem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: "#fff",
    padding: 50,
    fontSize: 24,
    fontStyle: 'bold',
    fontFamily: 'arial',
  }
});

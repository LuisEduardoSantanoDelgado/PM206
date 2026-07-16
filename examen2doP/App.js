import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TarjetaMascota } from './components/TarjetaMascota';
import { splash } from  './screens/splash';

import { splash } from  './screens/modal';
import { splash } from  './screens/';

export default function App() {
  return (
    <View style={styles.container}>
      <TarjetaMascota nombre="Titi" especie="Perro" edad="3 años" />
      <TarjetaMascota nombre="Titi" especie="Perro" edad="3 años" />
      <TarjetaMascota nombre="Titi" especie="Perro" edad="3 años" />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f7fb',
    padding: 24,
  },
  title: {
    color: '#172033',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#4b587c',
    fontSize: 16,
    textAlign: 'center',
  },
});

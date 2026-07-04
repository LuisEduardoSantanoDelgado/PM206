/* Zona 1: Importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CatalogoLibrosScreen from './screens/CatalogoLibrosScreen';

/* Zona 2: Main - Hogar de los componentes */

export default function App() {
  return (
    <View style={styles.container}>
      <CatalogoLibrosScreen />
      <StatusBar style="light" />
    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1432',
  },
});

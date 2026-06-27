/* Zona 1: Importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegistroEventoScreen from './screens/RegistroEventoScreen';

/* Zona 2: Main - Hogar de los componentes */

export default function App() {
  return (
    <View style={styles.container}>
      <RegistroEventoScreen />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5ff',
  },
});

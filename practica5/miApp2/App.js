/* Zona 1: Importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Salu2 } from './components/Salu2';
import { Perfil } from './components/Perfil';

/* Zona 2: Main - Hogar de los componentes */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>--------------Componente nativo--------------</Text>

      <Text>Hola Mundo</Text>

      <Image
        source={require('./assets/wave.png')}
        style={styles.image}
      />

      <Text>--------------Componente simple--------------</Text>
      <Saludo />

      <Text>--------------Componente propio--------------</Text>
      <Salu2 />

      <Text>--------------Perfil--------------</Text>
      <Perfil />

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Estilos y posicionamiento */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
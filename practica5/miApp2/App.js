/* Zona 1: Importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Salu2} from './components/Salu2';                

/* Zona 2: Main - Hogar de los componentes */

export default function App() {
  return (
    <View style={styles.container}>

      <Text>--------------Componentea nativos--------------</Text>
      <Text>Hola Mundo</Text>
      <Image source={require('./assets/wave.png')}/>

      <Text>--------------Componente simple--------------</Text>

      <Saludo />

       <Text>--------------Componente Propio--------------</Text>

      <Salu2 />

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
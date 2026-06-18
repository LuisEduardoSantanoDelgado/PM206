/* Zona 1: Importaciones de componentes y archivos */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from '../components/Perfil';

/* Zona 2: Main - Hogar de los componentes */

export default function SafeAreaScreen() {
  return (
    <View style={styles.container}>

        <Text>Aquí va la practica de Ivet o Gaby</Text>
        
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
    justifyContent:'center',
    flexDirection:'column',

    


  },
  tarjetaRoja:{backgroundColor:'#FF6B6B'},
  tarjetaVerde:{backgroundColor:'#2bc520ff'},



});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import TarjetasScreen from './TarjetasScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import ListasScreen from './ListasScreen';
import ImageScreen from './ImageScreen';
import IndicadorScreen from './IndicadorScreen';
import ModalScreen from './ModalScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'tarjetas': return <TarjetasScreen />;
    case 'safeArea': return <SafeAreaScreen />;
    case 'pressable': return <PressableScreen />;
    case 'textInput': return <TextInputScreen />;
    case 'listas': return <ListasScreen />;
    case 'imageBg': return <ImageScreen />;
    case 'indicador': return <IndicadorScreen />;
    case 'modal': return <ModalScreen />;

    default:
      return (
        <View style={styles.container}>
          <View style={styles.cajita}>
            <Text style={styles.titulo}>Menú de Prácticas</Text>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('tarjetas')}>
              <Text style={styles.textoBoton}>Tarjetas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('safeArea')}>
              <Text style={styles.textoBoton}>SafeArea</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('pressable')}>
              <Text style={styles.textoBoton}>Pressable & Switch</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('textInput')}>
              <Text style={styles.textoBoton}>TextInput & Alert</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('listas')}>
              <Text style={styles.textoBoton}>FlatList & SectionList</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('imageBg')}>
              <Text style={styles.textoBoton}>ImageBackground</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('indicador')}>
              <Text style={styles.textoBoton}>ActivityIndicator</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boton} onPress={() => setScreen('modal')}>
              <Text style={styles.textoBoton}>Modal & BottomSheet</Text>
            </TouchableOpacity>

          </View>
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b4ffb7ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajita: {
    borderWidth: 4,
    borderColor: '#979797ff',

    width: '30%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  boton: {
    backgroundColor: '#439ce4ff',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
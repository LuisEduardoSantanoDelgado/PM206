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
    backgroundColor: '#eef5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cajita: {
    width: '100%',
    maxWidth: 430,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d8e2ef',
    borderRadius: 18,
    padding: 22,
    shadowColor: '#1e293b',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 6,
  },
  titulo: {
    color: '#1f2937',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 3,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

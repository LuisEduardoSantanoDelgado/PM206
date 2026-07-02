import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Ejemplo de Modal y BottomSheet</Text>

      <Button
        title="Abrir Modal"
        onPress={() => setModalVisible(true)}
      />

      <View style={{ height: 15 }} />

      <Button
        title="Abrir BottomSheet"
        onPress={() => setBottomVisible(true)}
      />

      {/* Modal tradicional */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.fondoModal}>
          <View style={styles.modal}>
            <Text style={styles.texto}>
              Este es un Modal
            </Text>

            <Pressable
              style={styles.boton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBoton}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* BottomSheet */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={bottomVisible}
        onRequestClose={() => setBottomVisible(false)}
      >
        <View style={styles.fondoBottom}>
          <View style={styles.bottomSheet}>

            <Text style={styles.texto}>
              Este es un BottomSheet
            </Text>

            <Pressable
              style={styles.boton}
              onPress={() => setBottomVisible(false)}
            >
              <Text style={styles.textoBoton}>Cerrar</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  fondoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  modal: {
    width: 280,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },

  fondoBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  bottomSheet: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  texto: {
    fontSize: 20,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },

  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },

});
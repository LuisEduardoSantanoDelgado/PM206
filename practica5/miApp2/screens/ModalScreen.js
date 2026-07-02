import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable} from 'react-native';
import React, { useState } from 'react';

/*Zona2: Main - Hogar de los componentes */
export default function ModalScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Text>Ejemplo de Modal y BottomSheet</Text>
        <Button title="Abrir Modal" onPress={() => setIsModalVisible(true)} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={ styles.fondo}>
            <View style={styles.bottomSheet}>
              <Text style={styles.texto}>¡Hola! Este es un modal.</Text>
              <Pressable
                style={styles.boton}
                onPress={() => setIsModalVisible(false)}
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

/*Zona3: Estilos y posicionamiento*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fondo: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  bottomSheet: {
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
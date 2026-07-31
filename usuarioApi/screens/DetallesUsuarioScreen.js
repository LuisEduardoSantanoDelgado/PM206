import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform, Modal } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetallesUsuarioScreen() {
  const { id, nombre, edad } = useLocalSearchParams();
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:5004' : 'http://10.16.3.48:5004';

  const confirmarEliminar = () => {
    setModalVisible(true);
  };

  const eliminarUsuario = async () => {
    setModalVisible(false);
    try {
      const response = await fetch(`${API_URL}/v1/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Basic YWRtaW46MTIzNA=='
        }
      });
      if (response.ok) {
        Alert.alert('Éxito', 'Usuario eliminado');
        router.back();
      } else {
        Alert.alert('Error', 'No se pudo eliminar al usuario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema de conexión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalles del Usuario</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{nombre}</Text>
        <View style={styles.linea} />
        <Text style={styles.label}>Edad</Text>
        <Text style={styles.value}>{edad} años</Text>
        
        <TouchableOpacity style={[styles.btn, styles.btnActualizar]} onPress={() => router.push({ pathname: '/actualizar', params: { id, nombre, edad } })}>
          <Text style={styles.btnTextBlack}>Actualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, styles.btnEliminar]} onPress={confirmarEliminar}>
          <Text style={styles.btnText}>Eliminar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmar eliminación</Text>
            <Text style={styles.modalText}>¿Estás seguro de que deseas eliminar al usuario {nombre}?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={[styles.btnAction, styles.btnCancel]} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnTextBlack}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btnAction, styles.btnConfirm]} onPress={eliminarUsuario}>
                <Text style={styles.btnText}>Sí, eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3
  },
  label: {
    color: 'gray'
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  linea: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10
  },
  btn: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  btnActualizar: {
    backgroundColor: '#FACC15',
    marginTop: 20
  },
  btnEliminar: {
    backgroundColor: '#EF4444'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  },
  btnTextBlack: {
    color: 'black',
    fontWeight: 'bold'
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 20
  },
  modalActions: {
    flexDirection: 'row',
    width: '100%'
  },
  btnAction: {
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center'
  },
  btnCancel: {
    backgroundColor: '#eee',
    marginRight: 5
  },
  btnConfirm: {
    backgroundColor: 'red',
    marginLeft: 5
  }
});

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ActualizarUsuarioScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [nombre, setNombre] = useState(params.nombre || '');
  const [edad, setEdad] = useState(params.edad ? params.edad.toString() : '');

  const API_URL = Platform.OS === 'android' ? 'http://10.0.2.2:5004' : 'http://10.16.3.48:5004';

  const actualizarUsuario = async () => {
    try {
      const response = await fetch(`${API_URL}/v1/usuarios/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtaW46MTIzNA=='
        },
        body: JSON.stringify({ nombre, edad: parseInt(edad) })
      });
      if (response.ok) {
        Alert.alert('Éxito', 'Usuario actualizado');
        router.push('/consulta');
      } else {
        Alert.alert('Error', 'No se pudo actualizar al usuario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema de conexión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Actualizar Usuario</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput 
          style={styles.input} 
          value={nombre} 
          onChangeText={setNombre} 
        />
        
        <Text style={styles.label}>Edad</Text>
        <TextInput 
          style={styles.input} 
          value={edad} 
          onChangeText={setEdad} 
          keyboardType="numeric" 
        />

        <TouchableOpacity style={styles.btnGuardar} onPress={actualizarUsuario}>
          <Text style={styles.btnTextBlack}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1F2937'
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#1F2937'
  },
  btnGuardar: {
    backgroundColor: '#FACC15',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  btnTextBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  }
});

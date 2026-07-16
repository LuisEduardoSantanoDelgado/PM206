import { Text, View, StyleSheet, TextInput, Switch, Pressable, Alert, Platform } from 'react-native';
import React, { useState } from 'react';

export const TarjetaMascota = ({ nombre, especie, edad }) => {
  const [descripcion, setDescripcion] = useState('');
  const [descripcionGuardada, setDescripcionGuardada] = useState('');
  const [adoptado, setAdoptado] = useState(false);

  const guardarDatos = () => {
    setDescripcionGuardada(descripcion);

    const mensaje = `Mascota: ${nombre}
Descripción: ${descripcion}
Estado: ${adoptado ? 'Adoptado' : 'No adoptado'}`;

    if (Platform.OS === 'web') {
      alert(mensaje);
    } else {
      Alert.alert('Guardado correctamente', mensaje);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nombre}</Text>
      <Text style={styles.informacion}>Especie: {especie}</Text>
      <Text style={styles.informacion}>Edad: {edad}</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe una descripción"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.informacion}>¿Fue adoptado?</Text>
        <Switch value={adoptado} onValueChange={setAdoptado} />
      </View>

      <Pressable style={styles.boton} onPress={guardarDatos}>
        <Text style={styles.textoBoton}>Guardar</Text>
      </Pressable>

      <Text style={styles.informacion}>
        Descripción guardada: {descripcionGuardada}
      </Text>

      <Text style={styles.informacion}>
        Estado: {adoptado ? 'Adoptado' : 'No adoptado'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef5ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#1f2937',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 20,
  },
  informacion: {
    color: '#1f2937',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  switchContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});
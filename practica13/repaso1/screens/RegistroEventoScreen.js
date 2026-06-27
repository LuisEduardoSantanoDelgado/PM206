import React, { useState } from 'react';
import {
  Alert,Keyboard,KeyboardAvoidingView,Platform,Pressable,ScrollView,StyleSheet,Switch,Text,TextInput,View,} from 'react-native';

export default function RegistroEventoScreen() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [asisteTaller, setAsisteTaller] = useState(false);
  const [requiereConstancia, setRequiereConstancia] = useState(false);
  const [participaDeportes, setParticipaDeportes] = useState(false);

  const mostrarAlerta = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}: ${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const textoRespuesta = (valor) => (valor ? 'Si' : 'No');

  const enviarRegistro = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();

    const nombreLimpio = nombre.trim();
    const carreraLimpia = carrera.trim();
    const semestreLimpio = semestre.trim();

    if (!nombreLimpio || !carreraLimpia || !semestreLimpio) {
      mostrarAlerta('Validacion', 'No se permiten campos vacios.');
      return;
    }

    if (!/^\d+$/.test(semestreLimpio)) {
      mostrarAlerta('Validacion', 'El semestre debe ser numerico.');
      return;
    }

    mostrarAlerta(
      'Registro de Evento Universitario',
      `Nombre: ${nombreLimpio}\n` +
        `Carrera: ${carreraLimpia}\n` +
        `Semestre: ${semestreLimpio}\n` +
        `Taller: ${textoRespuesta(asisteTaller)}\n` +
        `Constancia: ${textoRespuesta(requiereConstancia)}\n` +
        `Deportes: ${textoRespuesta(participaDeportes)}`
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.contenido}>
        <View style={styles.tarjeta}>
          <Text style={styles.titulo}>Registro de Evento Universitario</Text>
          <Text style={styles.descripcion}>
            Completa tus datos para simular el registro a un congreso o evento.
          </Text>

          <Text style={styles.etiqueta}>Nombre completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Luis EEduardo Santano Delgado"
            value={nombre}
            onChangeText={setNombre}
            autoCapitalize="words"
          />

          <Text style={styles.etiqueta}>Carrera</Text>
          <TextInput
            style={styles.input}
            placeholder="ISC"
            value={carrera}
            onChangeText={setCarrera}
            autoCapitalize="characters"
          />

          <Text style={styles.etiqueta}>Semestre</Text>
          <TextInput
            style={styles.input}
            placeholder="9"
            value={semestre}
            onChangeText={setSemestre}
            keyboardType="numeric"
            maxLength={2}
          />

          <View style={styles.separador} />

          <PreguntaSwitch
            texto="Asistira al taller?"
            valor={asisteTaller}
            cambiarValor={setAsisteTaller}
          />
          <PreguntaSwitch
            texto="Requiere constancia?"
            valor={requiereConstancia}
            cambiarValor={setRequiereConstancia}
          />
          <PreguntaSwitch
            texto="Participara en actividades deportivas?"
            valor={participaDeportes}
            cambiarValor={setParticipaDeportes}
          />

          <Pressable style={styles.boton} onPress={enviarRegistro}>
            <Text style={styles.textoBoton}>Enviar Registro</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function PreguntaSwitch({ texto, valor, cambiarValor }) {
  return (
    <View style={styles.pregunta}>
      <View style={styles.textosPregunta}>
        <Text style={styles.textoPregunta}>{texto}</Text>
        <Text style={styles.respuesta}>{valor ? 'Si' : 'No'}</Text>
      </View>
      <Switch
        value={valor}
        onValueChange={cambiarValor}
        trackColor={{ false: '#b6c2d2', true: '#93c5fd' }}
        thumbColor={valor ? '#2563eb' : '#f8fafc'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contenido: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  tarjeta: {
    width: '100%',
    maxWidth: 460,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    padding: 18,
    elevation: 2,
  },
  titulo: {
    color: '#222222',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  descripcion: {
    color: '#555555',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 18,
  },
  etiqueta: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    color: '#111111',
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  separador: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 8,
  },
  pregunta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 10,
  },
  textosPregunta: {
    flex: 1,
  },
  textoPregunta: {
    color: '#222222',
    fontSize: 15,
    fontWeight: 'bold',
  },
  respuesta: {
    color: '#666666',
    fontSize: 13,
    marginTop: 2,
  },
  boton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 18,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

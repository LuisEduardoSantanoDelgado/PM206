import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CatalogoLibrosScreen() {
  const [appLista, setAppLista] = useState(false);
  const [libros, setLibros] = useState([]);
  const [guardandoLibro, setGuardandoLibro] = useState(false);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setAppLista(true);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  const manejarGuardar = (nuevoLibro, limpiarFormulario) => {
    setGuardandoLibro(true);

    setTimeout(() => {
      setLibros((listaActual) => [
        ...listaActual,
        { id: Date.now().toString(), ...nuevoLibro },
      ]);

      limpiarFormulario();
      setGuardandoLibro(false);
      mostrarAlerta('Exito', 'Libro guardado correctamente.');
    }, 4000);
  };

  const renderLibro = ({ item }) => <TarjetaLibro libro={item} />;

  const renderSeparador = () => <View style={styles.separador} />;

  const renderEncabezado = () => (
    <View>
      <Text style={styles.tituloPrincipal}>Catalogo de Libros</Text>

      <FormularioLibro
        onSubmit={manejarGuardar}
        guardando={guardandoLibro}
      />

      <View style={styles.contadorContainer}>
        <Text style={styles.contadorTexto}>
          Total de libros: <Text style={styles.contadorNum}>{libros.length}</Text>
        </Text>
      </View>

      {libros.length > 0 && (
        <Text style={styles.tituloLista}>Libros registrados</Text>
      )}
    </View>
  );

  const renderVacio = () => (
    <View style={styles.listaVacia}>
      <Text style={styles.listaVaciaTexto}>
        Aun no hay libros registrados.{'\n'}Agrega el primero!
      </Text>
    </View>
  );

  if (!appLista) {
    return (
      <View style={styles.splash}>
        <Image
          source={require('../assents/LogoLibros.png')}
          style={styles.logoSplash}
          resizeMode="contain"
        />
        <Text style={styles.splashNombre}>Repaso2</Text>
        <Text style={styles.splashSubtitulo}>Catalogo de Libros</Text>
        <ActivityIndicator
          size="large"
          color="#60a5fa"
          style={styles.splashIndicador}
        />
        <Text style={styles.splashCargando}>Cargando catalogo...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/500/900' }}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.fondoOscuro}>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.flex}
          >
            <FlatList
              data={libros}
              keyExtractor={(item) => item.id}
              renderItem={renderLibro}
              ListHeaderComponent={renderEncabezado}
              ListEmptyComponent={renderVacio}
              ItemSeparatorComponent={renderSeparador}
              contentContainerStyle={styles.listaContenido}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            />
          </KeyboardAvoidingView>
        </SafeAreaView>

        <OverlayCarga visible={guardandoLibro} />
      </View>
    </ImageBackground>
  );
}

function FormularioLibro({ onSubmit, guardando }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const limpiarFormulario = () => {
    setTitulo('');
    setAutor('');
    setGenero('');
  };

  const manejarAgregar = () => {
    if (Platform.OS !== 'web') Keyboard.dismiss();

    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      mostrarAlerta('Validacion', 'Todos los campos son obligatorios.');
      return;
    }

    onSubmit({
      titulo: titulo.trim(),
      autor: autor.trim(),
      genero: genero.trim(),
    }, limpiarFormulario);
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Titulo del libro"
        placeholderTextColor="#9ca3af"
        value={titulo}
        onChangeText={setTitulo}
        editable={!guardando}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
        placeholderTextColor="#9ca3af"
        value={autor}
        onChangeText={setAutor}
        editable={!guardando}
      />

      <TextInput
        style={styles.input}
        placeholder="Genero"
        placeholderTextColor="#9ca3af"
        value={genero}
        onChangeText={setGenero}
        editable={!guardando}
      />

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
          guardando && styles.botonDeshabilitado,
        ]}
        onPress={manejarAgregar}
        disabled={guardando}
      >
        {guardando ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.textoBoton}>Agregar Libro</Text>
        )}
      </Pressable>
    </View>
  );
}

function TarjetaLibro({ libro }) {
  return (
    <View style={styles.tarjetaLibro}>
      <View style={styles.infoLibro}>
        <Text style={styles.tituloLibro} numberOfLines={2}>
          {libro.titulo}
        </Text>

        <Text style={styles.autorLibro}>
          <Text style={styles.etiquetaLibro}>Autor: </Text>
          {libro.autor}
        </Text>

        <View style={styles.generoBadge}>
          <Text style={styles.generoTexto}>{libro.genero}</Text>
        </View>
      </View>
    </View>
  );
}

function OverlayCarga({ visible }) {
  if (!visible) return null;

  return (
    <View style={styles.overlayCarga}>
      <View style={styles.tarjetaCarga}>
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={styles.indicadorCarga}
        />
        <Text style={styles.textoCarga}>Guardando libro...</Text>
        <Text style={styles.subtextoCarga}>Por favor espera</Text>
      </View>
    </View>
  );
}

function mostrarAlerta(titulo, mensaje) {
  if (Platform.OS === 'web') {
    alert(`${titulo}: ${mensaje}`);
  } else {
    Alert.alert(titulo, mensaje);
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a2a6c',
  },
  logoSplash: {
    width: 95,
    height: 95,
    marginBottom: 14,
  },
  splashNombre: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  splashSubtitulo: {
    fontSize: 15,
    color: '#93c5fd',
    marginBottom: 24,
  },
  splashIndicador: {
    marginBottom: 12,
  },
  splashCargando: {
    fontSize: 14,
    color: '#dbeafe',
    fontStyle: 'italic',
  },
  fondo: {
    flex: 1,
    width: '100%',
  },
  fondoOscuro: {
    flex: 1,
    backgroundColor: 'rgba(10, 20, 50, 0.65)',
  },
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  listaContenido: {
    paddingHorizontal: 14,
    paddingBottom: 22,
    paddingTop: 14,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 14,
  },
  contadorContainer: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  contadorTexto: {
    color: '#e5e7eb',
    fontSize: 15,
    textAlign: 'center',
  },
  contadorNum: {
    color: '#60a5fa',
    fontWeight: '700',
    fontSize: 16,
  },
  tituloLista: {
    fontSize: 15,
    fontWeight: '600',
    color: '#d1d5db',
    marginBottom: 8,
  },
  separador: {
    height: 4,
  },
  listaVacia: {
    alignItems: 'center',
    paddingVertical: 28,
  },
  listaVaciaTexto: {
    color: '#9ca3af',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  formContainer: {
    marginBottom: 16,
  },
  input: {
    height: 44,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1f2937',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  boton: {
    backgroundColor: '#2563EB',
    borderRadius: 6,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: {
    backgroundColor: '#1d4ed8',
  },
  botonDeshabilitado: {
    backgroundColor: '#6b7280',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  tarjetaLibro: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  infoLibro: {
    flex: 1,
  },
  tituloLibro: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 3,
  },
  autorLibro: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 7,
  },
  etiquetaLibro: {
    fontWeight: '600',
    color: '#4b5563',
  },
  generoBadge: {
    backgroundColor: '#eff6ff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  generoTexto: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
  },
  overlayCarga: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  tarjetaCarga: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    minWidth: 180,
  },
  indicadorCarga: {
    marginBottom: 16,
  },
  textoCarga: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtextoCarga: {
    fontSize: 13,
    color: '#6b7280',
  },
});

import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,ImageBackground,ActivityIndicator } from 'react-native';

export default function Splash() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function prepararAplicacion() {
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        
        setLoading(false);
      }
    }

    prepararAplicacion();
  }, []);

  if (loading) {
    return (
      <View style={styles.splash}>
        <ActivityIndicator size="large" color="#0000ff" style={{ marginBottom: 20 }} />
        <Text style={styles.splashText}>Cargando aplicación...</Text>
      </View>
    );
  }

}
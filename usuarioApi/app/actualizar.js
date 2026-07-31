import ActualizarUsuarioScreen from '../screens/ActualizarUsuarioScreen';
import { Stack } from 'expo-router';

export default function Actualizar() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Actualizar Usuario' }} />
      <ActualizarUsuarioScreen />
    </>
  );
}

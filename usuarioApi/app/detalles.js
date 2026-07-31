import DetallesUsuarioScreen from '../screens/DetallesUsuarioScreen';
import { Stack } from 'expo-router';

export default function Detalles() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true, title: 'Detalle del usuario' }} />
      <DetallesUsuarioScreen />
    </>
  );
}

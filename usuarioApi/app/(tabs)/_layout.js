import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title: "Formulario", href: null}} />
        <Tabs.Screen name="alta" options={{title: "Formulario", tabBarIcon: () => <Ionicons name="person-add" size={20} color="black" />}} />
        <Tabs.Screen name="consulta" options={{title: "Listado Usuarios", tabBarIcon: () => <Ionicons name="search" size={20} color="black" />}} />
    </Tabs>
  );
}
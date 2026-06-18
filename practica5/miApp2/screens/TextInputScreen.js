import { View, Text, StyleSheet } from 'react-native';

export default function TextInputScreen() {
  return (
    <View style={styles.container}>
      <Text>TextInput & Alert</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

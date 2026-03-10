import { StyleSheet, Text, View } from 'react-native';
import { Profile } from '../../components/Profile'; // Importando seu componente

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
    textTransform: 'uppercase',
  },
});
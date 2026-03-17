import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  // O seu link do GitHub já está configurado abaixo
  const githubUrl = 'https://github.com/Matheussaares';

  return (
    <View style={styles.container}>
      <Ionicons name="logo-github" size={100} color="#1B1F23" />
      
      <Text style={styles.title}>Meus Projetos</Text>
      
      <Text style={styles.description}>
        Olá! Sou o Matheus. Toque no botão abaixo para ver meus repositórios e códigos diretamente no meu GitHub.
      </Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Linking.openURL(githubUrl)}>
        <Ionicons name="open-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Acessar GitHub de Matheus</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginTop: 20,
    color: '#1B1F23'
  },
  description: { 
    fontSize: 16, 
    color: '#666', 
    textAlign: 'center', 
    marginVertical: 15,
    lineHeight: 22
  },
  button: { 
    backgroundColor: '#24292e', 
    flexDirection: 'row', 
    paddingVertical: 15, 
    paddingHorizontal: 25, 
    borderRadius: 12, 
    alignItems: 'center', 
    gap: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});
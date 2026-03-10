import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function Profile() {
  return (
    <View style={styles.card}>
      <Image 
        /* Link atualizado com o seu usuário do GitHub */
        source={{ uri: 'https://github.com/Matheus-Soares-Silva.png' }} 
        style={styles.avatar} 
      />
      <Text style={styles.name}>Matheus Soares</Text>
      <Text style={styles.bio}>
        Estudante de ADS apaixonado por desenvolvimento mobile. 🚀
        Atualmente focado em dominar React Native e Expo para criar 
        aplicativos modernos e eficientes!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%', 
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#007AFF', 
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    lineHeight: 24,
  },
});
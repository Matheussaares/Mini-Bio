import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

export function Profile() {
  const { width } = useWindowDimensions();
  const avatarSize = Math.min(width * 0.4, 150);

  // AS VARIÁVEIS PRECISAM FICAR AQUI DENTRO:
  const githubUser = "Matheussaares"; 
  const fotoUrl = `https://github.com/${githubUser}.png`;

  return (
    <View style={styles.card}>
      <View style={styles.avatarWrapper}>
        <Image 
          source={{ uri: fotoUrl }} 
          style={[
            styles.avatar, 
            { 
              width: avatarSize, 
              height: avatarSize, 
              borderRadius: avatarSize / 2 
            }
          ]} 
          resizeMode="cover"
        />
      </View>

      <Text style={styles.name}>Matheus Soares</Text>
      <Text style={styles.subject}>Programação para Dispositivos Móveis</Text>

      <Text style={styles.bio}>
        Estudante de <Text style={styles.course}>Sistemas para Internet</Text>. 🚀
        Focado em desenvolver aplicações modernas, fluidas e eficientes utilizando o ecossistema React Native e Expo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    width: '90%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 50,
  },
  avatarWrapper: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    borderWidth: 4,
    borderColor: '#007AFF',
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subject: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF', 
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    lineHeight: 24,
  },
  course: {
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
});
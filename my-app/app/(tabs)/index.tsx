import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
// Importando o seu componente que está na pasta components
import { Profile } from '../../components/Profile'; 

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Profile />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
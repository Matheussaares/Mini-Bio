import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 60,
          paddingBottom: 8,
        },
        // Ativa a animação de deslize entre as abas
        
      }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bio',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={26} color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <Ionicons name="logo-github" size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}
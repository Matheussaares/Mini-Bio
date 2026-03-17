import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#007AFF' }}>
      
      {/* Aba da Bio */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bio',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
        }}
      />

      {/* Aba dos Projetos (GitHub) */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <Ionicons name="logo-github" size={28} color={color} />,
        }}
      />

    </Tabs>
  );
}
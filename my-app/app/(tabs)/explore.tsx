import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Linking, ActivityIndicator, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    // Busca seus projetos reais do GitHub
    fetch('https://api.github.com/users/Matheussaares/repos')
      .then(response => response.json())
      .then(data => {
        const sortedData = data.sort((a: any, b: any) => 
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setRepos(sortedData);
        setLoading(false);
        
        // Inicia a animação assim que os dados chegam
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600, // 600ms para uma transição fluida
          useNativeDriver: true,
        }).start();
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const abrirProjeto = (url: string) => {
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={{ marginTop: 12, color: '#8E8E93' }}>Buscando no GitHub...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Meus Repositórios</Text>
        <Text style={styles.subHeader}>Projetos reais do @Matheussaares</Text>
      </View>
      
      <Animated.View style={{ flex: 1, opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0] // A lista sobe levemente enquanto aparece
      }) }] }}>
        
        <FlatList
          data={repos}
          keyExtractor={(item: any) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }: any) => (
            <Pressable 
              style={({ pressed }) => [styles.card, pressed && { opacity: 0.7, scale: 0.98 }]} 
              onPress={() => abrirProjeto(item.html_url)}
            >
              <View style={styles.iconCircle}>
                <Ionicons name="code-slash" size={22} color="#007AFF" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.projectTitle}>{item.name}</Text>
                <Text style={styles.projectDesc} numberOfLines={2}>
                  {item.description || "Projeto incrível sem descrição ainda."}
                </Text>
                <View style={styles.footerCard}>
                  <View style={styles.languageBadge}>
                    <Text style={styles.languageText}>{item.language || 'Markdown'}</Text>
                  </View>
                  <Text style={styles.dateText}>
                    Atualizado em: {new Date(item.updated_at).toLocaleDateString('pt-BR')}
                  </Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
            </Pressable>
          )}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7', paddingTop: 60 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F7' },
  headerContainer: { marginBottom: 20, paddingHorizontal: 20 },
  header: { fontSize: 32, fontWeight: '800', color: '#1C1C1E', letterSpacing: -0.5 },
  subHeader: { fontSize: 15, color: '#8E8E93', marginTop: 4 },
  listContainer: { paddingHorizontal: 20, paddingBottom: 40 },
  card: { 
    backgroundColor: '#FFF', 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderRadius: 20, 
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  iconCircle: { width: 44, height: 44, borderRadius: 12, backgroundColor: '#E5F1FF', justifyContent: 'center', alignItems: 'center' },
  textContainer: { flex: 1, marginLeft: 15 },
  projectTitle: { fontSize: 17, fontWeight: '700', color: '#2C2C2E' },
  projectDesc: { fontSize: 13, color: '#636366', marginTop: 4, lineHeight: 18 },
  footerCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  languageBadge: { backgroundColor: '#F2F2F7', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  languageText: { fontSize: 10, color: '#007AFF', fontWeight: '800', textTransform: 'uppercase' },
  dateText: { fontSize: 10, color: '#AEAEB2' }
});
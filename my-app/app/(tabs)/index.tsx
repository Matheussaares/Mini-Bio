import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Animated, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [userData, setUserData] = useState<any>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    fetch('https://api.github.com/users/Matheussaares')
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        Animated.parallel([
          Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
          Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
        ]).start();
      });
  }, []);

  // Funções para abrir os links externos
  const abrirWhats = () => Linking.openURL('https://wa.me/5581998602574');
  const abrirEmail = () => Linking.openURL('mailto:matheussares@gmail.com');
  const abrirInsta = () => Linking.openURL('https://instagram.com/Matheussaares');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          
          {/* Cabeçalho */}
          <View style={styles.header}>
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: userData?.avatar_url }} style={styles.avatar} />
              <View style={styles.geekBadge}>
                <Ionicons name="trending-up" size={14} color="#FFF" />
              </View>
            </View>
            <Text style={styles.name}>Matheus Soares Lima</Text>
            <Text style={styles.subtitle}>Adm & Finanças ➔ Tech Transition</Text>
          </View>

          {/* Card 1: Perfil Profissional */}
          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Ionicons name="briefcase-outline" size={20} color="#007AFF" />
              <Text style={styles.cardTitle}>Trajetória Profissional</Text>
            </View>
            <Text style={styles.cardText}>
              Profissional formado em Administração, com sólida experiência no ramo financeiro e de Análise de faturamento. 
              Atualmente, em um movimento estratégico de transição de carreira para a área de Tecnologia, 
              unindo o pensamento analítico da gestão com o desenvolvimento de soluções modernas em Sistemas para Internet.
            </Text>
          </View>

          {/* NOVO Card: Contato e Social (WhatsApp, Email, Insta) */}
          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Ionicons name="paper-plane-outline" size={20} color="#34C759" />
              <Text style={styles.cardTitle}>Contato & Social</Text>
            </View>

            <TouchableOpacity style={styles.contactItem} onPress={abrirWhats}>
              <Ionicons name="logo-whatsapp" size={22} color="#25D366" />
              <Text style={styles.contactText}>(81) 99860-2574</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactItem} onPress={abrirEmail}>
              <Ionicons name="mail-outline" size={22} color="#EA4335" />
              <Text style={styles.contactText}>matheussares@gmail.com</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactItem} onPress={abrirInsta}>
              <Ionicons name="logo-instagram" size={22} color="#E1306C" />
              <Text style={styles.contactText}>@Matheussaares</Text>
            </TouchableOpacity>
          </View>

          {/* Card 3: Lado Geek & Hobbies */}
          <View style={[styles.card, { backgroundColor: '#1C1C1E' }]}>
            <View style={styles.cardTitleRow}>
              <Ionicons name="game-controller" size={20} color="#FFD60A" />
              <Text style={[styles.cardTitle, { color: '#FFF' }]}>Lado Geek & Hobbies</Text>
            </View>
            
            <View style={styles.hobbyContainer}>
              <View style={styles.hobbyItem}>
                <Ionicons name="tv-outline" size={18} color="#FFD60A" />
                <Text style={styles.hobbyText}>Animes & Séries</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Ionicons name="videocam-outline" size={18} color="#FFD60A" />
                <Text style={styles.hobbyText}>Cinéfilo</Text>
              </View>
              <View style={styles.hobbyItem}>
                <Ionicons name="flash-outline" size={18} color="#FFD60A" />
                <Text style={styles.hobbyText}>Geek Culture</Text>
              </View>
            </View>

            <Text style={[styles.cardText, { color: '#EBEBF5', marginTop: 12 }]}>
              Amante da cultura geek, sempre acompanhando novas temporadas de animes e explorando o universo dos games e do cinema nas horas vagas.
            </Text>
          </View>

          {/* Rodapé com Infos do GitHub */}
          <View style={styles.footerRow}>
            <View style={styles.infoBox}>
              <Ionicons name="location-outline" size={16} color="#007AFF" />
              <Text style={styles.infoBoxText}>Recife, PE</Text>
            </View>
            <View style={styles.infoBox}>
              <Ionicons name="logo-github" size={16} color="#007AFF" />
              <Text style={styles.infoBoxText}>{userData?.public_repos || '0'} Projetos</Text>
            </View>
          </View>

        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  scrollContent: { padding: 20, paddingTop: 50 },
  header: { alignItems: 'center', marginBottom: 30 },
  avatarWrapper: { position: 'relative' },
  avatar: { width: 130, height: 130, borderRadius: 65, borderWidth: 4, borderColor: '#FFF' },
  geekBadge: { position: 'absolute', bottom: 5, right: 5, backgroundColor: '#34C759', padding: 6, borderRadius: 15, borderWidth: 2, borderColor: '#FFF' },
  name: { fontSize: 26, fontWeight: '800', color: '#1C1C1E', marginTop: 15 },
  subtitle: { fontSize: 13, color: '#007AFF', fontWeight: '700', textTransform: 'uppercase', marginTop: 4, letterSpacing: 0.5 },
  card: { backgroundColor: '#FFF', padding: 22, borderRadius: 24, marginBottom: 16, elevation: 4, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 12 },
  cardTitleRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#1C1C1E' },
  cardText: { fontSize: 15, color: '#3A3A3C', lineHeight: 22 },
  contactItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F9FA', padding: 12, borderRadius: 15, marginBottom: 10, gap: 12, borderWidth: 1, borderColor: '#E5E5EA' },
  contactText: { fontSize: 14, fontWeight: '600', color: '#1C1C1E' },
  hobbyContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 5 },
  hobbyItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255, 214, 10, 0.15)', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, gap: 8 },
  hobbyText: { color: '#FFD60A', fontSize: 13, fontWeight: 'bold' },
  footerRow: { flexDirection: 'row', gap: 12, marginTop: 10 },
  infoBox: { flex: 1, backgroundColor: '#FFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15, borderRadius: 18, gap: 8 },
  infoBoxText: { fontSize: 14, fontWeight: '600', color: '#1C1C1E' }
});
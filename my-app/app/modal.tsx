import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function ModalScreen() {
  return (
    // O container principal com fundo semi-transparente
    <View style={styles.container}>
      
      <View style={styles.modalCard}>
        <Text style={styles.title}>Minha Bio Completa</Text>
        
        <Text style={styles.content}>
          {/* Edite este texto com seus detalhes reais */}
          Olá! Eu sou um desenvolvedor em formação. 
          Nesta modal, apresento detalhes extras que não couberam 
          na tela inicial, cumprindo os requisitos da atividade.
        </Text>

        {/* Botão para voltar (opcional, já que a modal fecha deslizando) */}
        <Link href="../" style={styles.backLink}>
          <Text style={styles.backText}>Fechar</Text>
        </Link>
      </View>

      {/* Ajusta a barra de status para o tema escuro da modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // FUNDO SEMI-TRANSPARENTE (Requisito da atividade)
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
  },
  modalCard: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center',
    // Sombra para dar profundidade
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
  },
  backLink: {
    marginTop: 20,
    padding: 10,
  },
  backText: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          {/* Uygulama Başlığı */}
          <Text style={styles.title}>TeamUp 🎮</Text>
          <Text style={styles.subtitle}>Valorant ve CS2 için takım arkadaşını bul!</Text>

          {/* Oyun Seçim Butonları */}
          <TouchableOpacity style={[styles.button, styles.valorantButton]}>
            <Text style={styles.buttonText}>VALORANT Takımı Bul</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.cs2Button]}>
            <Text style={styles.buttonText}>CS2 Takımı Bul</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1016',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#9ba1a6',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  valorantButton: {
    backgroundColor: '#ff4655', // Valorant Kırmızı
  },
  cs2Button: {
    backgroundColor: '#de9b27', // CS2 Turuncu
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
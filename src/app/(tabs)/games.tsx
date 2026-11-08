import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function GamesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Desteklenen Oyunlar 🎯</Text>
            <View style={styles.gameCard}><Text style={styles.gameText}>VALORANT</Text></View>
            <View style={styles.gameCard}><Text style={styles.gameText}>Counter-Strike 2</Text></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f1016', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
    gameCard: { backgroundColor: '#1a1b24', padding: 20, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#2d2f3d', alignItems: 'center' },
    gameText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
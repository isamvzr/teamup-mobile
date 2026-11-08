import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const MOCK_PLAYERS = [
    { id: '1', name: 'Kaan (ProGamer)', rank: 'Diamond', role: 'Duelist', game: 'Valorant' },
    { id: '2', name: 'Mert (Shadow)', rank: 'Global Elite', role: 'Entry Fragger', game: 'CS2' },
    { id: '3', name: 'Cem (ViperMain)', rank: 'Ascendant', role: 'Controller', game: 'Valorant' },
];

export default function MatchesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Takım Arkadaşı İlanları 🎮</Text>
            <FlatList
                data={MOCK_PLAYERS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.playerName}>{item.name}</Text>
                            <Text style={styles.playerDetails}>{item.game} • {item.rank} • {item.role}</Text>
                        </View>
                        <View style={styles.tagContainer}>
                            <Text style={styles.tagText}>Davet Et</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f1016', paddingHorizontal: 16, paddingTop: 20 },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#ffffff', marginBottom: 20, textAlign: 'center' },
    card: { backgroundColor: '#1a1b24', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#2d2f3d' },
    playerName: { fontSize: 18, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
    playerDetails: { fontSize: 14, color: '#9ba1a6' },
    tagContainer: { backgroundColor: '#ff4655', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
    tagText: { color: '#ffffff', fontWeight: 'bold', fontSize: 14 },
});
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {
    const topGames = [
        { id: '1', name: 'VALORANT', hours: '142 Saat', rank: 'Diamond 2' },
        { id: '2', name: 'Counter-Strike 2', hours: '98 Saat', rank: 'Global Elite' },
    ];

    const recentFriends = [
        { id: '1', name: 'Mert (Shadow)', game: 'VALORANT', status: 'Çevrim İçi' },
        { id: '2', name: 'Cem (ViperMain)', game: 'CS2', status: 'Oyunda' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.headerTitle}>Hoş Geldin, Oyuncu! 🎮</Text>

                <Text style={styles.sectionTitle}>En Çok Oynananlar</Text>
                {topGames.map((game) => (
                    <View key={game.id} style={styles.card}>
                        <View>
                            <Text style={styles.cardTitle}>{game.name}</Text>
                            <Text style={styles.cardSubtitle}>Süre: {game.hours}</Text>
                        </View>
                        <Text style={styles.rankBadge}>{game.rank}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Arkadaşlar</Text>
                {recentFriends.map((friend) => (
                    <View key={friend.id} style={styles.friendCard}>
                        <View>
                            <Text style={styles.cardTitle}>{friend.name}</Text>
                            <Text style={styles.cardSubtitle}>Son Oynanan: {friend.game}</Text>
                        </View>
                        <Text style={styles.statusText}>{friend.status}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f1016' },
    scrollContent: { padding: 20 },
    headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginBottom: 24 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#9ba1a6', marginBottom: 12, marginTop: 10 },
    card: { backgroundColor: '#1a1b24', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#2d2f3d' },
    friendCard: { backgroundColor: '#1a1b24', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#2d2f3d' },
    cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
    cardSubtitle: { fontSize: 13, color: '#9ba1a6' },
    rankBadge: { color: '#ff4655', fontWeight: 'bold', fontSize: 14 },
    statusText: { color: '#22c55e', fontSize: 13, fontWeight: 'bold' },
});
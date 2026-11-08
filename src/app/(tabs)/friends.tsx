import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function FriendsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Arkadaş Listem 👥</Text>
            <View style={styles.card}><Text style={styles.name}>Mert (Shadow)</Text><Text style={styles.status}>Çevrim İçi</Text></View>
            <View style={styles.card}><Text style={styles.name}>Cem (ViperMain)</Text><Text style={styles.status}>Oyunda</Text></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f1016', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20, textAlign: 'center' },
    card: { backgroundColor: '#1a1b24', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#2d2f3d' },
    name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    status: { color: '#22c55e', fontSize: 14 }
});
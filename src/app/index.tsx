import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Hata', 'Lütfen kullanıcı adı ve şifre girin!');
            return;
        }
        router.replace('/(tabs)' as any);
    };

    const handleGuestLogin = () => {
        router.replace('/(tabs)' as any);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>TeamUp 🎮</Text>
                <Text style={styles.subtitle}>Takım arkadaşını bulmak için giriş yap</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="#6b7280"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Şifre"
                    placeholderTextColor="#6b7280"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleLogin} activeOpacity={0.8}>
                    <Text style={styles.submitButtonText}>Giriş Yap</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin} activeOpacity={0.8}>
                    <Text style={styles.guestButtonText}>🚀 Test İçin Hızlı Giriş (Misafir)</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f1016', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
    card: { width: '100%', maxWidth: 400, backgroundColor: '#1a1b24', padding: 24, borderRadius: 16, borderWidth: 1, borderColor: '#2d2f3d' },
    title: { fontSize: 32, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 8 },
    subtitle: { fontSize: 14, color: '#9ba1a6', textAlign: 'center', marginBottom: 24 },
    input: { backgroundColor: '#0f1016', borderWidth: 1, borderColor: '#2d2f3d', borderRadius: 10, padding: 14, color: '#ffffff', fontSize: 16, marginBottom: 16 },
    submitButton: { backgroundColor: '#ff4655', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 8 },
    submitButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
    guestButton: { backgroundColor: '#2d2f3d', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 12 },
    guestButtonText: { color: '#9ba1a6', fontSize: 14, fontWeight: 'bold' },
});
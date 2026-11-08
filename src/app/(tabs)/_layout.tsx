import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#1a1b24',
                    borderTopColor: '#2d2f3d',
                    height: 60,
                    paddingBottom: 8,
                },
                tabBarActiveTintColor: '#ff4655',
                tabBarInactiveTintColor: '#9ba1a6',
            }}
        >
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="games" options={{ title: 'Oyunlar' }} />
            <Tabs.Screen name="matches" options={{ title: 'Oyuncular' }} />
            <Tabs.Screen name="friends" options={{ title: 'Arkadaşlar' }} />
        </Tabs>
    );
}
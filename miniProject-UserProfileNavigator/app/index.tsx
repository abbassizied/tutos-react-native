import { useRouter } from 'expo-router';
import { View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Button title="Go to About" onPress={() => router.push('/about')} />
      <Button title="Go to Zied's Profile" onPress={() => router.push({ pathname: '/[user]', params: { user: 'zied' } })} />
    </View>
  );
}

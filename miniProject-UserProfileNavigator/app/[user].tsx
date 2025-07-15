import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { globalStyles } from '../styles/global';

export default function Profile() {
  const { user } = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Hello, {user}!</Text>
    </View>
  );
}

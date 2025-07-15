import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { useRouter } from 'expo-router';
import { globalStyles } from '../styles/global';

export default function index() {
  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <Text>index</Text>
      <Button title="Go to Zied's Profile" onPress={() => router.push({ pathname: '/user/[id]', params: { id: 'zied' } })} />
    </View>
  )
}

const styles = StyleSheet.create({})
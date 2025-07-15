import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { globalStyles } from '../../styles/global';

export default function ShowUserID() {

  const { id } = useLocalSearchParams();
  return (
    <View style={globalStyles.container}>
      <Text>your id is {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
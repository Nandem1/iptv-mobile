import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import ChannelList from '../components/ChannelList'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Canales de Chile</Text>
      <ChannelList />
      <Button
        title="Go to VideoPlayer"
        onPress={() => navigation.navigate('VideoPlayer')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    padding: 10
  },
});

export default Home
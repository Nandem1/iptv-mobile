import { View, Text } from 'react-native'
import React from 'react'
import VideoPlayerComponent from '../components/VideoPlayerComponent'

const VideoPlayer = ({ route, navigation }) => {
  const { videoUrl } = route.params;
  return (
    <View>
      <Text>Reproductor</Text>
      <View>
        <VideoPlayerComponent videoUrl={videoUrl} />
      </View>
    </View>
  )
}

export default VideoPlayer
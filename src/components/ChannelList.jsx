import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react'
import { useContx } from '../Context/ContextProvider'

const ChannelList = () => {
  const data = useContx()
  const navigation = useNavigation();

  const Item = ({ channelName, groupTitle, tvgLogo, url, tvgId }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', {
        videoUrl: url
      })}>
        <View key={tvgId} style={styles.channelbox}>
          <View style={styles.tvlogobox}>
            <Image
              source={{ uri: tvgLogo }}
              style={styles.tvlogo}
            />
          </View>
          <View style={styles.channelDesc}>
            <Text>{channelName}</Text>
            <Text style={styles.subtitle}>{groupTitle == 'Undefined' ? 'No definido' : groupTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  if (!data) {
    return <View><Text>Loading . . .</Text></View>
  }

  return (
    <View>
      <Text style={styles.title}>Lista de canales:</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item channelName={item.channelName} groupTitle={item.groupTitle} tvgLogo={item.tvgLogo} url={item.url} tvgId={item.tvgId} />}
        keyExtractor={(item) => item.tvgId}
        style={styles.flatlistBase}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    paddingLeft: 5,
    marginBottom: 5
  },
  flatlistBase: {
    paddingLeft: 5,
    paddingRight: 5
  },
  tvlogo: {
    width: 35,
    height: 35,
    objectFit: 'cover',
  },
  tvlogobox: {
    paddingTop: 2
  },
  channelbox: {
    flexDirection: 'row',
    alignContent: 'center',
    border: 1,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5
  },
  subtitle: {
    color: 'grey'
  },
  channelDesc: {
    marginStart: 8
  }
});

export default ChannelList
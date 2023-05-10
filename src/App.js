import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, } from 'react-native'
import data from './data.json'
import SongCard from './components/songCard'
import SearchBar from './components/seacrhBar'

const App = () => {
  const [list, setList] = useState(data);

  const renderSong = ({ item }) => <SongCard song={item} />

  const renderSeparator = <View style={styles.separator} />

  const handleSearch = text => {
    const filteredList = data.filter(song => {
      const seacrhedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      
      return currentTitle.indexOf(seacrhedText) > -1 ;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong} 
        ItemSeparatorComponent={renderSeparator} />
    </SafeAreaView>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F0EEED',
  }
})
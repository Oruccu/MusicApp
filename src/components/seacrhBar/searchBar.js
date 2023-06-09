import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import styles from './searchBar.Styles'

const SearchBar = props => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Ara...' onChangeText={props.onSearch}/>
        </View>
    )
}

export default SearchBar;
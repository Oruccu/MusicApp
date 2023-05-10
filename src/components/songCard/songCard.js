import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import styles from './songCard.Styles'
const SongCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.inner_container}>
                <Text>{props.song.title}</Text>
                <View style={styles.body_container}>
                    <View style={styles.about_container}>
                        <Text style={styles.artist}>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>
                    {props.song.isSoldOut && (<View style={styles.stock}>
                        <Text style={styles.stock_title}>Tükendi</Text>
                    </View>)}
                </View>

            </View>
        </View>
    )
}

export default SongCard;
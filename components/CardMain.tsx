import React from 'react'
import { pokemon } from '../App'
import { View, Text, Image } from 'react-native'

export default function CardMain({name, sprites}: pokemon) {
    
  return (
    <View style={{padding: 20, display: "flex", flexWrap: "wrap", alignItems: "center", backgroundColor: "#888", marginBottom: 14, borderRadius: 5}}>
        <View style={{marginBottom: 20}}>
            <Text style={{color: "#FFF", fontSize: 17}}>{name}</Text>
        </View>
        <View>
            <Image source={{uri: sprites.back_default}} style={{width: 150, height: 100}} />
        </View>
    </View>
  )
}

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center"
    }}>
      <Text style={{
        color:"red",
        fontSize:30,
        fontWeight:"600",
        textAlign:"center"
              }}>This Template Created by Subham Ghosh</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
import { View, Text } from 'react-native'
import React from 'react'
import {Appbar} from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements'

//tämä komponentti näyttää appbarin jossa on ikoni josta pääsee asetuksiin
// saa taustavärin, värin ja titlen propseina
//ikonit (material design icons) cog (hammasratas) tulee react-native-paperin mukana


export default function MainAppbar(props) { //propsit: title, backgroundColor, icon
    const title = getHeaderTitle(props.options, props.route.name) //tämä hakee navigaatiosta sen sivun nimen jossa ollaan

  return (
    <Appbar.Header style={{backgroundColor: props.backgroundColor}} mode='center-aligned'>
        {props.back ? <Appbar.BackAction color={props.color} onPress={() => props.navigation.goBack()} /> : null}
        <Appbar.Content title={title} color={props.color} />

        {props.back ? null : <Appbar.Action icon='cog' color={props.color} onPress={() => 
        props.navigation.navigate('Settings')} />}
    </Appbar.Header>
  )
}
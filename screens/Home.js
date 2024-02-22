import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Styles from '../Styles'
import { useTheme } from 'react-native-paper'

export default function Home() {
  // const {isDarkMode} = useContext(ThemeContext)

  //useTheme.js lisäyksen jälkeen:

  const {isDarkMode} = useTheme()

  console.log(isDarkMode)

  return (
    <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  )
}
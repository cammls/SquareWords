import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { width } from '../helper'

const side = width / 3

export default class Tile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.letter}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: side,
    width: side,
    borderWidth:1,
    borderColor: '#3696b4',
    backgroundColor: '#e9c115',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { width } from '../helper'
import Tile from './Tile'

export default class Board extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tile letter='K'> </Tile>
        <Tile letter='E'> </Tile>
        <Tile letter='Y'> </Tile>
        <Tile letter='B'> </Tile>
        <Tile letter='O'> </Tile>
        <Tile letter='A'> </Tile>
        <Tile letter='R'> </Tile>
        <Tile letter='D'> </Tile>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: width,
    width: width,
    backgroundColor: '#3696b4',
    flexDirection: 'row',
  //  alignItems: 'flex-start',
    alignContent: 'space-between',
  //  justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
});

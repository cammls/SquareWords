import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { width } from '../helper'
import Tile from './Tile'

const side = width / 3


export default class Board extends React.Component {
  constructor() {
     super()
     this.state = {
       letters: Array(9).fill(null),
     }

     this.state.letters= "keyboard".split('')
   }
   updateBoard(pos, direction) {
    const letters = this.state.letters.slice()
    const letter = letters[pos]
    letters[pos] = null
    let newpos
    switch (direction) {
      case 'up':
      newpos = pos - 3
      break
      case 'down':
      newpos = pos + 3
      break
      case 'left':
      newpos = pos - 1
      break
      case 'right':
      newpos = pos + 1
      break
    }
    if (!letters[newpos] && newpos >= 0 && newpos < 9) {
      letters[newpos] = letter
       this.setState({letters: letters})
    }
   }
   renderTile(i) {
     return(<Tile
       letter={this.state.letters[i]}
       onMove={(dir) => {this.updateBoard(i,dir)} }>
       </Tile>)
     }
     render() {
    return (
      <View style={styles.container}>
        <View style={styles.cell}>{this.renderTile(0)}</View>
        <View style={styles.cell}>{this.renderTile(1)}</View>
        <View style={styles.cell}>{this.renderTile(2)}</View>
        <View style={styles.cell}>{this.renderTile(3)}</View>
        <View style={styles.cell}>{this.renderTile(4)}</View>
        <View style={styles.cell}>{this.renderTile(5)}</View>
        <View style={styles.cell}>{this.renderTile(6)}</View>
        <View style={styles.cell}>{this.renderTile(7)}</View>
        <View style={styles.cell}>{this.renderTile(8)}</View>
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
  },
  cell: {
    height: side,
    width: side,
    backgroundColor: '#1915e9',
    alignItems: 'center'
  }
});

import React from 'react'
import _ from 'lodash'
import Modal from 'react-native-modal'
import { StyleSheet, Text, View } from 'react-native'
import { width } from '../helper'
import Tile from './Tile'
import { words } from '../words'

const side = width / 3
const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time))



export default class Board extends React.Component {
  constructor() {
     super()
     this.state = {
       letters: Array(9).fill(null),
       isGameWon: false
     }

     this.state.word = _.sample(words).split('')
     this.state.letters = _.shuffle(this.state.word)
     // decomment to style the modal
    //  this.state.letters = this.state.word
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
       if (letters.toString().slice(0, -1) == this.state.word.toString()) {
         this.setState({ isGameWon: true})
         timeout(4000).then(()=> {
           this.setState({ isGameWon: false})
           this.resetGame()
         })
       }
    }
   }
   resetGame() {
     this.setState({
       isGameWon: false,
       word: _.sample(words).split('')
     })
     this.setState({letters: _.shuffle(this.state.word)})
   }
   renderTile(i) {
     return(<Tile
       isCorrect= {this.state.letters[i] == this.state.word[i] && i != 8}
       letter={this.state.letters[i]}
       onMove={(dir) => {this.updateBoard(i,dir)} }>
       </Tile>)
     }
     render() {
       return (
         <View style={styles.container}>
         <Modal isVisible={this.state.isGameWon}>
         <View style={styles.modal}>
         <Text>You won!</Text>
         </View>
         </Modal>
         {this.state.letters.map((letter, index) => {
           return <View key={index} style={styles.cell}>{this.renderTile(index)}</View>
         })}
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
    alignContent: 'space-between',
    flexWrap: 'wrap'
  },
  cell: {
    height: side,
    width: side,
    backgroundColor: '#1915e9',
    alignItems: 'center'
  },
  modal: {
    backgroundColor:'#ffffff',
    height: width,
    width: width,
    alignItems: 'center'
  }
});

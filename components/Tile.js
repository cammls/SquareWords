import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import { Icon } from 'react-native-elements'
import { width } from '../helper'

const side = width / 3
//ok
export default class Tile extends React.Component {
  move(direction) {
    if (this.props.letter) {
      this.props.onMove(direction)
    }
  }
  render() {
    let check = <Text></Text>
    if (this.props.isCorrect) {
      check = <Icon name='check' color='#BCE784'/>
    }
    return (
      <GestureRecognizer
      onSwipeUp={() => this.move('up')}
      onSwipeDown={() => this.move('down')}
      onSwipeLeft={() => this.move('left')}
      onSwipeRight={() => this.move('right')}>
    <View style={this.props.letter ? styles.container: styles.none}>
    <Text style={styles.font}>{this.props.letter}</Text>
    {check}
    </View>
    </GestureRecognizer>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    height: side,
    width: side,
    borderWidth:3,
    borderRadius: 10,
    borderColor: '#F5F5F5',
    backgroundColor: '#087E8B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  none: {
    height: side,
    width: side,
    borderWidth:1,
    borderColor: '#F5F5F5',
    backgroundColor: '#F5F5F5'
  },
  font: {
    //fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5F5F5'
  }
});

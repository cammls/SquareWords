import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
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
    return (
      <GestureRecognizer
      onSwipeUp={() => this.move('up')}
      onSwipeDown={() => this.move('down')}
      onSwipeLeft={() => this.move('left')}
      onSwipeRight={() => this.move('right')}>
    <View style={this.props.letter ? styles.container: styles.none}>
    <Text>{this.props.letter}</Text>
    </View>
    </GestureRecognizer>
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
  },
  none: {
    height: side,
    width: side,
    borderWidth:1,
    borderColor: '#3696b4',
    backgroundColor: '#3696b4'
  }
});

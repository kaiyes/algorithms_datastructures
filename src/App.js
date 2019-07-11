import React, { Fragment } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native'

import fizBuzz from './alogorithms/fizzBuzz'
import stringReversal from './alogorithms/stringReversal'
import pallindrom from './alogorithms/pallindrom'

export default class App extends React.Component {
  state = {
    text: '',
    answer: '',
  }
  render() {
    return (
      <View style={styles.viewContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}
        >
          <TouchableOpacity
            onPress={fizBuzz}
            style={styles.button}
          >
            <Text style={styles.text}>fizBuzz</Text>
          </TouchableOpacity>
          <View style={styles.spacer10} />
          <TouchableOpacity
            onPress={stringReversal}
            style={styles.button}
          >
            <Text style={styles.text}>
              {' '}
              string Reversal
            </Text>
          </TouchableOpacity>
          <View style={styles.spacer10} />
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity
            onPress={async () => {
              let ans = await pallindrom(this.state.text)
              this.setState({
                answer: ans,
              })
            }}
            style={styles.button}
          >
            <Text style={styles.text}> Pallindrom ? </Text>
          </TouchableOpacity>
          {this.state.answer != '' ? (
            <Text style={styles.textContainer}>
              {this.state.answer}
            </Text>
          ) : null}
          <View style={styles.spacer10} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  spacer10: {
    height: 10,
  },
})

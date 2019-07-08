import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import fizBuzz from './alogorithms/fizzBuzz'

const App = () => {
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
      </ScrollView>
    </View>
  )
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

export default App

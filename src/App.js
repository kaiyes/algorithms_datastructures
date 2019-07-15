import React, { useState } from 'react'
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
import reverseInt from './alogorithms/reverseInt'
import maxChar from './alogorithms/maxChar'
import chunked from './alogorithms/Chunk'

const App = () => {
  const [palindromText, setPalindrom] = useState('')
  const [palindromAns, setPalindromAns] = useState('')
  const [revText, setRevText] = useState('')
  const [revAns, setRevAns] = useState('')
  const [maxCharecter, setMaxChar] = useState('')
  const [maxCharAns, setMaxCharAns] = useState('')
  const [chunkAns, setChunkAns] = useState('')

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
          <Text style={styles.text}> string Reversal</Text>
        </TouchableOpacity>
        <View style={styles.spacer10} />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => setPalindrom(text)}
          value={palindromText}
        />
        <TouchableOpacity
          onPress={async () => {
            let ans = await pallindrom(palindromText)
            setPalindromAns(ans)
          }}
          style={styles.button}
        >
          <Text style={styles.text}> Pallindrom ? </Text>
        </TouchableOpacity>
        {palindromAns != '' ? (
          <Text style={styles.textContainer}>
            {palindromAns}
          </Text>
        ) : null}

        <View style={styles.spacer10} />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={num => setRevText(num)}
          value={revText}
        />
        <TouchableOpacity
          onPress={async () => {
            let ans = await reverseInt(revText)
            setRevAns(ans)
          }}
          style={styles.button}
        >
          <Text style={styles.text}> reverse int </Text>
        </TouchableOpacity>
        {revAns != '' ? (
          <Text style={styles.textContainer}>{revAns}</Text>
        ) : null}

        <View style={styles.spacer10} />
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={text => setMaxChar(text)}
          value={maxCharecter}
        />
        <TouchableOpacity
          onPress={async () => {
            let ans = await maxChar(maxCharecter)
            setMaxCharAns(ans)
          }}
          style={styles.button}
        >
          <Text style={styles.text}>MaxChar</Text>
        </TouchableOpacity>
        <Text style={styles.textContainer}>
          {maxCharAns}
        </Text>

        <View style={styles.spacer10} />

        <TouchableOpacity
          onPress={async () => {
            let ans = await chunked()
            setChunkAns(ans)
          }}
          style={styles.button}
        >
          <Text style={styles.text}>MaxChar</Text>
        </TouchableOpacity>
        <Text style={styles.textContainer}>{chunkAns}</Text>
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
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

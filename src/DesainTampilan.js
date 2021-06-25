import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class DesainTampilan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Belajar Desain Tampilan & Flekbox </Text>
        <View style={styles.garis} />
        <View style={styles.isi}>
          <Text>Flex direction Row flexVertikal</Text>
          <View style={styles.flexVertikal}>
            <View style={styles.kotakmerah} />
            <View style={styles.kotakbiru} />
            <View style={styles.kotakkuning} />
          </View>

          <Text>Flex direction Row flexHorizontal</Text>
          <View>
            <View style={styles.kotakmerah} />
            <View style={styles.kotakbiru} />
            <View style={styles.kotakkuning} />
          </View>

          <Text>Justify content</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View style={styles.kotakmerah} />
            <View style={styles.kotakbiru} />
            <View style={styles.kotakkuning} />
          </View>
        </View>

        <Text>Align Item</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.kotakmerah} />
          <View style={styles.kotakbiru} />
          <View style={styles.kotakkuning} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {padding: 30},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  garis: {
    borderBottomWidth: 1,
    marginTop: 10,
  },
  isi: {
    marginTop: 30,
  },
  flexVertikal: {
    flexDirection: 'row',
  },
  kotakbiru: {
    width: 50,
    height: 30,
    backgroundColor: 'blue',
  },
  kotakmerah: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  kotakkuning: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
  },
});

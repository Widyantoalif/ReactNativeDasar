import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sekolah: 'Wahiddev',
    };
  }

  gantiState() {
    this.setState({
      sekolah: 'Wahiddesv',
    });
  }

  render() {
    const {sekolah} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> State And Props </Text>
        <View style={styles.garis} />
        <View style={styles.isi}>
          <Text> ini adalah state : {sekolah}</Text>
          <TouchableOpacity
            style={styles.tombol}
            onPress={() => this.gantiState()}>
            <Text style={{textAlign: 'center'}}>Ganti State</Text>
          </TouchableOpacity>
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
  tombol: {
    backgroundColor: 'skyblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});

import React, {
  Component,
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Raw Dog!
        </Text>
        <Text style={styles.instructions}>
          "ooooo baby I like it RAW!!"
        </Text>
        <Text style={styles.instructions}>
          Lets make it happen, ive included a few folders for things like components/containers and redux folders as well
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 30,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
})
import React, { Component, View, Text, StyleSheet } from 'react-native'
import FBSDKCore, { FBSDKAccessToken } from 'react-native-fbsdkcore/';
import Bio from './bio';
import List from './list';
import SignIn from './signin';
import fbApi from '../helpers/fbsdk';
import Matches from './matches';
import EditProfile from './editProfile';
import Tab from './tabs';


export default class Splash extends Component {
  componentWillMount = () => {
    navigator.geolocation.getCurrentPosition((loc, err) => {
      if(!err){
        this.setState({longitude: loc.coords.longitude, latitude: loc.coords.latitude})
      } else {
        console.log(err);
      }
    }); 
  };

  handleRedirect(component) {
    const props = { profile: this.state.profile, locationLat: this.state.latitude, locationLon: this.state.longitude }

    if ( component === 'tab' ) {
      this.props.navigator.push({
        component: Tab,
        passProps: props
      })
    } else {
     this.props.navigator.push({
       component: SignIn,
       title: 'Log In'
     }); 
    }
  }  

  handleFBProfile() {
    fbApi.fbProfile((result) => {
      this.setState({
        profile: result
      });
      this.handleRedirect('tab');
    });
  }

  componentDidMount = () => {
    fbApi.fbToken((token) => {
      if (token) {
        this.handleFBProfile();
      } else {
        this.handleRedirect('signin');
      }
    });
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>TOLO</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  logo: {
    fontSize: 75
  },
  container: {
    flex: 1,
    backgroundColor: '#48BBEC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 65
  }
})




















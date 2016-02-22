
var React = require('react-native');
var YouTube = require('react-native-youtube');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React;

class testingyt extends Component {
  render() {
    return (
      <View style={styles.container}>
      <YouTube
      ref="youtubePlayer"
      videoId="PmV_LeCwk30" // The YouTube video ID
      play={true}           // control playback of video with true/false
      hidden={false}        // control visiblity of the entire view
      playsInline={true}    // control whether the video should play inline

      onReady={(e)=>{this.setState({isReady: true})}}
      onChangeState={(e)=>{this.setState({status: e.state})}}
      onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
      onError={(e)=>{this.setState({error: e.error})}}
      onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

      style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
      />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testingyt', () => testingyt);

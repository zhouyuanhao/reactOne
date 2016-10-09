/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

/*import {
  Text,
  View
} from 'react-native';*/
class View extends Component {
	render(){
		return(<div style={this.props.style}>
		{this.props.children}
		</div>);
	}
}

class Text extends Component {
	render(){
		return(
		<a style={this.props.style}>{this.props.children}<br/></a>
		);
	}
}

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.desk.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = {
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
	display:'block' 
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
	display:'block'
  },
};

ReactDOM.render(
  <AwesomeProject/>,
  document.getElementById('example')
);

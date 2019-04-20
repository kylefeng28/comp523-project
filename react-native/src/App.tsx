
/*
Base Class:
 1. Load firebase data, font
 2. Render homepage
*/

//Import package
import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';

//Import components and utils
import { AppContainer } from './components/navigator';
import { firebase } from './utils/FirebaseWrapper';

//Reference data
let itemsRef = firebase.database.ref('/drugs');

//Delete later, for development use only
import { Subclass } from './screens/Subclass';
import { DrugList } from './screens/DrugList';
import { UserSignup } from './screens/UserSignup';
import { Antibiotics } from './screens/Antibiotics';
import { Bacteria } from './screens/Bacteria';

export default class App extends Component {
  state: {
    font_loaded: boolean;
  };

  constructor(props) {
    super(props);
    this.state = {
      font_loaded: false
    };
  }

  componentWillMount() {
    this._loadFontsAsync();
  }

   _loadFontsAsync = async () => {
    await Font.loadAsync({
      'Open-Sans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'Open-Sans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
      'Open-Sans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'Open-Sans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
      'Open-Sans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    });
    this.setState({ font_loaded: true});
  }

  render() {
    if (!this.state.font_loaded) {
      return <AppLoading />;
    }
    // return <Test/>
    // return <Antibiotics/>;
    // return <DrugList />;
    // return <Bacteria />;
    return <AppContainer />;
    // return <UserSignup />;
    // return <Subclass/>
  }
}
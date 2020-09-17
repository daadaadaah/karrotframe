import './App.css'

import React from "react";
import {
  Navigator,
  Screen,
} from '@daangn/karrotframe'
import Bridge from '@daangn/webview-bridge'
import Home from './components/Home';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const bridge = new Bridge()

function App() {
  return (
    <Navigator
      environment={bridge.environment}
      animationDuration={350}
      onClose={() => {
        bridge.router.close()
      }}>
        <Screen path='/' component={Home} />
        <Screen path='/page2' component={Page2} />
        <Screen path='/page3' component={Page3} />
      </Navigator>
  );
}

export default App;

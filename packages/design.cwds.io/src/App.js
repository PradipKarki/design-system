import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@cwds/components/lib/global/styles.css';
import 'react-select/dist/react-select.css';

import ScrollToTop from './ScrollToTop';
import Home from './modules/home';
import PageLayouts from './modules/layouts';
import CorePage from './modules/core-styles';
import PrinciplesPage from './modules/design-principles';
import LabsPage from './modules/labs';
import ComponentBrowser from './modules/component-browser';
import Patterns from './modules/patterns';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/page-layouts" component={PageLayouts} />
            <Route path="/core" component={CorePage} />
            <Route path="/principles" component={PrinciplesPage} />
            <Route path="/labs" component={LabsPage} />
            <Route path="/components" component={ComponentBrowser} />
            <Route path="/patterns" component={Patterns} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

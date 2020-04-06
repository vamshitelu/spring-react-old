import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';

class App extends React.Component {
  constructor(props){
    super(props);

    history.listen((location, action) => {
      // this.props.clearAlerts();
    }); 
  }

  render(){
    // const {alert} = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router history={history}>
              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state){
  return {};
}

const actionCreators = {

}

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
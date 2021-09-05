import './App.css';
import React from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from './component/Pages/Homepage/Homepage.component';
import ShopPage from './component/Pages/Shop/Shop.component';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './component/Header/Header.component';
import SignInSignUp from './component/Pages/Sign-in-Sign-up/Sign-in-Sign-up.component';
import CheckoutPage from './component/Pages/Checkout/Checkout.component.jsx';
import { checkUserSession } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors'


class App extends React.Component {
  unsubscirbeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscirbeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
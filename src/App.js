import './App.css';
import HomePage from './component/Pages/Homepage/Homepage.component';
import ShopPage from './component/Pages/Shop/Shop.component';
import { Switch, Route } from 'react-router-dom'
import Header from './component/Header/Header.component';
import SignIn from './component/Sign-in/Sign-in.component';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

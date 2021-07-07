import './App.css';
import HomePage from './component/Pages/Homepage/Homepage.component';
import ShopPage from './component/Shop/Shop.component';
import { Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

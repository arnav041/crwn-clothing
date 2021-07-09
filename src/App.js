import './App.css';
import HomePage from './component/Pages/Homepage/Homepage.component';
import ShopPage from './component/Shop/Shop.component';
import { Switch, Route } from 'react-router-dom'
import Header from './component/Header/Header.component';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

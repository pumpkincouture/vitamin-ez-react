import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';

import './App.css';

import { SplashPage } from './components/SplashPage';
import { VitaminInfoPage } from './components/VitaminInfoPage';
import { WelcomePage } from './components/WelcomePage';

function App() {
  return (
      <Switch>
        <Route exact path="/vitamins/:id" component={VitaminInfoPage} />
        <Route exact path="/vitamins" component={WelcomePage} />
        <Route exact path="/" component={SplashPage} />
      </Switch>
  )
}

export default App;

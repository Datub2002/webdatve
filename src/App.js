import './App.css';
import {Suspense , lazy} from 'react'
import {createBrowserHistory} from 'history'
import {Router,Switch,Route} from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Detail from './pages/Detail/Detail';
import Checkout from './pages/Checkout/Checkout';
import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile';
export const history = createBrowserHistory();

function App() {
      // const CheckoutLoading = lazy(() => import("./templates/CheckoutTemplate/CheckoutTemplate"));

  return (


    <Router history={history}  >
     <Loading />
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profile} />
        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />

          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout}/>
      </Switch>
    </Router>
  );
    
  
}

export default App;

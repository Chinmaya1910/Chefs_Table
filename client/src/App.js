
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ChefsTable from'./components/ChefsTable';
import ItemModel from './components/ItemModel';
import Footer from './components/footer';
import {Container} from 'reactstrap';


import {Provider} from 'react-redux';
import store from './store';

//Load User Action
import {loadUser} from './actions/authActions';
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Provider store={store}>
    <div className="App">
     <AppNavbar/>
     <Container>
     <ItemModel/>
     <ChefsTable/>
     <Footer/>
     </Container>
    </div>
    </Provider>
  );
  }
}

export default App;

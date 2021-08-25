import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import Burgerbuilder from './containers/Burgeruilder/Burgerbuilder';
import Aux from './hoc/Aux'
import Burger from './components/Burger/Burger';


class App extends Component {
  render(){
    return(
      <Aux>      <Burgerbuilder/>   </Aux>
    
    )
  }
}

export default App;

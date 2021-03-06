import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import Burgerbuilder from './containers/Burgeruilder/Burgerbuilder';
import Aux from './hoc/Aux'
import Checkout from './containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom'
import Orders from "./containers/Orders/Orders"



class App extends Component {  
  render(){
    return(
      <Aux>
          <Layout>
          <Switch>
            <Route path="/" exact   component={Burgerbuilder} />
            <Route path="/orders" component={Orders} />

            <Route path="/checkout" component={Checkout} />
          </Switch>

          </Layout> 
        </Aux>
    
    )
  }
}

export default App;

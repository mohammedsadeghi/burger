import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import Burgerbuilder from './containers/Burgeruilder/Burgerbuilder';
import Aux from './hoc/Aux'



class App extends Component {  
  render(){
    return(
      <Aux>
          <Layout>
            <Burgerbuilder/>
          </Layout> 
        </Aux>
    
    )
  }
}

export default App;

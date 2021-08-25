import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class Burgerbuilder extends Component {
    state={
        ingridients:{
            salad:0,
            bacon:0,
            cheese:2,
            meat:0
        }
    }
    
    render(){
        
        return(
            <div><Burger ingridient={this.state.ingridients}  /></div>
          
                
           
        )
    }
}
export default Burgerbuilder;
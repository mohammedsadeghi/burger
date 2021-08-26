import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';


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
            <div>
                <Burger ingridient={this.state.ingridients}  />
                <Buildcontrols />
            </div>
          
                
           
        )
    }
}
export default Burgerbuilder;
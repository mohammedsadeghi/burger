import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummery from '../../components/Burger/ordersummery/Ordersummery';
const INGREDIENTS_PRICES={
    meat:1,
    cheese:0.5,
    bacon:2,
    salad:0.3
};
class Burgerbuilder extends Component {
    state={
        ingridients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        price:4,
        purchasable  : false,
        purchasing : false
    }
    updatepurchase(ingredients){
        const sum = Object.keys(ingredients).map(igkey=>{
           return ingredients[igkey];
        }).reduce((sum,el)=>{
            return sum + el ;
        },0);
        this.setState({purchasable : sum>0})
    }




    addingredienthandler=(type)=>{
        const oldcount = 
        this.state.ingridients[type];
        const updatedcount = oldcount +1;
        const updatedingredients = {
            ...this.state.ingridients
        };
        updatedingredients [type]=updatedcount;
        
        
        
        const oldprice = this.state.price;
        const newprice = oldprice + INGREDIENTS_PRICES[type];
        this.setState({
            price:newprice,ingridients:updatedingredients
        });
        this.updatepurchase(updatedingredients);

    }
    removeingredienthandler=(type)=>{
        if(!this.state.ingridients[type]>0){return;}
        
        const oldcount = 
        this.state.ingridients[type];
        const updatedcount = oldcount -1;
        const updatedingredients = {
            ...this.state.ingridients
        };
        updatedingredients [type]=updatedcount;
        
        
        
        const oldprice = this.state.price;
        const newprice = oldprice -INGREDIENTS_PRICES[type];
        this.setState({
            price:newprice,ingridients:updatedingredients
        })
        this.updatepurchase(updatedingredients);
    }
    purchasehandler=()=>{
        this.setState({purchasing:true})
    }
    purchasecancelhandler = () =>{
        this.setState({purchasing:false})
    }
    purchasecontinuehandler =()=>{
        alert("KEEP CONTINUE")
    }
    render(){
        const disabledinfo = {
            ...this.state.ingridients
        };//console.log(disabledinfo)
        for (let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key]<=0
        }
        
        return( 
            <div>
                <Modal show={this.state.purchasing}modalclose={this.purchasecancelhandler}>
                    <Ordersummery price={this.state.price} cancel={this.purchasecancelhandler}
                     ingredients={this.state.ingridients}
                     continue={this.purchasecontinuehandler}/>   
                </Modal>
                <Burger ingridient={this.state.ingridients} />
                <Buildcontrols
                 removeingredient={this.removeingredienthandler} 
                 ingridientadded={this.addingredienthandler} 
                 disabled={disabledinfo}
                 price={this.state.price}
                 purchasable={this.state.purchasable}
                 ordered={this.purchasehandler}/>
                
            </div>
          
                
           
        )
    }
}
export default Burgerbuilder;
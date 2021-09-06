import React,{Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummery from '../../components/Burger/ordersummery/Ordersummery';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/spinner/Spinner';
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
        purchasing : false,
        loading : false
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
        updatedingredients[type]=updatedcount;
        
        
        
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
        updatedingredients[type]=updatedcount;
        
        
        
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
        this.setState({loading:true})
        const order = {
            ingredients:this.state.ingridients,
            price:this.state.price,
            customer:{
                name:"MOHAMMAD"
            }
        }
        axios.post('/orders.json',order)
        .then(response=>{this.setState({loading:false,purchasing:false})
        ;console.log(response)})
        .catch(error=>this.setState({loading:false,purchasing:false}))
        
        }
    render(){
        const disabledinfo = {
            ...this.state.ingridients
        };//console.log(disabledinfo)
        for (let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key]<=0
        }
        let ordersummery =<Ordersummery price={this.state.price} cancel={this.purchasecancelhandler}
        ingredients={this.state.ingridients}
        continue={this.purchasecontinuehandler}/>;
        if(this.state.loading){
            ordersummery=<Spinner/>;
        }
        
        return( 
            <div>
                <Modal show={this.state.purchasing}modalclose={this.purchasecancelhandler}>
                    {ordersummery}
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
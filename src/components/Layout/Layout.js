import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Toolbar from '../navigation/Toolbar/Toolbar';
import Classes from './Layout.module.css'
import Sidedrawer from '../navigation/Sidedrawer/Sidedrawer';



class Layout extends Component{
    state={
        showsidedrawer:false
    }
    sidedrawerhandle=()=>{
        this.setState({showsidedrawer:false})
    }
    clicked=()=>{
        this.setState((prevState)=>{
           return {showsidedrawer:!prevState.showsidedrawer}})
    }
    render()
    {
        return(
       <Aux>
           <Toolbar clicked={this.clicked}/>
           <Sidedrawer closed={this.sidedrawerhandle}
            open={this.state.showsidedrawer}/>
           <main className={Classes.Content}>
               {this.props.children}
           </main>
       </Aux>
    )}
}
export default Layout;


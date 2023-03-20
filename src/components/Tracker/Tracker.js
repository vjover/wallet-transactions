import React, { Component } from 'react';
import './Tracker.css';
import fire from '../../config/Fire';
import SendTransaction from './Transaction/SendTransaction';
import Balance from './Balance';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from 'button-vjover';



class Tracker extends Component {
    
    state = {
       
        currentUID: fire.auth().currentUser.uid
    }

    // logout function
    logout = () => {
        window.location.reload(false);
        fire.auth().signOut();
        
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value !=="0" ? e.target.value : ""
        });
    }

   

  

    render(){
        var currentUser = fire.auth().currentUser;
        
        return(
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                         <p className="title">
                         Hola {currentUser.displayName},
                        </p>
                        <Button  label="Log out" kind="primary"   handleClick={this.logout}/>
                 
                    </div>
                </section>
               <section className="trackerBlock container">
                    <div className="welcome column">
                        <ConnectButton  showBalance={true}/>
                        
                
                    </div>
                    <div className="column"> <Balance /> </div>
              
                   

                    
                    <div className="latestTransactions card">
                      
                        <SendTransaction />
                    </div>
                  




                

                </section>
             </div>
        );
    }
}

export default Tracker;
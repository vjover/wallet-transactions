import React, { Component } from 'react';
import './Tracker.css';
import fire from '../../config/Fire';
import SendTransaction from './Transaction/SendTransaction';
import Balance from './Balance';
import { ConnectButton } from '@rainbow-me/rainbowkit';



class Tracker extends Component {
    
    state = {
       
        currentUID: fire.auth().currentUser.uid
    }

    // logout function
    logout = () => {
        fire.auth().signOut();
        window.location.reload(false);
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
                 
                    <button className="exit button is-link" onClick={this.logout}>Log out</button>
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
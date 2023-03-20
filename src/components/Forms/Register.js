import React, {Component} from 'react';
import fire from '../../config/Fire';
import './Reg.css';

class Register extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        let errorNotification = this.state.fireErrors ? 
            ( <div className="help is-danger"> {this.state.fireErrors} </div> ) : null;

        
        return (
            <>
                {errorNotification}
                <h1 className='title is-3'>Sign up</h1>
                <form className="field">
                <div className="control">
                    <input type="text"
                        className="input regField"
                        placeholder="Your Name"
                        value={this.state.displayName} 
                        onChange={this.handleChange}
                        name="displayName"
                        />
                </div>
                <div className="control">
                    <input type="text"
                        className="input regField"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        name="email"
                        />
                </div>
                <div className="control">
                    <input
                        className="input regField"
                        placeholder="Pasword"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                    />
                    </div>
                    <input className="button is-link" type="submit" onClick={this.register} value="REGISTER" />
                </form>
            </>
        );
    }
}
export default Register;
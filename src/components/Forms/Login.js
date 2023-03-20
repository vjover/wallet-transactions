import React, {Component} from 'react';
import fire from '../../config/Fire';
import './Login.css';

class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: ''
    }

    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
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
                <h1 className='title is-3'>Login</h1>
                <form className='field'>
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
                    <input className="button is-link" type="submit" onClick={this.login} value="ENTER" />
                </form>
            </>
        );
    }
}
export default Login;
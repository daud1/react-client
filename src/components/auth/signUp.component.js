import React, { Component } from  'react';
import baseURL from '../generic/base';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';

const paperStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 200,
    padding: '1%',
    textAlign: 'center'    
}

const divStyle = {
    paddingLeft: '35%',
    paddingRight: '35%'    
}

class SignUp extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let url = baseURL + 'auth/register';
        let form = new FormData(event.target);
        
        axios.post(url, form)
        .then(response => {
            notify.show('Registered!', 'success');
            this.props.history.push('/login');
        })
        .catch(error => {
            if (error.response){
                const { data, status } = error.response;
                if (status){
                    notify.show(data.ERR, 'error');
                }
            }
        });
    }

    render() {
        return (
            <div style={divStyle}>
                <Paper style={paperStyle} zDepth={3}>
                    <form onSubmit={this.handleSubmit}>
                    
                        <div>
                            <TextField
                                name='email'
                                type='email'
                                floatingLabelText='Email'
                            />
                        </div>
                        <div>
                            <TextField
                                name='password'
                                type='password'
                                floatingLabelText='Password'
                            />
                        </div>
                        <div>
                            <TextField
                                name='confirm'
                                type='password'
                                floatingLabelText='Confirm Password'
                            />
                        </div>
                        <div>
                            <RaisedButton 
                                type='submit'
                                label='Sign Up'
                                primary
                            />
                        </div>

                    </form>
                    <p> Already have an account? <Link to={'/login'}>Log In</Link></p>
                </Paper>
                
            </div>
        );
    }
}

export default SignUp;
import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component{
    async componentDidMount(){
        // const resp = await axios.get('/api/test');
        // console.log('Server Response: ', resp);

        // const user = await axios.get('/api/user');
        // console.log('User Response: ', user);

        const sendToServer ={
            email: 'jim@mail.com',
            password: 'asdf1234',
        }
        const signInResp = await axios.post('/api/sign-in', sendToServer);
        console.log('Sign in response: ', signInResp)
        
    }

    render(){
        return(
            <h1>This is LearningFuze!~</h1>
        )
    }
}

export default Test;
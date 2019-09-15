import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import localStorage from 'local-storage'
import jwt from 'jsonwebtoken'

import { login } from '../../Publics/Redux/Actions/auth'

class Login extends Component {
    state = { 
        user : {
            email : '',
            password : '',
            remember_me : "false",
            token: '',
            error : ''
        },
     }

     componentDidMount = async() => {
         const token = localStorage.get('token') //mengambil data localStorage dengan key token
         const user = localStorage.get('user')
        if(token){
            // cek token invalid, expired atau true(masi valid)
            jwt.verify(token, 'areydra', (err, decoded) => { 
                if(!err){ //jika token berhasil di verif 
                    window.location = '/provinces'
                }else{ //jika token gagal di verif karna invalid/expired
                    localStorage.remove('token') //maka hapus localStorage token yg mempunyai value lama
                } 
            })
        }

        // jika ada localStorage user
        if (user) {
            let newUser = { ...this.state.user } //destructor(pemecahan) agar key default tidak tereplace
            newUser['email'] = user.email //mengisi value state yg mempunyai key email
            newUser['password'] = user.password

            //maka isi state dengan value seusai dari local storage
            this.setState({ user: newUser })   
         }
     }

     handleForm = event => {    
        let user = {...this.state.user}
        user[event.target.name] = event.target.value        
        this.setState({ user })
     }

     handleLogin = async () => {
        try{
             await this.props.dispatch(login(this.state.user))
             localStorage.set('token', this.props.user.token) 

             if(this.state.user.remember_me === 'true'){ // jika remmember me bernial true/diceklis maka buat localStorage dengan key user
                localStorage.set('user', { email: this.state.user.email, password: this.state.user.password })
             }else{ 
                // jika remmember me bernial false/tidak ceklis maka buat localStorage dengan key user
                localStorage.remove('user') 
             }

        }catch{
            let user = { ...this.state.user }
            user['error'] = 'invalid email or password'

            this.setState({ user })
        }
        
        if(localStorage.get('token')) window.location = '/provinces'
    }
        
    render() { 
        let { email, password, remember_me, error } = this.state.user
        return (
            <Fragment>
                <Link to='/provinces'>Provinces</Link><br/>
                <input type="email" placeholder="Type email here.." name="email" value={email} onChange={this.handleForm} />
                <input type="password" placeholder="Type password here.." name="password" value={password} onChange={this.handleForm} /><br/>
                {
                    (error) ? <p style={{ color: 'red' }}>{ error }</p> : ''
                }
                <input id="remember_me" type="checkbox" name="remember_me" value={(remember_me === "true") ? !remember_me : true} onChange={this.handleForm} />
                <label htmlFor="remember_me">Remember me</label>
                <button onClick={this.handleLogin}>Login</button>
            </Fragment>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        user : state.auth.user
    }
}

export default connect(mapStateToProps)(Login);
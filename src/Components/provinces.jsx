import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'   
import localStorage from 'local-storage'

import { getProvinces } from '../Publics/Redux/Actions/provinces'

class Provinces extends Component {

    componentDidMount = async() =>{
        let token = localStorage.get('token')
        try{
            await this.props.dispatch(getProvinces(token)) // jika ada token maka dispatch 
        }catch{
            window.location = '/login' //jika gagal dispatch / token invalid maka kembali ke login
        }
    }

    render() { 
        return ( 
            <Fragment>
                <h1>Provinces</h1>
                <ul>
                    {
                        (this.props.provinces.length) ?  
                            this.props.provinces.map(province => (
                                <li key={ province.id }>{ province.name }</li>
                            ))
                        :
                            ''
                    }
                </ul>
            </Fragment>
         );
    }
}
  
const mapStateToProps = state => {
    return {
        provinces: state.provinces.provinces
    }
}

export default connect(mapStateToProps)(Provinces);
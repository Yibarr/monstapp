import React, { Component,Fragment } from 'react'
import { createStore, applyMiddleware, bindActionCreators } from 'redux'

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
  } from 'react-native';

// import Login from '../Login/Login'
import ImgUpload from '../ImgUpload/ImgUpload'
import Login from '../Login/Login';

import reducer from '../../reducers/Log'

const store = createStore(reducer)

const action = type => store.dispatch({type})

export class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged:true
        };
      }

    componentSelection(){
        return  store.getState() ? <ImgUpload/> : <Login logged={action}/>
    }  

    render() {
        return (
            <Fragment>
                {this.componentSelection()}
            </Fragment>

        )
    }
}

const styles = StyleSheet.create({
    
  });

export default Screen

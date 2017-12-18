import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text: 'Welcome to JobsApp', color: '#009688'},
    {text: 'An easy way to find jobs', color: '#03A9F4'},
    {text: 'Just set your location and swipe!', color: '#009688'}
]

class WelcomeScreen extends Component {
    onComplete() {
        this.props.navigation.navigate('auth');
    }
    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onComplete.bind(this)} /> 
        );
    }
}

export default WelcomeScreen;

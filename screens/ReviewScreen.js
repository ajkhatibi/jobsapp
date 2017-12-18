import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';

export default class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
        <Button 
        title='Settings' 
        onPress={() => navigation.navigate('setting')}
        backgroundColor='rgba(0,0,0,0)'
        color='rgba(0,122,255,1)'
        />
    )
    });
    render() {
        return (
            <View>
                <Text>Review screen</Text>
            </View>
        );
    }
}
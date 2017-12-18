import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length -1) {
            return (
                <Button
                    title='Onwards!'
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={this.props.onComplete}
                />
            )
        }
    }
    renderSlides() {
        return this.props.data.map((slides, index) => {
            return (
                <View style={[styles.slide, {backgroundColor: slides.color}]} key={slides.text}>
                    <Text style={styles.slideText} >{slides.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            )
        })
    }
    render(){
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    slideText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    buttonStyle: {
        backgroundColor: '#0288D1'

    }
})
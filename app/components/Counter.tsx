import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MainPageDispatchInterface } from '../pages/MainPage';

interface Props
{
    count: number;
}

export default class Counter extends Component<Props&MainPageDispatchInterface>
{
    
    render()
    {
        console.log('counter');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.props.decrementFn.bind(this)}
                    title='减'
                />
                <Text style={styles.label}>{this.props.count}</Text>
                <Button
                    onPress={this.props.incrementFn.bind(this)}
                    title='加'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    label: {
        width: 40,
        textAlign: 'center',
    }
})
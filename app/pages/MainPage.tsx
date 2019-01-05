import React ,{ Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { CounterAction } from "../actions/actions/CounterAction";
import { CombinReducersInterface } from "../reducers/IndexReducers";
import { CounterStateInterface } from "../reducers/reducers/CounterReducer";
import { NavigationInjectedProps } from "react-navigation";

interface Props
{
    
}
interface State
{ 

}

export interface MainPageDispatchInterface
{
    incrementFn: Function;
    decrementFn: Function;
    }

export class MainPage extends Component<Props&CounterStateInterface&MainPageDispatchInterface& NavigationInjectedProps, State>
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>状态:{this.props.navigation.getParam("status")}</Text>
                <Counter incrementFn={this.props.incrementFn} decrementFn={this.props.decrementFn} count={this.props.count}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
});

export default connect(
    (state:CombinReducersInterface):CounterStateInterface => ({
        count:state.counter.count,
    }),
    (dispatch):MainPageDispatchInterface => ({
        incrementFn: () => dispatch(CounterAction.increment(2)),
        decrementFn: () => dispatch(CounterAction.decrement(2)),
    })
)(MainPage)
import React ,{ Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { CounterAction } from "../actions/actions/CounterAction";
import { CombinReducersInterface } from "../reducers/IndexReducers";
import { CounterStateInterface } from "../reducers/reducers/CounterReducer";

interface Props
{
    status: string;
    count?: number;
    incrementFn?: Function;
    decrementFn?: Function;
}
interface State { }

export class MainPage extends Component<Props, State>
{
    render()
    {
        return (
            <View style={styles.container}>
                <Text>状态:{this.props.status}</Text>
                {/* <Button
                    title='Logout'
                    onPress={
                        () =>
                        {
                            
                        }
                    }
                /> */}
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
    (dispatch) => ({
        incrementFn: () => dispatch(CounterAction.increment(2)),
        decrementFn: () => dispatch(CounterAction.decrement(2)),
    })
)(MainPage)
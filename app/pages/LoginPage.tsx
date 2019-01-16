import React,{ Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { LoginStateInterface } from "../reducers/reducers/LoginReducer";
import { LoginAction } from "../actions/actions/LoginAction";
import { CombinReducersInterface } from "../reducers/IndexReducers";
import { NavigationInjectedProps } from "react-navigation";
import { PageList } from "../navigation/PageListEnum";



interface Props
{
    
}

export interface LoginPageDispatchInterface
{
    login: Function;
}

export class LoginPage extends Component<Props & LoginStateInterface &LoginPageDispatchInterface& NavigationInjectedProps>
{
    // shouldComponentUpdate(nextProps, nextState)
    // {
    //     // 登录完成,切成功登录
    //     if (nextProps.status === '登陆成功' && nextProps.isSuccess)
    //     {
    //         console.log("切换页面");
            
    //         this.props.navigation.navigate(PageList.Main, { status: nextProps.status});
    //         return true;
    //     }
    //     return true;
    // }

    render()
    {
        return (
            <View style={styles.container}>
                <Text>状态:{this.props.status}</Text>
                <Button
                    title='Login'
                    onPress={this.props.login.bind(this)}
                />
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
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    }
});



export default connect(
    //属性映射为属性
    (state: CombinReducersInterface):LoginStateInterface => ({
        status: state.login.status,
        isSuccess: state.login.isSuccess,
        user: state.login.user,
    }),
    //dispatch映射为属性
    (dispatch:any):LoginPageDispatchInterface => ({
        login: () => dispatch(LoginAction.StartLogin()),
    })
)(LoginPage)
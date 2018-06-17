/**
 * Created by PutriDamayanti on 6/5/2018.
 */
import React from 'react';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import ListScreen from '../screens/List';
import HomeScreen from "../screens/Home";
import AddTaskScreen from "../screens/AddTask";

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Lists: ListScreen,
        AddTask: AddTaskScreen
    },
    {
        initialRouteName: 'Home',
    }
);

export default class RootComponent extends React.Component {
    render() {
        return <RootStack />;
    }
}
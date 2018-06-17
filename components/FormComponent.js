/**
 * Created by PutriDamayanti on 6/4/2018.
 */
import React, { Component } from 'react';
import { View, Button, TouchableNativeFeedback, Alert, Text, TextInput } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import ajax from "../services/Todo";
import PropTypes from 'prop-types';

export default class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask : ''
        };
        // console.log(this.state);
    }

    static propTypes = {
        task: PropTypes.string.isRequired,
        schedule: PropTypes.string.isRequired
    };

    onSubmit = () => {
        if (this.state.newTask) {
            const add = ajax.addTask(this.props.task);
            Alert.alert('Task successfully added');
            this.setState({newTask : ''});
            return add;
        } else {
            Alert.alert('Please fill task!')
        }
    };

    render() {
        return (
            <View>
                <Text>{this.state.newTask}</Text>
                <FormLabel>Name</FormLabel>
                <FormInput placeholder="Add Task" onChangeText={input => this.setState({newTask : input})}/>
                <TouchableNativeFeedback>
                    <Button title='Add' onPress={() => this.onSubmit()}/>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
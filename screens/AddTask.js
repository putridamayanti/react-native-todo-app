/**
 * Created by PutriDamayanti on 6/13/2018.
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FormComponent from "../components/FormComponent";

export default class AddTaskScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: '',
            schedule: ''
        }
    }

    _onSubmit = () => {
        if (this.state.newTask && this.state.schedule) {
            const add = ajax.addTask(this.state.newTask);
            Alert.alert('Task successfully added');
            this.setState({newTask : ''});
            this.componentDidMount();
            return add;
        } else {
            Alert.alert('Please fill task!')
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <FormComponent task={this.state.newTask} schedule={this.state.schedule}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
});
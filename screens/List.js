/**
 * Created by PutriDamayanti on 6/4/2018.
 */
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TextInput, Alert, TouchableNativeFeedback, ScrollView } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage, CheckBox, Button } from 'react-native-elements';
import HeaderComponent from "../components/HeaderComponent";
import ajax from "../services/Todo";
import ListComponent from "../components/ListComponent";
import FormComponent from "../components/FormComponent";
import Icon from 'react-native-vector-icons/FontAwesome';

export class ListScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            dataList: [],
            dataSource: [],
            newTask: ''
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true});
        try {
            const list = await ajax.fetchList();
            console.log(list);
            this.setState({dataList: list, isLoading: false});
        } catch (e) {
            console.log(e)
        }
    }

    onSubmit = () => {
        if (this.state.newTask) {
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
        let data = this.state.dataList;
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Todo Lists</Text>

                <Button
                    icon={
                        <Icon
                            name='arrow-right'
                            size={15}
                            color='rgba(111, 202, 186, 1)'
                        />
                    }
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5
                    }}
                    title='Add Task'
                    onPress={() => this.props.navigation.navigate('AddTask')}
                />

                <ListComponent lists={this.state.dataList}/>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 20,
    },
    input: {
        padding: 15,
        fontSize: 14,
        backgroundColor: '#ffffff',
        borderRadius: 4
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 44,
        textAlign: 'center'
    },
});

export default ListScreen;
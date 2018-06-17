/**
 * Created by PutriDamayanti on 6/4/2018.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class ListComponent extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        lists: PropTypes.array.isRequired
    };

    render() {
        return (
            <View style={styles.todoList}>
                <FlatList
                    data={this.props.lists}
                    renderItem={({item}) => <CheckBox checked="" title={item.task}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    todoTask: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
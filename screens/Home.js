/**
 * Created by PutriDamayanti on 6/4/2018.
 */
import React, { Component } from 'react';
import { View, Text, Button, Alert, ScrollView, SectionList, StyleSheet } from 'react-native';
import HeaderComponent from "../components/HeaderComponent";

export class HomeScreen extends Component {
    render() {
        return (
            <ScrollView>
                <HeaderComponent/>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Lists"
                    onPress={() => this.props.navigation.navigate('Lists')}
                />
                <Button
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Tapped Button"
                />
                <Button
                    onPress={() => {
                        Alert.alert(
                            'Alert Title',
                            'My Alert Msg',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ],
                            { cancelable: false }
                        )
                    }}
                    title="Multibutton"
                />
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                <Text style={{fontSize:296}}>Scroll me plz</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default HomeScreen;
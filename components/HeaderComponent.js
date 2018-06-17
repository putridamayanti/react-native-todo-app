/**
 * Created by PutriDamayanti on 6/9/2018.
 */
import React from 'react';
import { Header } from 'react-native-elements';

export default class HeaderComponent extends React.Component {
    render() {
        return(
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        );
    }
}
import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class ButtonSkip extends React.Component {

    render() {
        return (
            <TouchableOpacity 
            style={styles.container}
            onPress={() => this.props.clickHandler()} 
            underlayColor="white"
            >
                <View style={styles.Button}>
                    <FontAwesome name="random" size={60} style={styles.Arrow} />
                </View>
            </TouchableOpacity>
        )
    }

}
const styles =  StyleSheet.create({
    container: {
    },
    Button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        backgroundColor: '#ff0000',
        borderRadius: 20,
        margin: 15,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'grey',
        shadowOffset: { height: 8, width: 0 },
    },
    Arrow: {
        color: '#FFFFFF',
    }

});
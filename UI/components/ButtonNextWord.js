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

export default class ButtonNextWord extends React.Component {

    render() {
        return (
            <TouchableOpacity 
            style={styles.container}
            onPress={() => this.props.clickHandler()} 
            underlayColor="white"
            >
                <View style={styles.Button}>
                    <Text style={styles.Next}>Next Word</Text>
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
        width: 300,
        backgroundColor: '#78C928',
        borderRadius: 20,
        margin: 15,
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: 'grey',
        shadowOffset: { height: 8, width: 0 },
    },
    Next: {
        fontSize: 30,
        paddingTop: 20,
        color: '#FFFFFF',
        lineHeight: 24,
        textAlign: 'left',
        fontWeight: 'bold',
    },

});
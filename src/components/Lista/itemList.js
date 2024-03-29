import {Pressable, StyleSheet, Text, View} from 'react-native';

import React from "react";

export default function ItemList (props) {

    const {data, setModalVisible, setItemSelected, handleCompleted} = props;
    
    return (
        <View style={!data.completed ? styles.item : styles.completed}>
            <Text style={!data.completed ? styles.text : styles.textCompleted}>{data.id}</Text>
            <Text style={!data.completed ? styles.text : styles.textCompleted}>{data.descripcion}</Text>
            <Text style={!data.completed ? styles.text : styles.textCompleted}>{data.fecha}</Text>
            <Pressable
                onPress={() => {
                    setModalVisible(true);
                    setItemSelected(data.id);
                    }
                }
            >
                <Text style={[styles.text, styles.actions]}>&#10060;</Text>
            </Pressable>
            {!data.completed && <Pressable
                onPress={() => {handleCompleted(data.id);console.log(data)}}
            >
                <Text style={[styles.text, styles.actions]}>&#10003;</Text>
            </Pressable> }
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor:'#fff',
        borderRadius:20,
        // borderWidth:2,
        // borderStyle:'solid',
        // borderColor: '#1E90FF',
        margin: 10,
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    completed:{
        backgroundColor:'#F2F2F2',
        borderRadius:20,
        margin: 10,
        height:80,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    text:{
        fontFamily:'Roboto'
    },
    textCompleted:{
        color:'white'
    },
    actions:{
        fontSize:20
    }
})
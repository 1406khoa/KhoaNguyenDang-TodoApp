import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { ITodo } from "../../type/model";

interface ListTodoProps {
    todos: ITodo[];
}

const ListTodo: React.FC<ListTodoProps> = ({todos}) => {
   
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style = {styles.listItems}>{item.title}</Text>
                )}
                style={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        width: '100%',
    },

    listItems: {
        marginVertical: 10,
        borderWidth: 2,
        width: '100%',
        textAlign: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f0e68c', // Changed to a softer color
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3, // For Android shadow
    },

    listContainer: {
        width: '100%',
    },
});

export default ListTodo;
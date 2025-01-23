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
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'yellow',
    },

    listContainer: {
        width: '100%',
    },
});

export default ListTodo;
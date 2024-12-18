import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserListScreen from './UserListScreen';


const UserList = () => {
  return (
    <View style={styles.container}>
    <UserListScreen/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default UserList;

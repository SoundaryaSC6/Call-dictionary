import React, { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue} from 'react-native-responsive-fontsize';

const MyComponent = () => {
  const [names, setNames] = useState([]); 
  const [filteredNames, setFilteredNames] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const [notFound, setNotFound] = useState(false); 
  const navigation = useNavigation();

  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setNames(data);
      setFilteredNames(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = names.filter((item) =>
      item.username.toLowerCase().includes(query.toLowerCase()) 
    );
    setFilteredNames(filtered);
    setNotFound(false); 
  };

  const handleSelectSuggestion = (username) => {
    setSearchQuery(username);
    setFilteredNames([]);
    navigateToUser(username);
  };

  const handleEnterPress = () => {
    if (!names || names.length === 0) {
      setNotFound(true);
      return;
    }

    if (!searchQuery || searchQuery.trim() === '') {
      setNotFound(true);
      return;
    }

    const match = names.find(
      (item) =>
        item.username && item.username.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if (match) {
      setNotFound(false); 
      navigation.navigate('UserDetailsScreen', { item: match });
    } else {
      setNotFound(true); 
      setFilteredNames([]);
    }
  };

  const navigateToUser = (username) => {
    const match = names.find(
      (item) => item.username.toLowerCase() === username.toLowerCase()
    );
    if (match) {
      setNotFound(false);
      navigation.navigate('UserDetailsScreen', { item: match });
    } else {
      setNotFound(true);
    }
  };

  return (
    <View style={styles.searchbar_container}>
      <Searchbar
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchQuery}
        onSubmitEditing={handleEnterPress}
        style={styles.searchbar}
      />

      {searchQuery.length > 0 && filteredNames.length > 0 && (
        <FlatList
          data={filteredNames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectSuggestion(item.username)}>
              <Text style={styles.suggestion}>{item.username}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {notFound && (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>User not found!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar_container: {
    display: 'flex',
    marginTop: hp('2%'),
    marginLeft: wp('4%'), 
  },
  searchbar: {
    display: 'flex',
    top: hp('1%'),
    marginBottom: wp('2%'),
    backgroundColor: 'white',
    width: wp('80%'),
    borderWidth: wp('0.5%'),
    borderColor: 'black',
  },
  suggestion: {
    width: wp('50%'),
    padding: wp(2),
    fontSize: RFValue(15),
    borderBottomWidth: wp(1),
    borderColor: '#f0f0f0',
    color: '#3c3c3c',
  },
  notFoundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp('1%'),
    marginBottom: wp('5%')
  },
  notFoundText: {
    color: '#90021F',
    fontSize: RFValue(14),
    fontWeight: 'bold',
  },
});

export default MyComponent;

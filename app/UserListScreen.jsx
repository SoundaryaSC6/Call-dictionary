import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import SearchBar from './SearchBar';
import { RFValue } from 'react-native-responsive-fontsize';

const UserListScreen = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchNames();
  }, [page]);

  const fetchNames = async () => {
    if (loading) return; // Prevent duplicate fetches

    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=10`);
      const data = await response.json();

      if (data.length < 5) {
        setHasMore(false);
      }

      setNames((prevNames) => [...prevNames, ...data]); // Append new users to the list
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (item) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('UserDetailsScreen', { item });
    }, 1000);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item)}>
      <View style={styles.card}>
        <Image
          style={styles.profileImage}
          source={{ uri: `https://picsum.photos/200?random=${item.id}` }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.username}</Text>
          <View style={styles.line}></View>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#004182" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/box-1 image.png')}
        />
      </View>

      <SearchBar />

      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
        onEndReached={() => hasMore && setPage((prevPage) => prevPage + 1)}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D4D4',
  },
  loadingText: {
    marginTop: hp('2%'),
    fontSize: RFValue(16),
    color: '#004182',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  image: {
    width: wp('20%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
  listContainer: {
    paddingHorizontal: wp(1),
    paddingBottom: hp(0.1),
  },
  card: {
    width: wp('80%'),
    marginTop: wp('4%'),
    marginVertical: hp('0.5%'),
    flexShrink: 0,
    backgroundColor: '#D4D4D4',
    borderRadius: 10,
    elevation: 1,
    flexDirection: 'row',
    paddingVertical: hp('1%'),
    alignItems: 'center',
  },
  profileImage: {
    width: wp('24%'),
    height: wp('24%'),
    borderRadius: wp('50%'),
    borderWidth: 5,
    borderColor: '#003E7F',
    marginHorizontal: wp('2%'),
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
    textAlign: 'left',
    marginTop: hp('0.1%'),
    marginBottom: hp('0.1%'),
  },
  line: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: hp('1%'),
  },
  email: {
    fontSize: RFValue(12),
    color: 'black',
    textAlign: 'left',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});

export default UserListScreen;

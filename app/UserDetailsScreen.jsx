import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        </Appbar.Header>
        <Text style={styles.title}>No Item Found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="" />
      </Appbar.Header>

      <View style={styles.contentContainer}>
        <Image

          source={{ uri: `https://picsum.photos/200?random=${item.id}` }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.first}>
            <Text style={styles.label}>Username:</Text> {item.username || 'Not available'}
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.Name}>
            <Text style={styles.label}>Name:</Text> {item.name || 'Not available'}
          </Text>
          <Text style={styles.Email}>
            <Text style={styles.label}>Email:</Text> {item.email || 'Not available'}
          </Text>
          <Text style={styles.Company}>
            <Text style={styles.label}>Company:</Text> {item.company?.name || 'Not available'}
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.AddressHeading}>Address:</Text>

          <Text style={styles.Street}>
            <Text style={styles.label}>Street:</Text> {item.address?.street || 'Not available'} 
          </Text>
          <Text style={styles.City}>
            <Text style={styles.label}>City: </Text>{item.address?.city || 'Not available'}
          </Text>
          <Text style={styles.Zipcode}>
            <Text style={styles.label}>Zipcode: </Text>{item.address?.zipcode || 'NA'}
          </Text>
          <View style={styles.line}></View>
          <Text style={styles.website}>
            <Text style={styles.websitelabel}>Website: </Text>
            {item.website ? item.website.replace(/<[^>]+>/g, '') : 'NA'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 0,
    padding: 20,
    marginTop: hp('5%'),
    backgroundColor: 'white',
    marginLeft: wp('1%'),
    marginRight: wp('1%'),
  },

  contentContainer: {
    flexDirection: 'row',
    marginTop: hp('1%'),
    width: wp('90%'), 
    height: hp('65%'), 
    backgroundColor: '#D4D4D4',
    justifyContent: 'flex-start',
    marginLeft: wp('1%'),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10, 
  },
  
image: {
  width: wp('24%'),
  height: wp('24%'),
  borderRadius: wp('50%'),
  borderWidth: 5,
  borderColor: '#003E7F',
  marginHorizontal: wp('2%'),
  resizeMode: 'cover',
  marginTop: wp('2%'), 
},

  detailsContainer: {
    marginLeft: wp('2%'),
  },

  first: {
    marginTop: hp('2%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
  },
  line: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: hp('1%'),
  },
  Email: {
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
  },
  Name: {
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
  },
  Company: {
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
  },
  AddressHeading: {
    fontWeight: 'bold',
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
  },
   
  Street: {
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
    fontStyle: 'normal',
  },

  City:  {
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
    fontStyle: 'normal',
  },

  Zipcode: {
    marginTop: hp('1%'),
    width: wp('60%'),
    height: hp('5%'),
    flexWrap: 'wrap', 
  },

  label: {
    fontWeight: 'bold',
    color: 'black',
  },

  website: {
    fontSize: RFValue(14),
    color: '#00bfff',
    marginTop: hp('1%'),
  },
  websitelabel: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: hp('1%'),
  },
});

export default DetailsScreen;

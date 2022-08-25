import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {sys_styles, sys_text_styles, API_KEY_MAPS} from '../../utils/constants';
import * as store from './store';
import {LoadingIndicator} from '../../components';

export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      {store.state.loading && store.state.location == null ? (
        <LoadingIndicator />
      ) : (
        <View style={sys_styles.container}>
          <MapView
            style={styles.containerMaps}
            region={{
              latitude: store.state.location.coords.latitude,
              longitude: store.state.location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: store.state.location.coords.latitude,
                longitude: store.state.location.coords.longitude,
              }}
              title={store.state.title}
            />
          </MapView>
          <View style={styles.containerSearch}>
            <GooglePlacesAutocomplete
              placeholder="Enter Location"
              minLength={2}
              onPress={(data, details = null) =>{
                store.state.setLatitude(details.geometry.location.lat);
                store.state.setLongitude(details.geometry.location.lng);
                store.state.setTitle(details.name);
                console.log(details);
              }}
              autoFocus={false}
              fetchDetails
              listViewDisplayed="auto"
              query={{
                key: API_KEY_MAPS,
                language: 'en',
                types: 'geocode',
              }}
              currentLocation={true}
            />
          </View>
        </View>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  },
  containerMaps: {
    width: '100%',
    height: '100%',
  },
  containerSearch: {
    position: 'absolute',
    top: 0,
    padding: 10,
    width: '100%',
    height: '15%',
  },
});

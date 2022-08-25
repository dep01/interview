import {store} from '@risingstack/react-easy-state';
import Geolocation from '@react-native-community/geolocation';
import Convert from '../../model/locationModel';

export const state = store({
  loading: false,
  title:"My Location",
  setTitle(val){
    state.title = val
  },
  location: Convert.objectOflocationModel({
    coords: {latitude: -6.2193664, longitude: 106.8171264},
  }),
  setLongitude(val){
    state.location.coords.longitude = val
  },
  setLatitude(val){
    state.location.coords.longitude = val
  }
});
export async function initialized() {
  state.loading = true;
  Geolocation.getCurrentPosition(
    info => (
      (state.location = Convert.objectOflocationModel(info)),
      (state.loading = false)
    ),
  );
}
export function cleanUp() {
  state.loading = false;
  state.title ="My Location";
  state.location = null;
}

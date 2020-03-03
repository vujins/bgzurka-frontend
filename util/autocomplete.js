import { google_api_url } from '../config';

export default function autocomplete(input) {
  // must import here because it reaches for the dom
  const scriptjs = require('scriptjs');

  scriptjs(google_api_url, () => {
    const autocomplete = new google.maps.places.Autocomplete(
      input,
      {
        fields: ['formatted_address', 'geometry'],
        componentRestrictions: { country: 'rs' }
      }
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      // TODO doradi ovo i zapamti kordinate
      console.log(place);
      console.log(
        place.geometry &&
          place.geometry.location &&
          place.geometry.location.lat()
      );
      console.log(
        place.geometry &&
          place.geometry.location &&
          place.geometry.location.lng()
      );
      // location = {
      //   addres: 
      // }

      // TODO return some data about location
    });
  });
}

import { google_api_url } from '../config';

export default function autocomplete(input, setPlace) {
  // must import here because it reaches for the dom
  const scriptjs = require('scriptjs');

  scriptjs(google_api_url, () => {
    const autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ['formatted_address', 'geometry.location'],
      componentRestrictions: { country: 'rs' }
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      setPlace(
        place && place.formatted_address,
        place &&
          place.geometry &&
          place.geometry.location &&
          place.geometry.location.lat(),
        place &&
          place.geometry &&
          place.geometry.location &&
          place.geometry.location.lng()
      );
    });
  });
}

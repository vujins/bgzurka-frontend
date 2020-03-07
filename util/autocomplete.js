import { google_api_url } from './config';

export default function autocomplete(input, setPlace) {
  // corner case
  if (!input) return;

  // must import here because it reaches for the dom
  const scriptjs = require('scriptjs');

  scriptjs(google_api_url, () => {
    const options = {
      // fields: ['formatted_address', 'geometry.location'],
      fields: ['name', 'geometry.location'],
      componentRestrictions: { country: 'rs' }
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      setPlace(
        place && place.name,
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

    // prevent submit if someone presses enter, enter key code = 13
    input.onkeydown = e => {
      if (e.keyCode === 13) e.preventDefault();
    };
  });
}

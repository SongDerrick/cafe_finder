import { useState, useMemo } from 'react';
import {
  useLoadScript,
  GoogleMap,
  Marker,
  Circle,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import styles from '../styles/globals.css';

const Map = () => {
  const [lat, setLat] = useState(27.672932021393862);
  const [lng, setLng] = useState(85.31184012689732);

  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCPZXh9sRNiJrC3HtPfeymM72UDJ3wpLD0',

    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.sidebar}>
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete onAddressSelect={(address) => {
          getGeocode({ address: address }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);

            setLat(lat);
            setLng(lng);
          });
        }} />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '200px', height: '200px' }}
        onLoad={(map) => console.log('Map Loaded')}
      >
        <Marker position={mapCenter} onLoad={() => console.log('Marker Loaded')} />

        {[1000, 2500].map((radius, idx) => {
          return (
            <Circle
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log('Circle Load...')}
              options={{
                fillColor: radius > 1000 ? 'red' : 'green',
                strokeColor: radius > 1000 ? 'red' : 'green',
                strokeOpacity: 0.8,
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

const PlacesAutocomplete = ({ onAddressSelect }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className={styles.autocompleteWrapper}>
      <input
        value={value}
        className={styles.autocompleteInput}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="123 Stariway To Heaven"
      />

      {status === 'OK' && (
        <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default Map;

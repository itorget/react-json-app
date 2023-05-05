import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Enhetsliste() {
  const [enheter, setEnheter] = useState([]);

  useEffect(() => {
    hentEnheter();
  }, []);

  const hentEnheter = async () => {
    try {
      const response = await axios.get('https://github.com/itorget/react-json-app/blob/master/public/enheter.json');
      console.log(response.data);
      setEnheter(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Legg til kode for å vise enhetene på nettsiden */}
    </div>
  );
}

export default Enhetsliste;

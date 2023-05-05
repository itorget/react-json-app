import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Enheter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://github.com/itorget/react-json-app/blob/master/public/enheter.json',
      );

      setData(result.data._embedded.enheter);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Enheter i kommunen</h1>
      <ul>
        {data.map(item => (
          <li key={item.organisasjonsnummer}>
            {item.navn}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Enheter;

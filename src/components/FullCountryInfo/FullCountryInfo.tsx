import React, {useCallback, useEffect, useState} from 'react';
import {Country} from '../../type';
import axios from 'axios';

interface Props {
  alpha3Code: string | null;
}

const FullCountryInfo: React.FC<Props> = ({alpha3Code}) => {
  const [country, setCountry] = useState<Country | null>(null);

  const fetchCountry = useCallback(async () => {
    if (alpha3Code !== null) {
      const URL = 'https://restcountries.com/v2/alpha/' + alpha3Code;
      const {data: country} = await axios.get<Country>(URL);
      if (!country.borders) {
        country.borders = ['Not bordered'];
      }
      setCountry(country);
    }
  }, [alpha3Code]);

  useEffect(() => {
    void fetchCountry();
  }, [fetchCountry]);

  if (alpha3Code) {
    return (
      <div className="card">
        <img src={country?.flag} className="card-img-top w-50" alt={country?.alpha3Code}/>
        <div className="card-body">
          <h1 className="card-title">{country?.name}</h1>
          <ul className="list-group">
            <li className="list-group-item">Capital: {country?.capital}</li>
            <li className="list-group-item">Population: {country?.population}</li>
            <li className="list-group-item">Region: {country?.region}</li>
          </ul>
          <hr/>
          <h5>Bordered with:</h5>
          <ul>
            {country?.borders.map(item => {
              return (
                <li key={Math.random()}> {item}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default FullCountryInfo;
import {useEffect, useState} from 'react';
import {Countries} from './type';

import Appbar from './components/Appbar/Appbar';
import CountryItem from './components/CountryItem/CountryItem';
import axios from 'axios';
import './components/CountryItem/CountryItem.css';
import FullCountryInfo from './components/FullCountryInfo/FullCountryInfo';


function App() {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [alpha3Code, setAlpha3Code] = useState<string|null>(null);
  const fetchData = async () => {
    const URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';
    const countryResponse = await axios.get<Countries[]>(URL);
    const newArray = countryResponse.data.map(country => {
      return {
        name: country.name,
        alpha3Code: country.alpha3Code
      };
    });
    setCountries(newArray);
  };

  useEffect(() => {
    void fetchData();
  }, []);


  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        <section>
          <div className="row mt-2">
            <div className="col-4">
              <div className="country-list">
                <ul className="list-group">
                  {
                    countries.map(item => (
                        <CountryItem
                          key={Math.random()}
                          name={item.name}
                          onClick={() => {
                            setAlpha3Code(item.alpha3Code);
                          }}
                        />
                      )
                    )
                  }
                </ul>
              </div>
            </div>
            <div className="col">
              <FullCountryInfo key={Math.random()} alpha3Code={alpha3Code}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

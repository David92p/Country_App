import axios from 'axios';

import cities from '../../json/citylist.json'


export const countriesNames = []
// cicliamo il Json per avere una lista di nome delle città
Object.keys(cities).forEach(city => {
    countriesNames.push(city)
});

// città generata casualmente dalla lista countriesNames
export const casualCity = countriesNames[Math.floor(Math.random() * 265)]

// environment variables
const API_KEY = process.env.API_KEY;

// chiamata Api tramite valore di input
export const getDataCity = async (city) => {
    const request = await axios.get(API_KEY+city)
    return request
};





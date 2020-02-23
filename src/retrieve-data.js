import axios from 'axios';
import qs from 'qs';

const axiosClient = axios.create({
    baseURL: 'https://api.netatmo.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  
const auth = {
    client_id: '***put your client ID***',
    client_secret: '*** put your client secret***',
    username: '***put your username***',
    password: '***put your password***',
    grant_type: 'password'
  }
  
  axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: 'https://api.netatmo.com/oauth2/token',
    data: qs.stringify(auth)
  })
    .then(respons => {
      console.log('Success');
      console.log(respons.data);
    })
    .catch(() => {
      console.log('Failure');
    });
  
  //retrieve token
export const getAccessToken = () => {
      return axiosClient
        .post('/oauth2/token', qs.stringify(auth))
        .then(respons => {
          console.log('getAccessToken Success');
          return respons.data.access_token;
        })
        .catch(() => {
          console.log('getAccessToken Fail');
        })
    }
  
  //retrieve the data of weather station
export const getStationsData = (token) => {
    const param = {
      access_token: token
    }
      return axiosClient
    .post('api/getstationsdata', qs.stringify(param))
    .then(respons => {
      console.log('getstationsdata Success');
      return respons;
    })
    .catch(() => {
      console.log('getstationsdata Fail');
    })
  }
  
  //action to retrieve
  getAccessToken()
  .then(token => getStationsData(token))
  .then((station) =>{
    const currentData= station.data.body.devices[0].dashboard_data;
    console.log(currentData);
    return currentData;
  });
  

import React from 'react';
import styles from '../src/App.module.css'
import Header from './components/Header';
import Core from './components/Core';
import Forecast from './components/Forecast';

export default class App extends React.Component {

  pog = "Back";

  state = {
    cod : null,
    cnt : 1,
    city : '',
    name : '',
    temp : '',
    windSpeed : '',
    description: '',
    lng: 30.52,
    lat: 50.43
  }

  API_KEY = 'decae521ca39c0d778a1e2023be28cba';
    
    getCurrentWeather = async() => {  
        
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.API_KEY}&lang=ru&units=metric`);
        let data = await response.json();
        try{
          this.setState({
            name : data.name,
            temp: data.main.temp_max,
            windSpeed : data.wind.speed + " М/С",
            description : data.weather[0].description,
            lng: data.coord.lon,
            lat: data.coord.lat 
          });
        }catch(e){
          console.log(e)
          this.setState({
            name: data.message + ":(",
            temp : '',
            windSpeed : '',
            description: '',
            cod: data.cod
          })
        }
        
       console.log(data);
       
    }

    getCity = (e) => {
      this.setState({
        city : e.target.value
      })
    }

  render(){
  return (
    <div className={this.state.description === 'ясно' ? styles.Back
     :  this.state.description === "облачно с прояснениями" ? styles.Back2
     : this.state.description === 'пасмурно' ? styles.Back3
     : this.state.description === 'небольшой дождь' ? styles.Back4
     : this.state.description === 'переменная облачность' ? styles.Back5
     : this.state.cod === "404" ? styles.Back6
     : this.state.description === "" ? styles.Back7
     : ""}>
      <Header />
      <div className={styles.information}>
        <div>
          <Core getCity={this.getCity} 
           getCurrentWeather={this.getCurrentWeather}
           temp={this.state.temp} 
           windSpeed={this.state.windSpeed}
           description={this.state.description}
           name={this.state.name}
           lng={this.state.lng}
           lat={this.state.lat}/>
        </div>
        
      </div>
      <Forecast/>
    </div>
  );
}
}



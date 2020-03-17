import React from 'react';
import styles from '../components/styles.module.css';
import LeftBlock from './LeftBlock';


const Core = (props) => {

    return(
        <div className={styles.CoreInfo}>
            <div className={styles.wrapperInfo}>
                <div>
                <p className={styles.CurrentW}>Погода</p>
                <p className={styles.temp}>Город:  {props.name}</p>
                <p className={styles.temp}>Температура:  {props.temp}</p>
                <p className={styles.temp}>Скорость ветра:  {props.windSpeed}</p>
                <p className={styles.temp}>Состояние неба:  {props.description}</p>
                </div>
                <div className={styles.Map}>
                  
                </div>
                
            </div>
            <LeftBlock getCity={props.getCity} getCurrentWeather={props.getCurrentWeather}/>
        </div>
    )
}
export default Core;
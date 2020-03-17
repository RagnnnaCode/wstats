import React from 'react';
import styles from '../components/styles.module.css';

const Forecast = () => {
    return(
        <div className={styles.Forecast}>
            <div className={styles.IntoForecast}>
                <div className={styles.title}></div>
                <div className={styles.ForecastInfo}>
                    <p>Здесь будет прогноз погоды когда я додумаюсь как использовать хитромудрый Weather API, а пока можно написать мне на почту "enternalplayer@gmail.com" с жалобами на баги, я вас обязательно проигнорирую.</p>
                </div>
            </div>
        </div>
    )
}
export default Forecast;
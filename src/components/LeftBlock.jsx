import React from 'react';
import {useState} from 'react';
import styles from '../components/styles.module.css';

const LeftBlock = (props) => {

    const [advice, setAdvice] = useState({
        advise1 : 'Советуется одеть шапку но мы же все понимаем что ты этого не сделаешь но все же попробуй.',
        advise2 : 'Постарайся одолжить у Мэри Поппинс её зонтик.',
        advise3 : 'Зонтик Мэри Поппинс у тебя уже есть но без теплой куртки тут никак.',
        advise4 : 'Помимо теплой одеждый не забудь захватить перчатки, может удасться поиграть в снежки.',
        advise5 : 'Слушай, лучше сиди дома, ну его...',
        advise6 : 'Хватай плавки и газуй на пляж, быстро!',
        advise7 : 'Так, вставай, бери компаньона и живо дышать свежим воздухом.',
    });

    return(
        <div className={styles.Block}>
            <div className={styles.valueText}>
                    <p className={styles.valueT}>Совет:</p>
                        <p className={styles.advice}>{advice.advise1}</p>
            </div>
                <div className={styles.inputs}>
                <div className={styles.input}>
                    <div class="input-group mb-3">
                        
                        <input onChange={props.getCity} type="text" class="form-control" placeholder="Введите город..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        
                        <div class="input-group-append">
                            <button onClick={props.getCurrentWeather} class="btn btn-outline-secondary" type="button" id="button-addon2">Поиск</button>
                                                 
                        </div>
                    </div>
                </div>  
                {/*<div className={styles.input}>
                    <div class="input-group mb-3">
                        
                        <input type="text" class="form-control" placeholder="Введите страну..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Поиск</button>
                                                 
                        </div>
                    </div>
                </div> */}
            </div>
         </div>
            
    )
}
export default LeftBlock;
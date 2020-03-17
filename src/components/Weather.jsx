import React from 'react';

export class Weather extends React.Component{

    
    render(){
        return(
            <div>
                <form action="" onSubmit={this.getCurrentWeather}>
                <input type="text" name='city'/>
                <button >Получить погоду</button>
                </form>            
            </div>
        )
    }
}
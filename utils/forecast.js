const request = require('postman-request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,showers_sum&current_weather=true&timezone=Asia%2FSingapore'
   
    request({url, json:true}, (error,{body}) => {
        if(error){
            callback('unable to connect to ocation services!')
        }else if(body.error){
            callback('unable to find location. Try another search!', undefined)
        } else{
            callback(undefined, {
                temperature : body.current_weather.temperature
            })
        }
    })

}

module.exports = forecast
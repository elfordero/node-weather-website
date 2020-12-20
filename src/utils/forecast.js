const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ced4fd1e07e51882a2db1044592730ef&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else (
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " 
            + body.current.temperature + " but feels like " + body.current.feelslike 
            + ". The humidity is " + body.current.humidity + "%")
        )
    })
}

module.exports = forecast
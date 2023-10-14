const request = require('postman-request')

const geocode = (address, callback) =>{
    const url = 'https://api.tomtom.com/search/2/geocode/' + encodeURIComponent(address) + '.json?key=KC2xBsG2IElXWrDMDhcBpSMBD52fMZ02'
   
    request({url, json: true}, (error, {body}) => {
        if(error){
           callback('unable to connect to location services!', undefined)
        } else if( body.results.length === 0){
           callback('unable to find location. Try another search!', undefined)
        } else {
               callback(undefined, {
                latitude : body.results[1].position.lat,
                longitude : body.results[1].position.lon
               })
        }
    })
 }
 

 module.exports = geocode
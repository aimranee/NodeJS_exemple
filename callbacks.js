const request = require('request');
const fs=require('fs')

request('https://api.covid19api.com/countries', (error, response, body) => {
    if (error) {
        console.error(`on peut pas envoyer un requet =: ${error.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`error 200 =: ${response.statusCode}.`);
        return;
    }
    countries = JSON.parse(body);
    let ligneContry ='';
    countries.forEach(country => {
        request('https://api.covid19api.com/country/'+country['ISO2'], (err, response, body) => {
            ligneContry+='Country=> ['+country['Country']+'] ,slug =>  ['+country['Slug']+'] , ISO2 => ['+country['ISO2']+']\n';
            fs.writeFile('countries1.csv', ligneContry, (err) => {
                if (err) {
                    console.error(`Could not save the data to a file: ${err}`);
                    return;
                }
                console.log("Les données ont été enregistrées");
            });
            });
            
        });
        

   
});

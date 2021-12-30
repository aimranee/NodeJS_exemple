const axios = require('axios');
const fs = require('fs').promises;
axios.get('https://api.covid19api.com/countries')
    .then((response) => {
        console.log('La récupération terminé avec succès');
        let ligneContry='';
        response.data.forEach(country => {
            ligneContry+='Country=> ['+country['Country']+'] ,slug =>  ['+country['Slug']+'] , ISO2 => ['+country['ISO2']+']\n';
        });
        return fs.writeFile('countries2.csv',ligneContry);
    })
    .then(()=> {
        console.log("Les données enregistrées avec succès");
    })
    .catch((error)=> {
        console.log(error);
    });


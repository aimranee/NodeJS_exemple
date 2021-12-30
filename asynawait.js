const axios = require('axios');
const fs = require('fs').promises;

async function getCountries(){
    try{
        const response=await axios.get('https://api.covid19api.com/countries');
        console.log('La lise récupérée avec succès');
        let ligneContry='';
        response.data.forEach(country => {
            
            ligneContry+='Country=> ['+country['Country']+'] ,slug =>  ['+country['Slug']+'] , ISO2 => ['+country['ISO2']+']\n';
        });
        await fs.writeFile('countries3.csv',ligneContry);
        console.log("Les données enregistrées avec succès");
        }
    catch(error){
        console.log(error)
    }
}
getCountries();


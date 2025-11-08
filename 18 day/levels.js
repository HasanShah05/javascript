const url = 'https://restcountries.com/v2/all?fields=name,capital,languages,population,area'

async function fetchCountries() {
    try{
        const response = await fetch(url,{
            headers:{
                'Accept':'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`)
        }
        const data = await response.json()

        console.log(`total countries:${data.length}`);
        data.forEach(country => {
            console.log(`Name:${country.name}`);
            console.log(`Capital:${country.capital ? country.capital :'N/A'}`);
            console.log(`Languages:${country.languages?Object.values(country.languages).join(', ') :'N/A'}`);
            console.log(`Population:${country.population}`);
            console.log(`Area:${country.area}`);
            console.log('---------------------------');
        });
    }
    catch(error){
        console.error(`Fetch Error`,error.message);
        
    }
}

fetchCountries()

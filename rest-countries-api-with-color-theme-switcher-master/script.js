const countryContainer = document.querySelector('.country-container');
fetch('https://restcountries.com/v3.1/all').then((data)=> data.json())
.then((country)=>{
    //  https://restcountries.com/v3.1/name/{name}

    console.log(country[0])
    country.forEach((country)=>{
     const a = document.createElement('a');

     a.href = `./country.html?name=${country.name.common}`
        const newHTML = `        
        
                <div class="country-card">
                <img src=${country.flags.svg} alt="flag">
                <div class="card-text">
                    <h3 class="country-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString()}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
                </div>
            </div>
        
        `
        a.innerHTML = newHTML
        countryContainer.append(a)
    })

})
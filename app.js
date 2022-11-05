const AfricaBtn = document.querySelector('.africa');
const AmericasBtn = document.querySelector('.americas');
const AsiaBtn = document.querySelector('.asia');
const EuropeBtn = document.querySelector('.europe');
const OceaniaBtn = document.querySelector('.oceania');



let continentsObj = {};
let continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const app = { Africa: [], Americas: [], Asia: [], Europe: [], Oceania: [] };

//https://countriesnow.space/api/v0.1/countries/population/cities/filter

let africaArr = [];
let AsiaArr = [];
let AmericasArr = [];
let EuropeArr = [];
let OceaniaArr = [];

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

async function getContinents() {
  for (let i = 0; i < continents.length; i++) {
    const continentName = continents[i];
    const currentRegion = await fetchData(
      `https://restcountries.com/v3.1/region/${continents[i]}`
    );
    //console.log(currentRegion);
    Object.assign(app, { [continentName]: currentRegion });
    // console.log(currentRegion[i]);
    // let test=currentRegion[i].name.common
    // console.log(test);
  }
  //console.log(app);
  for (let country in app.Africa) {
    let pop = app.Africa[country].population;
    let city = app.Africa[country].name.common;
    africaArr.push(city, pop);
    
  }
  //console.log("africaArr",africaArr);

  for (let country in app.Asia) {
    let pop = app.Asia[country].population;
    let city = app.Asia[country].name.common;
    AsiaArr.push(city, pop);
  }
//   console.log("AsiaArr",AsiaArr);

  for (let country in app.Americas) {
    let pop = app.Americas[country].population;
    let city = app.Americas[country].name.common;
    AmericasArr.push(city, pop);
  }
//   console.log("AmericasArr",AmericasArr);

  for (let country in app.Europe) {
    let pop = app.Europe[country].population;
    let city = app.Europe[country].name.common;
    EuropeArr.push(city, pop);
  }
//   console.log("EuropeArr",EuropeArr);

  for (let country in app.Oceania) {
    let pop = app.Oceania[country].population;
    let city = app.Oceania[country].name.common;
    OceaniaArr.push(city, pop);
  }
//   console.log("OceaniaArr", OceaniaArr);
}
getContinents();



async function chartJs(labels, data, label) {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
            
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }



  const fetchDataCities = async (url,country) => { 
    try {
      const response = await fetch(url,{
        method:"POST",
        headers: {
             Accept: "application/json",
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "limit": 10,
            "order": "asc",
            "orderBy": "name",
            "country": country
        })
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }; 
  

  
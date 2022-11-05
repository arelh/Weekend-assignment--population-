const AfricaBtn = document.querySelector(".africa");
const AmericasBtn = document.querySelector(".americas");
const AsiaBtn = document.querySelector(".asia");
const EuropeBtn = document.querySelector(".europe");
const OceaniaBtn = document.querySelector(".oceania");

let continentsObj = {};
let continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const app = { Africa: [], Americas: [], Asia: [], Europe: [], Oceania: [] };

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
    africaArr.push({ city, pop });
  }
  console.log("africaArr", africaArr);

  for (let country in app.Asia) {
    let pop = app.Asia[country].population;
    let city = app.Asia[country].name.common;
    AsiaArr.push({ city, pop });
  }
  console.log("AsiaArr", AsiaArr);

  for (let country in app.Americas) {
    let pop = app.Americas[country].population;
    let city = app.Americas[country].name.common;
    AmericasArr.push({ city, pop });
  }
  console.log("AmericasArr", AmericasArr);

  for (let country in app.Europe) {
    let pop = app.Europe[country].population;
    let city = app.Europe[country].name.common;
    EuropeArr.push({ city, pop });
  }
  console.log("EuropeArr", EuropeArr);

  for (let country in app.Oceania) {
    let pop = app.Oceania[country].population;
    let city = app.Oceania[country].name.common;
    OceaniaArr.push({ city, pop });
  }
  console.log("OceaniaArr", OceaniaArr);
}
getContinents();



const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "population",
        data: [],
        backgroundColor: "rgb(242, 214, 165,0.6)",
        borderColor: "#777",
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


AfricaBtn.addEventListener("click", () => {
  myChart.data.labels = africaArr.map((element) => {
    return element.city;
  });
  myChart.data.datasets[0].data = africaArr.map((element) => {
    return element.pop;
  });
  myChart.update();
});
AmericasBtn.addEventListener("click", () => {
  myChart.data.labels = AmericasArr.map((element) => {
    return element.city;
  });
  myChart.data.datasets[0].data = AmericasArr.map((element) => {
    return element.pop;
  });
  myChart.update();
});
AsiaBtn.addEventListener("click", () => {
  myChart.data.labels = AsiaArr.map((element) => {
    return element.city;
  });
  myChart.data.datasets[0].data = AsiaArr.map((element) => {
    return element.pop;
  });
  myChart.update();
});
EuropeBtn.addEventListener("click", () => {
  myChart.data.labels = EuropeArr.map((element) => {
    return element.city;
  });
  myChart.data.datasets[0].data = EuropeArr.map((element) => {
    return element.pop;
  });
  myChart.update();
});
OceaniaBtn.addEventListener("click", () => {
  myChart.data.labels = OceaniaArr.map((element) => {
    return element.city;
  });
  myChart.data.datasets[0].data = OceaniaArr.map((element) => {
    return element.pop;
  });
  myChart.update();
});



const fetchCity = async (country) => {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities/filter",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 35,
        order: "asc",
        orderBy: "name",
        country: country,
      }),
    }
  );
  const data = await res.json();
  console.log(data);
};
fetchCity("spain");

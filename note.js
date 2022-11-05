const getContinents = async () => {
  for (let i = 0; i < regions.length; i++) {
    const nameOfRegion = regions[i];
    
    const regionCurrent = await fetchData(
      "https://restcountries.com/v3.1/region/${regions[i]}"
    );
    Object.assign(worldObj, { [nameOfRegion]: {} });
    for (let j = 0; j < regionCurrent.length; j++) {
      Object.assign(woldObj[nameOfRegion], {
        [regionCurrent[j].name.common]: {
          population: regionCurrent[j].population,
        },
      });
      console.log(regionCurrent[j]);
    }
  }
  console.log(worldObj);
};
getContinents();



  function bulidCiteisButtons(arr){
    citeisBtnsContainer.replaceChildren('');
    arr.forEach((element,idx) => {
       const button = document.createElement('button');
       button.classList='citeisBtns city';
       button.setAttribute('data-id',idx);
       button.setAttribute('data-country',element.CommonName);
       button.setAttribute('data-continent',element.continent);
       button.textContent = element.CommonName;
       citeisBtnsContainer.appendChild(button);
    });
 }
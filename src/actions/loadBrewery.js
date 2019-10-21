// export const BREWERIES_LOADED = 'BREWERIES_LOADED'; 

export function getBreweries() {
  return fetch('https://download.oberon.nl/opdracht/brouwerijen.js')
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.breweries;
  })
  .catch((error) => {
    console.error(error);
  });
}
getBreweries()

// const breweriesLoaded = breweries => ( {
//   type: 'BREWERIES_LOADED',
//   payload: breweries
// })

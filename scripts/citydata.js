const cities = [
  {
    name: "Benbrook, TX",
    latitude: 32.6732,
    longitude: -97.4606
  },
  {
    name: "Portland, OR",
    latitude: 45.5051,
    longitude: -122.6750
  },
  {
    name: "Charleston, SC",
    latitude: 32.7765,
    longitude: -79.9311
  },
  {
    name: "Kansas City, MO",
    latitude: 39.0997,
    longitude: -94.5786
  },
  {
    name: "Anchorage, AK",
    latitude: 61.2181,
    longitude: -149.9003
  }
];

const cityDropdown = document.getElementById("citydropdown")

window.onload = () => {
    populateCityDropdown();

}

function populateCityDropdown(){
  let initialOption = new Option("Select City","")
  cityDropdown.appendChild(initialOption);

    for (let city of cities){
            let newOption = new Option(city.name);
            cityDropdown.appendChild(newOption);
        }
    }
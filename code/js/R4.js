const API_KEY = 'f47ca95af9788c870a0f8fe696418673';
const API_URL = 'http://api.weatherstack.com/';
const tableBody = document.querySelector('.table-body');
const formNewCity = document.querySelector('#formNewCity');
const textNewCity = document.querySelector('#textNewCity');
const buttonNewCity = document.querySelector('#buttonNewCity');
const messageSuccess = document.querySelector('.message-success');
const messageError = document.querySelector('.message-error');

const cities = [
  "New York",
  "Madrid",
  "Turin",
  "London",
  "Tokyo",
  "Cali"
]


const getCity = async (city) => {
  const res = await fetch(`${API_URL}current?access_key=${API_KEY}&query=${city}`);
  const data = await res.json();
  return data;
}
const getRow = data => {
  return `
          <td>${data.location.name}</td>
          <td>${data.location.country}</td>
          <td>${data.location.localtime}</td>
          <td>${data.current.temperature}</td>
          <td>${data.current.wind_speed}</td>
          <td>${data.current.weather_descriptions[0]}</td>
          <td>
            <img src='${data.current.weather_icons[0]}' />
          </td>
          `;
}



window.addEventListener( 'load' , async () => {
  cities.forEach( async city => {    
    const data = await getCity(city);
    if(data.hasOwnProperty('success') && data.success == false){
      messageError.style.display = 'flex';
      setTimeout(() => {
        messageError.style.display = 'none';
      }, 800);
    }else{
      messageSuccess.style.display = 'flex';
      setTimeout(() => {
        messageSuccess.style.display = 'none';
      }, 800);
      const rowElement = document.createElement('tr');
      rowElement.innerHTML = getRow(data);
      tableBody.appendChild(rowElement);
    }
    // const rowElement = document.createElement('tr');
    // rowElement.innerHTML = `<td>${city}</td>`
    // tableBody.appendChild(rowElement);
  })

  formNewCity.addEventListener( 'submit' , async e => {
    e.preventDefault();
    const textCity = textNewCity.value;
    textNewCity.value = '';
    const data = await getCity(textCity);
    if(data.hasOwnProperty('success') && data.success == false){
      messageError.style.display = 'flex';
      setTimeout(() => {
        messageError.style.display = 'none';
      }, 800);
    }else{
      messageSuccess.style.display = 'flex';
      setTimeout(() => {
        messageSuccess.style.display = 'none';
      }, 800);
      const rowElement = document.createElement('tr');
      rowElement.innerHTML = getRow(data);
      tableBody.appendChild(rowElement);
    }
  })

})
window.addEventListener("load", async function () {
  let getData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1d0f62128d7b44ec945105511231302&q=cairo&days=3`
  );
  let dataArr = await getData.json();
  console.log(dataArr);
  let daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function curDayDispaly() {
    let DatecurrWe = new Date(dataArr.current.last_updated);
    document.getElementById("dayCur").innerHTML = daysName[DatecurrWe.getDay()];
    document.getElementById("monthCur").innerText =
      DatecurrWe.getDate() + " " + monthsName[DatecurrWe.getMonth()];
    document.getElementById("countryCur").innerHTML = dataArr.location.name;
    document.getElementById(
      "degreeCur"
    ).innerHTML = `${dataArr.current.temp_c}°C`;
    document.getElementById(
      "image-weather"
    ).innerHTML = `<img src=https:${dataArr.current.condition.icon} width='100'>`;
    document.getElementById("cond-name").innerHTML =
      dataArr.current.condition.text;
    document.getElementById("wind-pres").innerHTML = `${
      dataArr.current.wind_degree - 300
    }%`;
    document.getElementById(
      "wind-kph"
    ).innerHTML = `${dataArr.current.wind_kph}km/h`;
    document.getElementById("wind-dir").innerHTML = dataArr.current.wind_dir;
  }
  function nextdayWeath() {
    console.log(dataArr.forecast.forecastday[1].date);
    let DatesecondWe = new Date(dataArr.forecast.forecastday[1].date);
    document.getElementById("dayCur2").innerHTML =
      daysName[DatesecondWe.getDay()];
    document.getElementById("monthCur2").innerText =
      DatesecondWe.getDate() + " " + monthsName[DatesecondWe.getMonth()];
    document.getElementById(
      "image-weather2"
    ).innerHTML = `<img src=https:${dataArr.forecast.forecastday[1].day.condition.icon} width='60'>`;
    document.getElementById("max-degree").innerHTML =
      dataArr.forecast.forecastday[1].day.maxtemp_c;
    document.getElementById("min-degree").innerHTML =
      dataArr.forecast.forecastday[1].day.mintemp_c;
    document.getElementById("cond-name2").innerHTML =
      dataArr.forecast.forecastday[1].day.condition.text;
  }
  function afterdayWeath() {
    let DatesecondWe = new Date(dataArr.forecast.forecastday[2].date);
    document.getElementById("dayCur3").innerHTML =
      daysName[DatesecondWe.getDay()];
    document.getElementById("monthCur3").innerText =
      DatesecondWe.getDate() + " " + monthsName[DatesecondWe.getMonth()];
    document.getElementById(
      "image-weather3"
    ).innerHTML = `<img src=https:${dataArr.forecast.forecastday[2].day.condition.icon} width='60'>`;
    document.getElementById("max-degree2").innerHTML =
      dataArr.forecast.forecastday[2].day.maxtemp_c;
    document.getElementById("min-degree2").innerHTML =
      dataArr.forecast.forecastday[2].day.mintemp_c;
    document.getElementById("cond-name3").innerHTML =
      dataArr.forecast.forecastday[2].day.condition.text;
  }
  curDayDispaly();
  nextdayWeath();
  afterdayWeath();
});

async function getdata(a) {
  let getData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1d0f62128d7b44ec945105511231302&q=${a}&days=3`
  );
  let dataArr = await getData.json();
  let daysName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function curDayDispaly() {
    let DatecurrWe = new Date(dataArr.current.last_updated);
    document.getElementById("dayCur").innerHTML = daysName[DatecurrWe.getDay()];
    document.getElementById("monthCur").innerText =
      DatecurrWe.getDate() + " " + monthsName[DatecurrWe.getMonth()];
    document.getElementById("countryCur").innerHTML = dataArr.location.name;
    document.getElementById(
      "degreeCur"
    ).innerHTML = `${dataArr.current.temp_c}°C`;
    document.getElementById(
      "image-weather"
    ).innerHTML = `<img src=https:${dataArr.current.condition.icon} width='100'>`;
    document.getElementById("cond-name").innerHTML =
      dataArr.current.condition.text;
    document.getElementById("wind-pres").innerHTML = `${
      dataArr.current.wind_degree - 300
    }%`;
    document.getElementById(
      "wind-kph"
    ).innerHTML = `${dataArr.current.wind_kph}km/h`;
    document.getElementById("wind-dir").innerHTML = dataArr.current.wind_dir;
  }
  function nextdayWeath() {
    console.log(dataArr.forecast.forecastday[1].date);
    let DatesecondWe = new Date(dataArr.forecast.forecastday[1].date);
    document.getElementById("dayCur2").innerHTML =
      daysName[DatesecondWe.getDay()];
    document.getElementById("monthCur2").innerText =
      DatesecondWe.getDate() + " " + monthsName[DatesecondWe.getMonth()];
    document.getElementById(
      "image-weather2"
    ).innerHTML = `<img src=https:${dataArr.forecast.forecastday[1].day.condition.icon} width='60'>`;
    document.getElementById("max-degree").innerHTML =
      dataArr.forecast.forecastday[1].day.maxtemp_c;
    document.getElementById("min-degree").innerHTML =
      dataArr.forecast.forecastday[1].day.mintemp_c;
    document.getElementById("cond-name2").innerHTML =
      dataArr.forecast.forecastday[1].day.condition.text;
  }
  function afterdayWeath() {
    let DatesecondWe = new Date(dataArr.forecast.forecastday[2].date);
    document.getElementById("dayCur3").innerHTML =
      daysName[DatesecondWe.getDay()];
    document.getElementById("monthCur3").innerText =
      DatesecondWe.getDate() + " " + monthsName[DatesecondWe.getMonth()];
    document.getElementById(
      "image-weather3"
    ).innerHTML = `<img src=https:${dataArr.forecast.forecastday[2].day.condition.icon} width='60'>`;
    document.getElementById("max-degree2").innerHTML =
      dataArr.forecast.forecastday[2].day.maxtemp_c;
    document.getElementById("min-degree2").innerHTML =
      dataArr.forecast.forecastday[2].day.mintemp_c;
    document.getElementById("cond-name3").innerHTML =
      dataArr.forecast.forecastday[2].day.condition.text;
  }
  curDayDispaly();
  nextdayWeath();
  afterdayWeath();
}
getdata();
function navBar() {
  document.getElementById("listNav").classList.toggle("listshow");
}

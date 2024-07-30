let temp = {};

let setTemp = function() {
  console.log(temp.sys.sunset)
  console.log(new Date(temp.sys.sunset))
  let srcn = `./icons/black/png/256x256/nt_${temp.weather[0].main.toLowerCase()}.png`;
  let src = `./icons/black/png/256x256/${temp.weather[0].main.toLowerCase()}.png`;
  // let srcFinal = ( Date.now() < temp. )
  console.log(src)
  document.querySelector(".temp").innerHTML = `<p>${parseFloat(temp.main.temp)-272.15}</p>`
  document.querySelector("#errormessage").innerHTML = ``
  document.querySelector(".tempdesc").innerHTML = `<p>${temp.weather[0].description}</p>`
  document.querySelector(".location").innerHTML = `<p>${temp.name}</p>`
  document.querySelector(
    ".weathericon"
  ).innerHTML = `<img src=${src}>`;
}

const handlesuccess = function (position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d4ab042ea5178593290b5b09ff94016b`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp)
      temp = resp;
      setTemp();
    });
};

const handleerror = function (error) {
  console.log(error)
  if ((error.code = 1)) {
    // document.querySelector(".temp").innerHTML = `<p>${temp.}</p>`
  }
};

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(handlesuccess, handleerror);
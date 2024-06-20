fetch("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=20240620&end_date=20240630&station=8638445&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&application=declared_space&format=json")
.then((response) => {
    return response.json();
  })
.then((data) => {
    console.log(data);


  })

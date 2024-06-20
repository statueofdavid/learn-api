/*
 * https://tidesandcurrents.noaa.gov/web_services_info.html
 * https://www.ncdc.noaa.gov/cdo-web/
 * https://api.tidesandcurrents.noaa.gov/api/prod/
 * https://api.tidesandcurrents.noaa.gov/mdapi/prod/
 * https://api.tidesandcurrents.noaa.gov/dpapi/prod/
 * https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts
 * chick_station = 8638445
 * nn_station = 8638610
 * TODO find an api for this url: https://waterdata.usgs.gov/monitoring-location/02042770/#parameterCode=62620&period=P7D&showMedian=true
 */ 


fetch("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=20240620&end_date=20240630&station=8638445&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&application=declared_space&format=json")
.then((response) => {
    return response.json();
  })
.then((data) => {
    console.log(data);
  })

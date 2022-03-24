let apiKey = "30584b857c462403f3b7916157ab32b7";

function getApi() {
  let requestUrl = 'https://api.themoviedb.org/3/person/287?api_key='+ apiKey 

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
getApi();

function displaydata(){
  var requestURL = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json';
  fetch(requestURL).then(function(response){
    return response.json();
    }).then(function(data){
      let name = document.querySelector("#name");
      name.innerHTML = '<img src="images/lake.jpg" width=80px height=50px>' + data.result.results[0].stitle ;
  });
}



 

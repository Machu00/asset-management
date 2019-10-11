// fetch('')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     console.log(data)
//   })
//   .catch(err => {
//     // Do something for an error here
//   })



  var postdata = document.getElementById('header');
  
console.log(postdata);

onClick.getElementById('tr') = updateAsset()
onClick(document.getElementById('search'));
document.getElementById('search-btn');
document.getElementsByClassName('btngroup');



//Adding the info to be updated to the variables

var AssetName = document.getElementById('');
var AssetDescription = document.getElementById('');
var AssetClass = document.getElementById('');
var AssetSKU = document.getElementById('');
var AssetDate = document.getElementById('')

//Function for calling update functions
function updateAsset(){
var AssetName = document.getElementById('');
var AssetDescription = document.getElementById('');
var AssetClass = document.getElementById('');
var AssetSKU = document.getElementById('');
var AssetDate = document.getElementById('')
}



var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
var request = new XMLHttpRequest()

request.open('GET', 'http://localhost:8080/assets', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log('movie')
    })
  } else {
    console.log('error')
  }
}

request.send()




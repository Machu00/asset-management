// document.getElementById('name');
// document.getElementById('class');
// document.getElementById('AssetDate');
// document.getElementById('sku');
// document.getElementById('description');



//var AssetName = document.getElementById('name').value;  Added the variable to the function as a local variable


function showMessage(){
    var AssetName = document.getElementById('name').value;
    var AssetSKU = document.getElementById('sku').value;
    var AssetDescription = document.getElementById('description').value;
    var AssetDate = document.getElementById('AssetDate').value;
    var AssetClass = document.getElementById('class').value;


    alert(`Hello Rexford , you added ${AssetName} + ${AssetClass} + ${AssetDate}`);
}

onclick.getElementById('add').showMessage();


function AddAsset(){
    var AssetName = document.getElementById('name').value;
    var AssetSKU = document.getElementById('sku').value;
    var AssetDescription = document.getElementById('description').value;
    var AssetDate = document.getElementById('AssetDate').value;
    var AssetClass = document.getElementById('class').value;

    //add API call for post here 
}



fetch('people.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });



  for(var i = 0; i < data.length; i++){
      //append each person to our page 
      alert('For loop working');
  }



//Creating a div element for table elements in the table

var div = document.createElement('div');

div.innerHTML = 'Name: ' + data[i].firstName + '' + data[i].lastName;

//Take the data in the assigned variable  of the id used in the getElement and use it as below

var maincontainer = document.getElementById('data');
maincontainer.appendChild(div); //appending the data in thr div element as a whole tr to add info to the table.

//write a function for the append data.
function appendData(data){
//writing a function for data appending to the tr of a table.
}



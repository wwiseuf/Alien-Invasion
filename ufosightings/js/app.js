var tableData = data;

var tbody = d3.select("tbody");


function buildTable(arrayData){
arrayData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
}

var button = d3.select("#filter-btn");

button.on("click", filterTable);

function filterTable() {

    d3.event.preventDefault();

    var inputTime = d3.select("#datetime").property("value");

    var inputCity = d3.select("#city").property("value");

    var inputState = d3.select("#state").property("value");

    var inputCountry = d3.select("#country").property("value");

    var inputShape = d3.select("#shape").property("value");

    var filters = {};

    if (inputTime){

        filters["datetime"]=inputTime
    } 
    
    else {
        delete filters["datetime"]
    }

    if (inputCity){

        filters["city"]=inputCity
    }

    else {

        delete filters["city"]
    }

    if (inputState){

        filters["state"]=inputState
    }

    else {
        delete filters["state"]
    }

    if (inputCountry){

        filters["country"]=inputCountry
    }

    else {
        delete filters["country"]
    }

    if (inputShape){

        filters["shape"]=inputShape
    }

    else {
        delete filters["shape"]
    };






    Object.entries(filters).forEach(([key, value]) => {

        filteredData = tableData.filter(ufo => ufo[key] === value); 
    });
        


tbody.html("")
    buildTable(filteredData);
}


buildTable(tableData);
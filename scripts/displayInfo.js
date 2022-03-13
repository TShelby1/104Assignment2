console.log("Script");
// Create an obj literal for the pat saloon
const petSaloon={
    names:"The Fashion Pet",
    address:{
        street:"ave univsersity",
        number:"2622",
        zip:"12345",
        city:"TJ",
        state:"B.C"
    },
    workingHours:{
        open:"9:00am",
        close:"5:00pm"
    },
    //create pets array 
    pets:[]
}


// display the pet saloon info in the footer section of the html
function displaySaloonInfo(){
document.getElementById("footer-info").innerHTML;
}
displaySaloonInfo();


    

// alert('this many animals in array' +  petSaloon.pets.length);
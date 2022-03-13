// create the constructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petBreed=breed;
    this.petService=service;
    this.petOwnerName=ownerName;
    this.petContactPhone=contactPhone;
}
// get information from the inputs
let inputPetName= document.getElementById("txtPetName");
let inputPetAge= document.getElementById("txtPetAge");
let inputPetGender= document.getElementById("txtPetGender");
let inputPetBreed= document.getElementById("txtPetBreed");
let inputPetService= document.getElementById("txtPetService");
let inputPetOwnerName= document.getElementById("txtPetOwnerName");
let inputPetContactPhone= document.getElementById("txtPetContactPhone");

// create some pets
let scooby = new Pet("Scooby",50,"male","goldie","worms","tom","7609876543");
let scrappy = new Pet("scrappy",50,"female","lab","nails","jeff","1234567");
petSaloon.pets.push(scooby,scrappy);

console.log(petSaloon.pets);

function register(){
    console.log(inputPetName.value,inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);
    
    let thePet = new Pet(inputPetName.value, inputPetAge.value, inputPetGender.value, inputPetBreed.value, inputPetService.value, inputPetOwnerName.value, inputPetContactPhone.value);

    console.log(thePet);

    petSaloon.pets.push(thePet);

    displayPetNames();
}

function displayPetNames(){
    document.getElementById("petNames").innerHTML="";
    for(let i=0; i<petSaloon.pets.length; i++){
        document.getElementById("petNames").innerHTML+=`<p id=${i}"><p>Pet Name: ${petSaloon.pets[i].petName}</p><p> Pet Gender: ${petSaloon.pets[i].petGender}</p><p> Pet Breed: ${petSaloon.pets[i].petBreed}</p><p> Pet Service: ${petSaloon.pets[i].petService}</p><p> Pet Owner Name: ${petSaloon.pets[i].petOwnerName}</p><p> Pet Contact Phone Number: ${petSaloon.pets[i].petContactPhone}</p> <button onclick="deletePet(${i});">Delete</button></p>`
    }
}
displayPetNames();

function deletePet(id){
    document.getElementById(id).remove();
    names.splice(id, 1);
}
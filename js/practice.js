
let a = ["red","blue","yellow"];
a.push("orange")
console.log(a);

a.splice(2,0,"green");
console.log(a);

let cart = [
    {
        name: "Pizza",
        price: 240
    },
    {
        name: "Ice cream",
        price: 240
    }
];

let r = cart.find(function(item){
    return item.name === "Ice cream";
})
console.log(r);

/// task 3:
function newHeading(){

    document.getElementById("new-heading").textContent = "New heading";
    document.getElementById("color").style.color = "Red";
}

function welcome(){
    alert("Welcome to the website!");
}

function Oops(){
    alert("You clicked something wrong!");
}

function foodname(){
    const name = document.getElementById("myinput").value;
    document.getElementById("para").textContent = name;

}   
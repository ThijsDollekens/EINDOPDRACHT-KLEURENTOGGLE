// # voor ID! . voor Class!

const body = document.querySelector('#body')
const button2 = document.querySelector('#button2')
const change = document.querySelector('.body-class')
const test = document.querySelector("*") 
const menu = document.querySelector('.img')


myFunction()
function myFunction(){
    var x = document.getElementById("list");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

button1.addEventListener('click', function(a){
    test.classList.remove("red-background")
    test.classList.remove("yellow-background")
    test.classList.remove("purple-background")
    test.classList.remove("green-background")
    //change.classList.add("red-background")
    myFunction()
    body.querySelector('p1').innerHTML = ''
})

button2.addEventListener('click', function(b){
    test.classList.add("red-background")
    test.classList.remove("yellow-background")
    test.classList.remove("purple-background")
    test.classList.remove("green-background")
    //change.classList.add("red-background")
    myFunction()
    body.querySelector('p1').innerHTML = 'Red'
})

button3.addEventListener('click', function(c){
    test.classList.add("yellow-background")
    test.classList.remove("red-background")
    test.classList.remove("purple-background")
    test.classList.remove("green-background")
   // change.classList.add("yellow-background")
   myFunction()
   body.querySelector('p1').innerHTML = 'yellow'
})

button4.addEventListener('click', function(d){
    test.classList.add("purple-background")
    test.classList.remove("red-background")
    test.classList.remove("yellow-background")
    test.classList.remove("green-background")
    //change.classList.add("purple-background")
    myFunction()
    body.querySelector('p1').innerHTML = 'purple'
})

button5.addEventListener('click', function(e){
    test.classList.add("green-background")
    test.classList.remove("red-background")
    test.classList.remove("yellow-background")
    test.classList.remove("purple-background")
    //change.classList.add("green-background")
    myFunction()
    body.querySelector('p1').innerHTML = 'green'
})

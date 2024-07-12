// selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbook = document.querySelector(".addbook")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupbook.style.display = "block"
    popupoverlay.style.display = "block"

})

//cancel button select

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
event.preventDefault();
popupbook.style.display = "none"
popupoverlay.style.display = "none"
})

// select container, addbook, inputs in form
var container = document.querySelector(".container")
var  addbook = document.getElementById("add-book")
var booktitleinput =document.getElementById("book-title-input")
var bookauthorinput =document.getElementById("book-author-input")
var bookdescriptioninput =document.getElementById("book-description-input")

createbook.addEventListener("click", function(e){
    e.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML =`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick='deletebook(event)'>Delete</button>`
    container.append(div)
    popupbook.style.display = "none"
    popupoverlay.style.display = "none"
})

function deletebook(event){
    event.target.parentElement.remove()
}

console.log("this is js file");
shownotes();

// if user add note to the local Strage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesobj))
    addtxt.value = "";
    console.log(notesobj);
    shownotes();

})
// function to show all notes from local Storage
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {

        html += `<div class=" my-2 mx-2 card notecard" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button  onclick="deletenode(${index})" class="btn btn-primary">Delete Note</button>
          </div> 
          </div>`;
        
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = `Nothing to show Use Add a Note Section Above To Add Notes`
    }
}

function deletenode(index) {
    console.log(` i am deleting node ${index + 1}`);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    shownotes();
}
let search = document.getElementById('searchtxt');
search.addEventListener('input',function(){
    
    let inputVal = search.value.toLowerCase();
    console.log("input event fired",inputVal);
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){

        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVal)){
            element.style.display="block";
        }
        else
        element.style.display="none";
        console.log(cardtxt);

    })

})
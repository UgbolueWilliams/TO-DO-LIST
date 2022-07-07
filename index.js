const textInput=document.querySelector(".in")
const addButton=document.querySelector(".ad")
const todoContainer=document.querySelector(".todoContainer")

 let isEditing=false
addButton.addEventListener('click',pickingTask)

function pickingTask(){
    if(isEditing)return modifyText()
    const pickedWord=textInput.value
    todoContainer.innerHTML+=`<div>
            <input type="checkbox"> <p>${pickedWord}</p> <button class="ed">Edit</button> <button class="del">Delete</button>
        </div>`
    
        const allEditButtons=document.querySelectorAll(".ed")
        const allDeleteButtons=document.querySelectorAll(".del")

        allDeleteButtons.forEach((item)=>{
          item.addEventListener('click',deleteItem)   
        })

        allEditButtons.forEach((item)=>{
          item.addEventListener('click',editItem)   
        })
         
        textInput.value=""
}


function deleteItem(e){
    const parent=e.currentTarget.parentElement
    console.log(parent)
    parent.remove()
}
 let sibling
function editItem(e){
  sibling=e.currentTarget.previousElementSibling
  const siblingText=sibling.innerText
  textInput.value=siblingText
  addButton.innerText='Modify'
  isEditing=true
}

function modifyText(){
  sibling.innerText=textInput.value

  isEditing=false
  addButton.innerText="Add"
  textInput.value=""
}
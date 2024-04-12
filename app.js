let navTabs = document.querySelectorAll("a");

const openDiaLog = document.querySelector(".open-dialog");
const closeDialog = document.querySelector(".close-dialog");
const dialogBox = document.querySelector(".dialog-box");
const overLay = document.querySelector(".overlay");

const slider = document.querySelector(".slider");
const alertPage = document.querySelector(".alert-page");
const todoPage = document.querySelector(".todo-page");
const formPage = document.querySelector(".form-page");

const addTodo = document.querySelector(".add-todo");
const putTodo = document.getElementById("put-todo");
const todoList = document.querySelector(".todo-list");
const seach = document.getElementById("search-todo");
const warning = document.querySelector('.warning-text');

let form = document.getElementById("form-container");

// For Navbar Tab

navTabs.forEach( navTab =>{
    navTab.addEventListener("click", (e)=>{
        e.preventDefault();
        // for silder bar
        const startPosition = navTab.offsetLeft;
        slider.style.backgroundColor = "#0a17ff";
        slider.style.width = navTab.offsetWidth + "px";
        slider.style.transform = `translateX(${startPosition}px)`;
        
        //for change page
        
        if(navTab.classList.contains("alert")){
            
            alertPage.classList.remove("disappear");
            todoPage.classList.remove("active");
            formPage.classList.remove("active");
            alertPage.classList.add("active");
            todoPage.classList.add("disappear");
            formPage.classList.add("disappear");
        }
        else if(navTab.classList.contains("todo")){

            todoPage.classList.remove("disappear");
            alertPage.classList.remove("active");
            formPage.classList.remove("active");
            todoPage.classList.add("active");
            alertPage.classList.add("disappear");
            formPage.classList.add("disappear");
        }
        else{
            

            formPage.classList.remove("disappear");
            alertPage.classList.remove("active");
            todoPage.classList.remove("active");

            formPage.classList.add("active");
            alertPage.classList.add("disappear");
            todoPage.classList.add("disappear");
        }
    })
})

//IF  Alert Page Click
openDiaLog.addEventListener("click",showDialog);
closeDialog.addEventListener("click", hideDialog);
//Add new todo list
addTodo.addEventListener("click", addNewItem);
//delete todo list
todoList.addEventListener("click", deleteTodo);
//search todo 
seach.addEventListener("keyup", searchTodo);
// For Form Page
form.addEventListener('submit', checkData);

function showDialog(){
    //open dialog
    dialogBox.classList.add("active");
    overLay.classList.add("active");

}
function hideDialog(){
    //close dialog
    dialogBox.classList.remove("active");
    overLay.classList.remove("active");
};
function addNewItem(){
    //create li tab
    let inputText = putTodo.value;

    if(inputText.length === 0){
        warning.innerText = "Write Something!";
    }else{
        const li = document.createElement("li");
        li.className = "list";
        li.appendChild(document.createTextNode(inputText));
        //add delete icon
        let i = document.createElement("i");
        i.className = "fa-regular fa-trash-can";
        li.appendChild(i);
        //append li with ul
        todoList.appendChild(li);
        putTodo.value = "";
    }
    
}
function deleteTodo(e){
    if(e.target.classList.contains("fa-regular")){
        if(confirm("Are you sure?")){
            const li = e.target.parentElement;
            todoList.removeChild(li);
        }
        
    }    
}
function searchTodo(e){
    const text = e.target.value.toLowerCase();

    const lists = document.querySelectorAll(".list");

    Array.from(lists).forEach(list => {
       let listText = list.firstChild.textContent;

        if(listText.toLowerCase().indexOf(text) !==-1 ){
            list.style.display = "flex";
        }
        else{
            list.style.display = "none";
        }
       
    })
}
function checkData(e){
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('pass');

    const nError = document.querySelector(".name-error");
    const eError = document.querySelector(".email-error");
    const pError = document.querySelector(".pass-error");

    const namePattern = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passPattern = /[a-zA-z0-9!@#$%^&*]{6,16}/;

    if(namePattern.test(name.value)){
        nError.style.display = "none";
        name.classList.remove("box-error");

    }
    else{
        nError.style.display = "block";
        name.classList.add("box-error");

    }

    if(emailPattern.test(email.value)){
        eError.style.display = "none";
        email.classList.remove("box-error");

    }
    else{
        eError.style.display = "block";
        email.classList.add("box-error");

    }

    if(passPattern.test(password.value)){
        
        pError.style.display = "none";
        password.classList.remove("box-error");

    }
    else{
        pError.style.display = "block";
        password.classList.add("box-error");

    }
}

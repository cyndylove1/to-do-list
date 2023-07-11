const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse (localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-check-square">
  `;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}

// const items = document.querySelectorAll('li.list')
// for(let i= 0; i < items.length; i++){
//   items[i].style.backgroundColor = 'yellow',items[i].style.color = 'black';


// }
// console.log(items)

// creating element
// const ul = document.querySelector('ul')
//  const li = document.createElement('li')

// // // adding element
// ul.append(li)
// // modifying the text
// li.innerText = 'x-men'


// modifying attributes

// li.setAttribute('id', 'heading')
// li.removeAttribute('id')

// const title = document.querySelector('#heading')
// console.log(title.getAttribute('id'))

// li.classList.add('list')
// console.log(li.classList.contains('list'))

// const text = document.querySelector('ul')
// const tet = document.querySelector('li')
// text.appendChild(tet)
// tet.innerText = 'word'


// const items = document.getElementsByClassName('list');

// console.log(items.innerText);
// console.log(items.textContent);
// console.log(items.innerHTML);
// const  items = document.querySelector(' li.list')

// console.log(items.innerText)
// console.log(items.textContent)
// console.log(items.innerHTML)
// const ul = document.querySelector('ul')
// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)

// const btned = document.querySelector('.btn2')

// function buttoned(){
//     alert("clickable");
// }
// btned.addEventListener('click', buttoned)

//  const btn = document.querySelector('.btn-3')

//  function button(){
//      btn.style.backgroundColor = 'black' , btn.style.color = 'white';
//  }
// btn.addEventListener('mouseover', button)

// const revealbtn = document.querySelector('.reveal')
// const hiddenbtn = document.querySelector('.hidden')

// function revealed (){

//     if(hiddenbtn.classList.contains('reveal')){
        
//         hiddenbtn.classList.remove('reveal')
//     }else{
//         hiddenbtn.classList.add('reveal')
//     }
//     revealbtn.style.backgroundColor = 'blue'
// }
// revealbtn.addEventListener('click', revealed)

// document.querySelector('#football').addEventListener('click', function(e){
//     console.log("football is clicked")
//     const target = e.target
//     if(target.classList.toggle('#football')){
//         target.style.backgroundColor = 'blue'
        
//     }

// })
// document.querySelector('#basketball').addEventListener('click', function(e){
//     console.log("basketball is clicked")
//     const target = e.target
//     if(target.classList.toggle('#basketball')){
//         target.style.backgroundColor = 'orange'
        
//     }

// })
// document.querySelector('#tennis').addEventListener('click', function(e){
//     console.log("tennis is clicked")
//     const target = e.target
//     if(target.classList.toggle('#tennis')){
//         target.style.backgroundColor = 'purple'
        
//     }

// })
// const list = document.querySelector('#soccer')
// soccer.addEventListener('click', function(e){
//     const target = e.target
//     if(target.classList.toggle('#soccer')){
//         target.style.backgroundColor = 'white'
        
//     }
//     console.log("soccer is clicked")

// })
// document.querySelector('#boxing').addEventListener('click', function(e){
//     console.log("boxing is clicked")
//     const target = e.target
//     if(target.matches('li')){
//         target.style.backgroundColor = 'yellow'
        
//     }

// })
// document.querySelector('#list').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id') + " is clicked")
//     const target = e.target
//     if(target.matches('li')){
//         target.style.backgroundColor = 'yellow'
        
// }


// });


// const list = document.querySelector('#list')
// const listItem = document.createElement('li')
// listItem.innerHTML = 'volley'
// listItem.setAttribute('id', 'volley')
// list.appendChild(listItem)

//  const btn = document.querySelector('#new-quote')
//  const quote = document.querySelector('.quote')
//  const person = document.querySelector('.person')

//  const words  = [{
//     quote: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum optio unde reiciendis rem quidem ipsam ",
//     person: "albert "
// } ,{
//     quote: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum optio unde reiciendis!",
//     person: "alberts "
// } ,{
//     quote: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum optio unde reiciendis rem quidem ipsam laborum aperiam architecto est iste!",
//     person: "alberted"
// } ,{

//  } ,]

// btn.addEventListener('click' , function(){
//     let fig = Math.floor(Math.random() * words.length);
//     quote.innerText = words[fig].quote
//     person.innerText = words[fig].person
// })

//  const li = document.querySelector('#football')
//  football.addEventListener('click' , function(e){
//     const word = e.target
//     word.classList.toggle('#football')
//     word.style.backgroundColor = 'red'
//     console.log("football is clicked")




//  })
const btn = document.querySelector('#btn1')
const button = document.querySelector('#btn2')
const getBody = document.querySelector('#body')
 

function reveal(){
    getBody.style.backgroundColor = 'blue';
    btn.style.display = 'none';
    button.textContent = 'change color';
}
    btn.addEventListener('click' , reveal)

function revealed(){
    getBody.style.backgroundColor = 'yellowgreen';
    button.style.display = 'none';
    btn.style.display = 'block';
    btn.textContent = 'click me';
    
}
    button.addEventListener('click' , revealed)



// const revertBackground = () =>{
//     button.style.display = 'none';
//     btn.style.display = 'block';
//     getBody.style.background = 'greenyellow';
// }
// button.addEventListener('click', revertBackground)
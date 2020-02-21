//adding variables
var id= 1;


//adding elements

  var dateElement = document.getElementById("date");
  var form = document.getElementById("form");
  var input = document.getElementById("input");
  var press = document.getElementById("press");
  var list = document.getElementById("list");
  
//adding calender
const options= {weekday:"long", month:"long", day:"numeric"};
const today = new Date();
dateElement.innerHTML= today.toLocaleDateString("en-US",options);

//adding todo tasks to list
function addTask(task){
    if(input.value === "")  {
        return;
      } else {
             const text = input.value;
             const item = `<li><input type="checkbox" class="complete_task">${text}<label><input type="radio" name="incomplete_task"> </label>
                          </li>`;
               const position = "beforeend";
               list.insertAdjacentHTML(position,item);
               id++;
               form.reset();            
  }
}
//adding button event listener
press.addEventListener("click", addTask);


//adding list event listener
list.addEventListener("click",tickBox);

//adding pending list event listener
list.addEventListener("click",pendingTick );


//adding line through todolist tasks

function tickBox(event) {
const elements = event.target;
if(elements.type === "checkbox") {
  elements.parentNode.style.textDecoration = "line-through";
}
}
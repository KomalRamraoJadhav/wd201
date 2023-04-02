const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    let datecheck =[];
    all.forEach((item) =>
    {
      if(item.dueDate===yesterday && item.completed===false)
      datecheck.push(item);
    })
      return datecheck.reverse();
    }
  

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    let todaydate =[];
    all.forEach((item) =>
    {
      if(item.dueDate===today)
      todaydate.push(item);
    })
    return todaydate.reverse();
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    let laterdate =[];
    all.forEach((item) =>
    {
      if(item.dueDate===tomorrow)
      laterdate.push(item);
    })
    return laterdate.reverse();
  
  }

  const toDisplayableList = (Arr) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    let listdisplay = [];
    Arr.forEach((item,index) =>
    {
      if(item.dueDate===yesterday)
      { 
        if(item.completted===true)
        {
          listdisplay.push("[x]" + " " + item.title + " " + item.dueDate);
        } else {
           listdisplay.push("[ ]" + " " + item.title + " " + item.dueDate);
        }
      }

      if (item.dueDate === today) {
        delete item.dueDate;
        if (item.completed === true)
        {
          listdisplay.push("[x]" + " " + item.title);
        }
        else{
          listdisplay.push("[ ]" + " " + item.title);
        }
      }

      if(item.dueDate === tomorrow) {
        listdisplay.push("[ ]" + " " + item.title + " " + item.dueDate);
      }
    })
    listdisplay.reverse();
        let val = listdisplay.join("\n");
        return val;
     
  }
    
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")



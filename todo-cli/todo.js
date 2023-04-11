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

module.exports = todoList;


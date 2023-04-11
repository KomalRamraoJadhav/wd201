const todoList = require("../todo");
const {all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("todolist test suite", () => {
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

  test("checking todo", () => {
    expect(all.length).toBe(0);

    add({ title: "test new todo.js", dueDate: today, completed: false });

    expect(all.length).toBe(1);

});

test("checks marking a todo as completed  ", () => {

    markAsComplete(0);

    expect(all[0].completed).toBe(true);

});

test("checking retrieval of overdue items.", () => {

    add({ title: "test new todo.js", dueDate: yesterday, completed: false });

    expect(overdue().length).toBe(1);
});

test("checking retrieval of due today items", () => {

    expect(dueToday().length).toBe(1);
});

test("checking retrieval of due later items", () => {

    add({ title: " test new todo.js", dueDate: tomorrow, completed: false});

    expect(dueLater().length).toBe(1);
});

});

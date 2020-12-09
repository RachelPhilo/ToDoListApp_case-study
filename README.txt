Simple ToDoList Web Application 

In this application, first, there is a login session. Users can log in only into the web app using the username “admin” and password “12345”.The login validation is using the concept of “Callback Function”, and redirect to the home page. 

On the home page, there is a welcome note and a navigation bar with menus (Todo List, LogOut).

On the Todo list page,the daily tasks (to-do lists)  is retrived from the API (https://jsonplaceholder.typicode.com/todos) and in that the todos already completed are checked and disabled. 

If you marked 5 todos as completed, then an alert box will pop up and show “ Congrats. 5 Tasks have been Successfully Completed" ,the concept of Promise() for the validation of 5 Completed TodoLists is used.

On clicking on the LogOut menu in the navbar, it redirects to the login page.

 The whole User Interface is responsive by using Bootstrap. 
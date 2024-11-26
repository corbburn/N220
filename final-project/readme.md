### Project Name

Final Project

### Github Link

https://corbburn.github.io/N220/final-project

### Major Features

**Login Form**

- DOM references: password and username inputs
- Logic:
  - username is empty => tell user to fill in username
  - Tell user to enter valid password
    - password is empty
    - password is less than 8 characters
    - password contains no capital letters
    - password contains no numbers
- Events:
  - on login button click check login

**Dashboard**

- DOM references: Display logged in user, logout button, and task list.
- Logic:
  - Show the username of the user currently logged in
  - Display all tasks to the user
  - Show whether or not a task is completed
- Events:
  - on logout button clear the user session and send user to login page
  - when the page loads, display the users tasks

**Task Manipulation**

- DOM references: Task inputs
- Logic:
  - Button for users to add new tasks
  - Box to mark that a task is completed
  - Button for users to remove tasks
  - Edit button for users
    - Lets users change text for task
    - Allows users to assign the task an additional property
- Events:
  - on task button click adds a new task to list
  - on complete button click will complete the task
  - on delete button click will delete the task from the list
  - on edit button click will allow for users to edit a task

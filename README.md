### Who's Next?

[Who's Next](http://whosnext.netlify.com)

## Description
A Random name generator that picks a name at random from a class list. The Lastest update allows for Instructor or DIRs to upload a CSV exported from Schoology, and generate a class list from it.

## Motavation
Our instructor had used a simple random name picker. I wanted to make one that prevented duplicate names and allow the instructor to 'pick' a student if he/she so choose too. It has evolved to include a ExpressJS backend that can store multiple class lists from other instructors.

## Screenshots

### Login or sign up!
![Home Menu](./src/assets/images/screenshot-homemenu.png)

### Register a new account!
![Register](./src/assets/images/screenshot-register.png)

### Upload a new class list from schoology!
![Upload](./src/assets/images/screenshot-upload.png)

### Add some suspense when choosing names when picking a new name!
![Spinner](./src/assets/images/screenshot-spinner.png)

## Features
Randomly picks a student from the list
Upload and parse CSV from Schoology for ease of use!
Animation added for suspense!

## Tech Used

### Client-side

 - Reactjs
 - Formik
 - Yup
 - classnames
 - Cypress
 - TailwindCSS

### Server-side

 - ExpressJS
 - pg-promise
 - Heroku PostgreSQL
 - Heroku CLI
 - PassportJS





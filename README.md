# Description

This project is a front-end React TypeScript application designed to create and display project details in a project management platform.
Users can fill out a form to set up a project by providing essential details such as the project name, description, start date, and status.
Once submitted, the application displays the entered project information on a dedicated project details page.
TailwindCSS is used for styling, ensuring a responsive and visually appealing user interface. The project emphasizes clean code, efficient form validation, and a seamless user experience.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Heroicons
- background picture from pixabay

## Prerequisites

Node.js installed on your machine
npm

## Installation

- Clone the repository to your local machine.
- Navigate to the project directory: cd ProjectManagementUI
- Install dependencies: npm install
- npm install react-router-dom
- npm install react-datepicker
- npm install @heroicons/react

## How to use the website

When a user enters the details of a project inside the project form (from Create Project page) and presses the Submit button, they will be redirected to the Projects page where they can view all the projects.
If the user clicks "Back to Form", the user will be redirected to the Create Project Form and they can enter the details of another project.
Upon submission, both the initial project and the new one will be displayed. Essentially, the user can view all the projects they submit.
Since the projects (the provided data) are not stored in a database, refreshing the page will cause previously submitted projects to be lost.
Therefore, it is crucial for the user to use the "Go to Projects List" and "Back to Form" buttons to navigate between the form and the project details page without refreshing the page.

## Running the Application

1. Install the necessary packages using:
   ```
   npm install
   ```
2. To start the application, run:
   ```
   npm run start
   ```

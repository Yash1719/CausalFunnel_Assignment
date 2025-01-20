# Simple Quiz Application  
**CausalFunnel Assignment ~ By Yash Agarwal**  

## Overview  
A simple quiz application where users can answer questions and view their score at the end. The application is built using **React.js** and **TailwindCSS** for styling. It is fully responsive, ensuring compatibility across mobile, tablet, and desktop devices.  

## Approach  
The development started with creating a basic quiz application where users could answer questions and view their scores. The result section was later enhanced with features like answer comparison and report generation. Finally, additional features were integrated to improve functionality and user experience.  

## Pages  
The application consists of the following pages:  

1. **Home Page:**  
   - Collects user details and validates inputs.  
   - Grants access to the quiz upon successful validation.  

2. **Start Page:**  
   - Displays quiz instructions and fetches questions.  
   - Includes a button to start the quiz.  

3. **Test Page:**  
   - Displays questions along with multiple-choice options.  
   - Features a navigation component for moving between questions.  
   - Includes a timer to show the remaining time for the quiz.  
   - Users can submit the test from this page.  

4. **Result Page:**  
   - Shows the user’s score and correct answers.  
   - Displays a detailed report of the user’s responses.  
   - Allows users to send the report via email.  

## Installation  

To run this project locally, ensure that you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Follow these steps to set up the project:  

1. Clone the repository:  
   ```bash  
   git clone <repository_url>  
2.Navigate to the project directory and install the required dependencies:
  bash
 npm install
3.Start the development server
bash
npm run dev
4.Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Features

#### Required
1. User input validation
2. Timer
3. Question navigation through pagination and question navigation component with status of questions (answered, visited, not visited)
4. Report generation and answers comparision

#### Bonus
1. Responsive design for all devices tablet mobile laptop etc
2. Report generation on Email using EmailJS
3. Better state management using context API
i have copied this change something in it the language part not any tech stack or stuff 

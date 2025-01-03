# SpringBoot1_Course_Registration_System
springboot1

## Overview
This project is a Course Registration System that allows users to register for courses, view available courses, and view details of registered individuals. The system is developed using Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend. The database used is MySQL.

## Features
- **Register for Course:** Users can register for available courses.
- **View Available Courses:** Users can view all available courses.
- **View Registered People Details:** Users can view details of people who have registered for the courses.

## Technology Stack
- **Backend:** Spring Boot (Java)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MySQL
- **Development Tools:** IntelliJ IDEA, Visual Studio Code
- **Platform:** Internet, HP Laptop running Windows (current version)

## Prerequisites
- Java 11 or later
- Node.js and npm
- MySQL
- IntelliJ IDEA
- Visual Studio Code

## Setup Instructions

### Backend (Spring Boot)
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/course-registration-system.git

   Open the Project in IntelliJ IDEA:

Import the project as a Maven project.
Ensure that the Java SDK is set up correctly.
Configure MySQL Database:

Create a database named course_registration.
Update the application.properties file with your MySQL database credentials:
properties
spring.datasource.url=jdbc:mysql://localhost:3306/course_registration
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
Run the Spring Boot Application:

Navigate to the main application class and run it as a Spring Boot application.
Frontend (HTML, CSS, JavaScript)
Navigate to the frontend directory:

cd frontend
Install Dependencies:

npm install
Run the Frontend Application:

npm start
How to Use
Visit the application in your web browser at http://127.0.0.1:5500/index.html
Register for a Course:
Navigate to the course registration page.
Fill in the required details and submit the form.
If registration is successful, you will see a "Course registered successfully" message.
View Available Courses:
Navigate to the available courses page to see a list of all courses.
View Entrolled Courses:
Navigate to the registered people details page to see the list of users registered for each course.
Contributing
Contributions are welcome! Please fork the repository and create a pull request.

License
This project is licensed under the MIT License.

Contact
If you have any questions, feel free to contact us at kaviyarasi1603@gmail.com



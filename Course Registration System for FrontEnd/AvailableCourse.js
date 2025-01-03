// Load the courses on window load
window.onload = function () {
    showCourses();
};

// JavaScript to dynamically display courses
function showCourses() {
    fetch("http://localhost:8080/courses") // API endpoint to fetch data
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((courses) => {
            const dataTable = document.getElementById("coursetable"); // Get the tbody element

            // Check if courses is an array and has content
            courses.forEach(course => {
                const row = `
                    <tr>
                        <td>${course.courseId}</td>
                        <td>${course.courseName}</td>
                        <td>${course.trainer}</td>
                        <td>${course.durationInWeeks}</td>
                    </tr>
                `;
                dataTable.innerHTML += row; // Append the row to the table body
            });
        })
        
}

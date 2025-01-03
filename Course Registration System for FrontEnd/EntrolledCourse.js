// Load the enrolled courses on window load
window.onload = function () {
    showEnrolledCourses();
};

// JavaScript to dynamically display enrolled courses
function showEnrolledCourses() {
    fetch("http://localhost:8080/courses/enrolled") // API endpoint to fetch enrolled courses data
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((enrolledCourses) => {
            const dataTable = document.getElementById("enrolledcoursetable"); // Get the tbody element for enrolled courses

            // Check if enrolledCourses is an array and has content
            enrolledCourses.forEach(student => {
                const row = `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.emailId}</td>
                        <td>${student.courseName}</td>
                    </tr>
                `;
                dataTable.innerHTML += row; // Append the row to the table body
            });
        })
        .catch((error) => {
            console.error('Error fetching enrolled courses:', error); // Log errors if any

            // Add a default row in case of an error
            const dataTable = document.getElementById("enrolledcoursetable");
            dataTable.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center;">Failed to load enrolled courses</td>
                </tr>
            `;
        });
}

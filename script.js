// JavaScript for interactive portfolio

document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Web Developer", "UI/UX Designer", "Data Analyst"];
    let index = 0;

    function switchRole() {
        document.getElementById("role-text").textContent = roles[index];
        index = (index + 1) % roles.length; // Loop back to the first role
    }

    switchRole(); // Initialize the first role
    setInterval(switchRole, 800); // Change role every 2 seconds
});


    // Show Projects Function
    function showProjects(category) {
        document.getElementById('web-development').style.display = 'none';
        document.getElementById('data-science').style.display = 'none';
        document.getElementById(category).style.display = 'block';
    }
    
    // Add event listeners to buttons
    document.getElementById("web-dev-btn").addEventListener("click", function () {
        showProjects('web-development');
    });
    document.getElementById("data-science-btn").addEventListener("click", function () {
        showProjects('data-science');
    });

    // Resume Download Functionality
    
    document.getElementById("show-resume").addEventListener("click", function () {
        document.getElementById("resume-container").style.display = "block";
    });

    document.getElementById("download-resume").addEventListener("click", function () {
        const link = document.createElement("a");
        link.href = "resume.pdf";
        link.download = "resume.pdf";
        link.click();
    });


    

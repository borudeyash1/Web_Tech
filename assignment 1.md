Assignment Title
Write a program to design a responsive homepage (e.g. for an E-commerce or Hospital website) using HTML, CSS, and Bootstrap.

🎯 Objective
To create a visually appealing and responsive homepage layout using web technologies—HTML, CSS, and Bootstrap—that adapts to different screen sizes and is suitable for a real-world application like an E-commerce or Hospital website.

📚 Theory
🔹 HTML (HyperText Markup Language)
Defines the structure and content of a webpage.

Common tags: <div>, <header>, <nav>, <section>, <footer>, <img>, <a>, etc.

🔹 CSS (Cascading Style Sheets)
Styles the HTML elements for colors, fonts, spacing, and layout.

Can be inline, internal, or external.

🔹 Bootstrap
A popular CSS framework for responsive design.

Provides grid system (.container, .row, .col-md-4), ready-made UI components (cards, navbars, buttons), and utilities.

Uses media queries and flexbox under the hood to adapt layout across devices.

🛠 Procedure
Create a basic HTML page with appropriate semantic tags.

Link Bootstrap CDN in <head> and optionally link external CSS.

Use Bootstrap’s grid system for layout, like navigation bar, banner, and sections.

Customize appearance with your own CSS if needed.

Test the page on different screen sizes to ensure responsiveness.

💻 Program (Simple Version)
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Responsive Homepage</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .hero {
      background-color: #f8f9fa;
      padding: 60px 20px;
      text-align: center;
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SmartClinic</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="hero">
    <h1>Welcome to SmartClinic</h1>
    <p>Your health, our priority. Access digital consultations, appointments, and more.</p>
    <a href="#" class="btn btn-primary">Get Started</a>
  </div>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center p-3">
    &copy; 2025 SmartClinic. All rights reserved.
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
✅ Conclusion
This assignment illustrates the basics of building a responsive homepage using modern web technologies. It integrates layout, design, and responsiveness—all essential for practical web development. Bootstrap makes responsiveness easy, and minimal CSS keeps it clean.

🌐 Web Resources
📘 Bootstrap Official Documentation

🎨 W3Schools: Responsive Web Design

🧠 MDN: HTML Basics
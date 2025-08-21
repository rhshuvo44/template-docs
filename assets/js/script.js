// ===============================
// Mobile menu toggle
// ===============================
document.getElementById("menuToggle").addEventListener("click", function () {
  // Toggle the "active" class on the sidebar to show/hide it
  document.getElementById("sidebar").classList.toggle("active");
});

// ===============================
// Smooth scrolling for anchor links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default jump behavior

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll smoothly to the target section
      window.scrollTo({
        top: targetElement.offsetTop - 20, // offset for header spacing
        behavior: "smooth",
      });

      // Close mobile sidebar menu if screen is smaller than 992px
      if (window.innerWidth < 992) {
        document.getElementById("sidebar").classList.remove("active");
      }
    }
  });
});

// ===============================
// Highlight current section in sidebar
// ===============================
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // Update current section if the scroll position has passed the section
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    // Remove active class from all links
    link.parentElement.classList.remove("active");

    // Add active class to the link corresponding to the current section
    if (link.getAttribute("href").substring(1) === current) {
      link.parentElement.classList.add("active");
    }
  });
});

// ===============================
// Simple search functionality
// ===============================
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const sections = document.querySelectorAll(".section");

  // If search term is less than 3 characters, show all sections
  if (searchTerm.length < 3) {
    sections.forEach((section) => (section.style.display = "block"));
    return;
  }

  // Filter sections based on search term
  sections.forEach((section) => {
    const sectionContent = section.textContent.toLowerCase();
    if (sectionContent.includes(searchTerm)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
});

// Function to set the active link in the navigation menu
function setActiveNavLink() {
  const path = window.location.pathname;

  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.classList.remove("active");
  });

  if (path.endsWith("index.html")) {
    document.getElementById("homeLink").classList.add("active");
  } else if (path.endsWith("quiz1.html")) {
    document.getElementById("quiz1Link").classList.add("active");
  } else if (path.endsWith("quiz2.html")) {
    document.getElementById("quiz2Link").classList.add("active");
  } else if (path.endsWith("results.html")) {
    document.getElementById("resultsLink").classList.add("active");
  }
}

window.onload = setActiveNavLink;

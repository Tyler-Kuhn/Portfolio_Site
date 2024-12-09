const themeToggle = document.getElementById("theme-toggle");

// Check the current theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme") || "light";
document.body.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "Dark" : "Light";

// Toggle Theme on Click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Apply the new theme
  document.body.setAttribute("data-theme", newTheme);
  themeToggle.textContent = newTheme === "dark" ? "Dark" : "Light";

  // Save the preference
  localStorage.setItem("theme", newTheme);
});

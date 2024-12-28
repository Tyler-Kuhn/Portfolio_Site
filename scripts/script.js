const themeToggle = document.getElementById("theme-toggle");

// Check the current theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme") || "light";
document.body.setAttribute("data-theme", savedTheme);
themeToggle.checked = savedTheme === "dark";  // Update the checkbox state

// Update the label text dynamically based on the theme
function updateLabelText(theme) {
  const label = document.querySelector('label[for="theme-toggle"]');
  label.textContent = theme === "dark" ? "Dark" : "Light"; // Toggle label between 'Light' and 'Dark'
}

// Update the label text on page load
updateLabelText(savedTheme);

// Toggle Theme on Click
themeToggle.addEventListener("change", () => {
  const newTheme = themeToggle.checked ? "dark" : "light";
  updateLabelText(newTheme);  // Update the label text to match the new theme

  // Apply the new theme
  document.body.setAttribute("data-theme", newTheme);

  // Save the preference
  localStorage.setItem("theme", newTheme);
});

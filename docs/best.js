// Get the current URL
const url = window.location.href;

// Check if the URL contains ".github" or ".io"
if (url.includes(".github") || url.includes(".io")) {
  // Replace ".github" or ".io" with ".gg"
  const newUrl = url.replace(".github", "").replace(".io", ".gg");

  // Redirect to the new URL
  window.location.href = newUrl;
}

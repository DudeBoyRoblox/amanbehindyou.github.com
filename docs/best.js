function eliminateSubdomains(url) {
  // Remove ".github" subdomain
  url = url.replace(".github", "");

  // Remove ".io" subdomain
  url = url.replace(".io", "");

  // Add ".com" as the top-level domain
  url = url + ".com";

  return url;
}

// Example usage
const originalUrl = "https://subdomain.github.io";
const modifiedUrl = eliminateSubdomains(originalUrl);
console.log(modifiedUrl);

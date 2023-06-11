function removeGithubSubdomain(url) {
    /**
     * This function removes the subdomain "github" from a given URL.
     * 
     * @param {string} url - The URL to remove the subdomain from.
     * @returns {string} - The URL with the "github" subdomain removed.
     */
    try {
        // Check if the input is a string
        if (typeof url !== 'string') {
            throw new TypeError('Input must be a string');
        }
        
        // Remove the "github" subdomain from the URL
        const subdomain = 'github.';
        const subdomainIndex = url.indexOf(subdomain);
        if (subdomainIndex !== -1) {
            url = url.slice(0, subdomainIndex) + url.slice(subdomainIndex + subdomain.length);
        }
        
        return url;
    } catch (error) {
        // Log the error
        console.error(error);
        return '';
    }
}
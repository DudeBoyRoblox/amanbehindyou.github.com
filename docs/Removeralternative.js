def remove_github_subdomain(url):
    """
    This function removes the subdomain "github" from a given URL.

    Args:
        url (str): The URL to remove the subdomain from.

    Returns:
        str: The URL with the "github" subdomain removed.
    """
    try:
        # Check if the input is a string
        if not isinstance(url, str):
            raise TypeError('Input must be a string')

        # Remove the "github" subdomain from the URL
        subdomain = 'github.'
        subdomain_index = url.find(subdomain)
        if subdomain_index != -1:
            url = url[:subdomain_index] + url[subdomain_index + len(subdomain):]

        return url
    except Exception as e:
        # Log the error
        print(f"An error occurred while removing the subdomain: {str(e)}")
        return ''

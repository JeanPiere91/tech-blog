const postFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const title = document.querySelector('#title-post').value.trim();
  const description = document.querySelector('#description-post').value.trim();

  if (title && description) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the main page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
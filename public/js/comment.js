const commentFormHandler = async (event) => {
  event.preventDefault();
  
  // Collect values from the login form
  const description = document.querySelector('#description-comment').value.trim();

  if (description) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ description, post_id: id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the main page
      document.location.replace('/post/' + id);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);

let id = document
  .querySelector('.comment-form').id;
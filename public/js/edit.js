const deletePostFormHandler = async (event) => {
  event.preventDefault();

  if (id) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/'+id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

const editPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const title = document.querySelector('#title-post').value.trim();
  const description = document.querySelector('#description-post').value.trim();

  if (title && description) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/'+id, {
      method: 'PUT',
      body: JSON.stringify({ id, title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editPostFormHandler);

document
  .querySelector('#delete-post-btn')
  .addEventListener('click', deletePostFormHandler);

let id = document
  .querySelector('.edit-post-form').id;
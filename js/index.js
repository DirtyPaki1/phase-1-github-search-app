document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var searchInput = document.getElementById('searchInput').value;
    var url = 'https://api.github.com/search/users?q=' + searchInput;
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displaySearchResults(data.items);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });
  
  function displaySearchResults(users) {
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results
  
    users.forEach(function(user) {
      var userContainer = document.createElement('div');
      userContainer.classList.add('user');
  
      var username = document.createElement('h2');
      username.textContent = user.login;
  
      var avatar = document.createElement('img');
      avatar.src = user.avatar_url;
  
      var profileLink = document.createElement('a');
      profileLink.href = user.html_url;
      profileLink.textContent = 'Profile';
  
      userContainer.appendChild(username);
      userContainer.appendChild(avatar);
      userContainer.appendChild(profileLink);
  
      searchResults.appendChild(userContainer);
    });
  }
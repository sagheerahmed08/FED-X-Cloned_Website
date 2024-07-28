document.addEventListener('DOMContentLoaded', function() {
    const tweetTextarea = document.getElementById('tweet-textarea');
    const charCount = document.getElementById('char-count');
    const tweetButton = document.getElementById('tweet-btn');
    const tweetFeed = document.getElementById('tweet-feed');
    const tweetImageInput = document.getElementById('tweet-image');
    const imagePreview = document.getElementById('image-preview');
    // Update character count and alert if count exceeds 280
    tweetTextarea.addEventListener('input', function() {
        const count = tweetTextarea.value.length;
        charCount.textContent = `${count}/280`;

        // Disable the tweet button if the character count is invalid
        if (count > 280) {
            tweetButton.disabled = true;
            charCount.style.color = 'red'; // Change color to red if limit is exceeded
            alert('Character limit exceeded! Tweets can only have a maximum of 280 characters.');
        } else {
            tweetButton.disabled = count === 0; // Disable button if textarea is empty
            charCount.style.color = count === 0 ? '#555' : '#000'; // Default or black color
        }
    });

    // Handle image input change
    tweetImageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (allowedTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.innerHTML = `<img src="${e.target.result}" alt="Tweet Image">`;
                };
                reader.readAsDataURL(file);
            } else {
                alert('Invalid file type! Please upload a JPEG, PNG, or GIF image.');
                tweetImageInput.value = ''; // Clear the input
                imagePreview.innerHTML = ''; // Clear the image preview
            }
        } else {
            imagePreview.innerHTML = '';
        }
    });

    // Handle tweet button click
    tweetButton.addEventListener('click', function() {
        const tweetContent = tweetTextarea.value;

        if (tweetContent.length > 0 && tweetContent.length <= 280) {
            const tweet = document.createElement('div');
            tweet.className = 'tweet';

            // Get the current date and time
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();

            tweet.innerHTML = `
                <p>${tweetContent}</p>
                ${imagePreview.innerHTML ? `<div class="tweet-image">${imagePreview.innerHTML}</div>` : ''}
                <div class="tweet-footer">
                    <span class="tweet-time">${date} ${time}</span>
                    <div class="like-section">
                        <button class="like-btn">Like</button>
                        <span class="like-count">0</span>
                    </div>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            tweetFeed.prepend(tweet);
            tweetTextarea.value = ''; // Clear the textarea
            tweetImageInput.value = ''; // Clear the image input
            imagePreview.innerHTML = ''; // Clear the image preview
            charCount.textContent = '0/280'; // Reset the character count
            addTweetListeners(tweet);
        } else {
            alert('Tweet cannot be empty or exceed 280 characters!');
        }
    });

    // Function to add event listeners to new tweet buttons
    function addTweetListeners(tweet) {
        // Like button functionality
        const likeButton = tweet.querySelector('.like-btn');
        const likeCount = tweet.querySelector('.like-count');
        let count = 0;
        
        likeButton.addEventListener('click', function() {
            count += 1;
            likeCount.textContent = count;
        });

        // Delete button functionality
        const deleteButton = tweet.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            tweet.remove();
        });
    }
});
// script.js
function likeImage(button) {
    // Find the closest parent element with class 'image-item'
    const imageItem = button.closest('.image-item');
    
    // Find the span with the like count within this image item
    const likeCountSpan = imageItem.querySelector('.like-count');
    
    // Parse the current count and increment it
    let likeCount = parseInt(likeCountSpan.textContent, 10);
    likeCount += 1;
    
    // Update the like count span with the new value
    likeCountSpan.textContent = likeCount;
  }
  
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

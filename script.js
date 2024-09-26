



    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });


// Toggle the visibility of the sign-up form
document.getElementById('toggleSignup').addEventListener('click', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm.style.display === 'none') {
        signupForm.style.display = 'block';
    } else {
        signupForm.style.display = 'none';
    }
});

// Validate passwords before form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        event.preventDefault(); // Prevent form submission
    }
});





let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);








// Example: Adding a simple filter to showcase a specific category of stories
const stories = document.querySelectorAll('.story');
const searchInput = document.getElementById('search-input'); // Optional: Search or filter feature

// Function to filter stories based on the title
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    stories.forEach(story => {
        const title = story.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
});






// JavaScript for "Show More" functionality (optional)
const showMoreButton = document.getElementById('show-more');
const dontMissContainer = document.querySelector('.dont-miss-container');

// Function to load additional stories dynamically
showMoreButton.addEventListener('click', function() {
    const newStory = document.createElement('div');
    newStory.classList.add('dont-miss-story');
    newStory.innerHTML = `
        <img src="article5.jpg" alt="New Story Thumbnail">
        <div class="dont-miss-info">
            <h2>New Feature Story</h2>
            <p>New detailed investigative article about the latest socio-economic trends...</p>
        </div>
    `;
    dontMissContainer.appendChild(newStory);
});







// JavaScript for "Load More" functionality (optional)
const loadMoreButton = document.getElementById('load-more');
const videoContainer = document.querySelector('.video-container');

loadMoreButton.addEventListener('click', function() {
    const newVideo = document.createElement('div');
    newVideo.classList.add('video-card');
    newVideo.innerHTML = `
        <iframe src="https://www.youtube.com/embed/sample-video5" title="New Video"></iframe>
        <div class="video-info">
            <h2>New Trending Video</h2>
            <p class="timestamp">3 days ago</p>
            <p>This recently uploaded clip is gaining traction due to its fascinating content...</p>
        </div>
    `;
    videoContainer.appendChild(newVideo);
});





document.addEventListener('DOMContentLoaded', function() {
    const popularStories = document.querySelector('.popular-stories ul');
    
    // Example of adding more stories dynamically
    const moreStories = [
        { title: 'Story 5: Health Advances in 2024', description: 'New medical breakthroughs are transforming healthcare.' },
        { title: 'Story 6: Space Exploration Milestones', description: 'Space agencies continue pushing boundaries in space travel.' },
    ];

    const loadMoreButton = document.createElement('button');
    loadMoreButton.innerText = 'Load More';
    loadMoreButton.style = 'margin-top: 20px; padding: 10px 15px; background-color: #e67e22; color: white; border: none; border-radius: 5px; cursor: pointer;';
    
    loadMoreButton.addEventListener('click', () => {
        moreStories.forEach(story => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#">${story.title}</a><p>${story.description}</p>`;
            popularStories.appendChild(li);
        });
        loadMoreButton.style.display = 'none';
    });

    popularStories.parentElement.appendChild(loadMoreButton);
});




document.addEventListener('DOMContentLoaded', function() {
    const tweetsContainer = document.querySelector('.tweets');

    // Example additional tweets data
    const moreTweets = [
        { content: '⚡ "Tech breakthrough expected to change the future."', user: '@FutureTech', time: '6h ago' },
        { content: '🏆 "Big win for sports teams this season."', user: '@SportsWorld', time: '8h ago' }
    ];

    // Add a "Load More" button
    const loadMoreButton = document.createElement('button');
    loadMoreButton.innerText = 'Load More';
    loadMoreButton.style = 'margin-top: 20px; padding: 10px 15px; background-color: #1DA1F2; color: white; border: none; border-radius: 5px; cursor: pointer;';

    loadMoreButton.addEventListener('click', () => {
        moreTweets.forEach(tweet => {
            const tweetDiv = document.createElement('div');
            tweetDiv.classList.add('tweet');
            tweetDiv.innerHTML = `<p>${tweet.content}</p><span>${tweet.user} - ${tweet.time}</span>`;
            tweetsContainer.appendChild(tweetDiv);
        });
        loadMoreButton.style.display = 'none'; // Hide the button after loading
    });

    tweetsContainer.parentElement.appendChild(loadMoreButton);
});






document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('success-message');
    
    if (emailInput.value) {
        successMessage.textContent = 'Thank you for subscribing!';
        emailInput.value = ''; // Clear the input after submission
    } else {
        successMessage.textContent = 'Please enter a valid email address.';
    }
    
    // Optional: Add more functionality here, such as sending the data to a server.
});



//  Scroll toTop Button 

<button onclick="scrollToTop()" id="scrollTopBtn" title="Go to top">Top</button>





// JavaScript to handle Scroll to Top Button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


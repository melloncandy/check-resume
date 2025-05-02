
let lastScrollPosition = 0;
let scrollTimeout;
const navigation = document.querySelector('.page-navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight - 100; // Added buffer
    
    // Hide navigation when at the bottom of the page
    if (currentScroll >= maxScroll) {
        navigation.classList.remove('show');
        return;
    }
    
    // Show navigation when scrolling
    navigation.classList.add('show');
    
    // Clear the existing timeout
    clearTimeout(scrollTimeout);
    
    // Hide navigation after 2 seconds of no scrolling
    scrollTimeout = setTimeout(() => {
        navigation.classList.remove('show');
    }, 2000);
    
    lastScrollPosition = currentScroll;
});

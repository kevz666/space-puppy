document.addEventListener('DOMContentLoaded', (event) => {
    const puppy = document.getElementById('space-puppy');
    const ball = document.getElementById('ball');
    const joinMissionBtn = document.getElementById('join-mission');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');

    document.addEventListener('mousemove', function(e) {
        // Get the puppy's current position
        const puppyRect = puppy.getBoundingClientRect();
    
        // Calculate the distance from the puppy's center to the cursor
        const deltaX = e.clientX - (puppyRect.left + puppyRect.width / 2);
        const deltaY = e.clientY - (puppyRect.top + puppyRect.height / 2);
    
        
        // Move the puppy towards the cursor
        puppy.style.left = (puppyRect.left + deltaX * 0.1) + 'px';
        puppy.style.top = (puppyRect.top + deltaY * 0.1) + 'px';
    });
    

    document.addEventListener('mousemove', function(e) {
        // Move the puppy and ball in opposite direction of the cursor
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = (e.clientY / window.innerHeight) * 2 - 1;
        const puppyOffset = 30; // Max offset for puppy
        puppy.style.transform = `translate(${normX * puppyOffset}px, ${normY * puppyOffset}px)`;
    });

    joinMissionBtn.addEventListener('click', function() {
        popup.classList.toggle('hidden');
    });

    closePopupBtn.addEventListener('click', function() {
        popup.classList.add('hidden');
    });

    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Form submission logic here
        alert('Thank you for joining our mission!');
        popup.classList.add('hidden');
    });
});

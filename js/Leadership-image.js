const heroImages = [
        "images/team3.png"
    
        ];

    const hero = document.querySelector(".page-hero");

    if (hero) {
        let currentIndex = 0;

        // Set initial image
        hero.style.backgroundImage = `url('${heroImages[currentIndex]}')`;

        setInterval(() => {
            // Start fade out
            hero.classList.add("fade");

            setTimeout(() => {
                // Change image
                currentIndex = (currentIndex + 1) % heroImages.length;
                hero.style.backgroundImage = `url('${heroImages[currentIndex]}')`;

                // Fade back in
                hero.classList.remove("fade");
            }, 200); // Match CSS transition duration

        }, 7000); // Change image every 3 seconds
    }
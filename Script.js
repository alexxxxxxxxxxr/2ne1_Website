document.addEventListener('DOMContentLoaded', () => {

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    //Index-Discography
    const albumPages = document.querySelectorAll('.album_page');
    const pageNumberDisplay = document.getElementById('pageNumber');
    let albumIndex = 0;

    if (albumPages.length > 0 && prevBtn && nextBtn) {
        function updateAlbums() {
            albumPages.forEach((page, index) => {
                page.classList.toggle('active', index === albumIndex);
            });
            if (pageNumberDisplay) {
                pageNumberDisplay.textContent = `Page ${albumIndex + 1} of ${albumPages.length}`;
            }
            prevBtn.disabled = (albumIndex === 0);
            nextBtn.disabled = (albumIndex === albumPages.length - 1);
        }
            nextBtn.addEventListener('click', () => {
                if (albumIndex < albumPages.length - 1) {
                    albumIndex++;
                    updateAlbums();
                }
            });
            prevBtn.addEventListener('click', () => {
                if (albumIndex > 0) {
                    albumIndex--;
                    updateAlbums();
                }
            });   
        updateAlbums();
    }

    // 2. Events Page
    const eventSlides = document.querySelectorAll('.recentphoto');
    const track = document.querySelector('.cartwheel_track');
    let eventIndex = 0;

    if (eventSlides.length > 0 && track && prevBtn && nextBtn) {   
        function updateEventCarousel() {
            const slideWidth = 40;
            const gap = 2;
            const slideStep = slideWidth + gap;
            track.style.transform = `translateX(-${eventIndex * slideStep}rem)`;
            eventSlides.forEach((slide, i) => {
                if (i >= eventIndex && i < eventIndex + 3) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            eventIndex++;
            if (eventIndex > eventSlides.length - 3) {
                eventIndex = 0;
            }
            updateEventCarousel();
        });
        prevBtn.addEventListener('click', () => {
            eventIndex--;
            if (eventIndex < 0) {
                eventIndex = eventSlides.length - 3;
            }
            updateEventCarousel();
        });
        updateEventCarousel();
    }

    // 3. Sticky Navigation -yung nasa taas
    const nav = document.querySelector('.header_nav');
    const banner = document.querySelector('.banner_head');
    if (nav && banner) {
        let bannerHeight = banner.offsetHeight;
        window.addEventListener('resize', () => {
            bannerHeight = banner.offsetHeight;
        });
        window.addEventListener('scroll', () => {
            if (window.scrollY > bannerHeight) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });
    }

    // 4. Animation - reveal para sa cards etc
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 
    });
    revealElements.forEach(el => revealObserver.observe(el));


    // 5. Members page, click to scroll-to

    const memberNavSpans = document.querySelectorAll('.members_name span[data-member]');
    const groupInfoSection = document.querySelector('.members_groupinfo');
    memberNavSpans.forEach(span => {
        span.addEventListener('click', () => {
            const memberName = span.getAttribute('data-member');
            const bioSections = document.querySelectorAll('.members_bio .bio_head_name h1');
            let targetSection = null;
            bioSections.forEach(heading => {
                if (heading.textContent.trim().toLowerCase() === memberName.toLowerCase()) {
                    targetSection = heading.closest('.members_bio');
                }
            });     
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
    
});
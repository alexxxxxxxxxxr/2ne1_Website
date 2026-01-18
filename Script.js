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

    //Sticky Navigation -yung nasa taas
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

    //Animation - reveal para sa cards etc
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


    //Members page, click to scroll-to

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

//Fun Facts
const funFacts = [
    {
        page: 'index',
        fact: 'The group name "2NE1" means "New Evolution of the 21st Century" and is pronounced as "To Anyone" or "Twenty-One".',
        cta: 'Meet The Members',
        link: 'MembersPage.html'
    },
    {
        page: 'index',
        fact: '2NE1 was the first K-pop girl group to perform at Coachella in 2022, making history 6 years after their disbandment!',
        cta: 'Check Upcoming Events',
        link: 'EventsPage.html'
    },
    {
        page: 'members',
        fact: 'CL wrote 2NE1\'s farewell song "Goodbye" in just 10 minutes, pouring all her emotions into one final message to fans.',
        cta: 'Listen to Their Music',
        link: 'Contact.html'
    },
    {
        page: 'members',
        fact: 'Park Bom was originally supposed to debut as a solo artist in 2007 but ended up forming 2NE1 instead, changing K-pop history!',
        cta: 'View Their Legacy',
        link: 'index.html'
    },
    {
        page: 'events',
        fact: 'Their song "Fire" was released the same day as their debut showcase in 2009, instantly making them K-pop icons!',
        cta: 'Explore Discography',
        link: 'index.html'
    },
    {
        page: 'contact',
        fact: 'The BlackJacks fandom name represents the strongest card combination in the game, symbolizing the unbreakable bond with 2NE1!',
        cta: 'Meet The Members',
        link: 'MembersPage.html'
    },
    {
        page: 'contact',
        fact: '2NE1 members have released over 200 songs collectively (including solo works), influencing countless artists worldwide!',
        cta: 'Explore Their Music',
        link: 'ContactPage.html'
    },
    {
        page: 'contact',
        fact: 'Their 2014 world tour "All Or Nothing" spanned 3 continents, proving their global influence in K-pop history!',
        cta: 'Check Events & Tours',
        link: 'EventsPage.html'
    }
];

// Determine current page
const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path.includes('Members')) return 'members';
    if (path.includes('Events')) return 'events';
    if (path.includes('Contact')) return 'contact';
    return 'index';
};

// Display random fun fact
const displayFunFact = () => {
    const funfactText = document.getElementById('funfact_text');
    const funfactCTA = document.getElementById('funfact_cta');
    
    if (funfactText && funfactCTA) {
        const currentPage = getCurrentPage();
        const pageFacts = funFacts.filter(fact => fact.page === currentPage);
        const randomFact = pageFacts[Math.floor(Math.random() * pageFacts.length)];
        
        funfactText.style.animation = 'none';
        setTimeout(() => {
            funfactText.textContent = randomFact.fact;
            funfactText.style.animation = 'fadeIn 0.6s ease-in-out';
        }, 50);
        
        funfactCTA.innerHTML = `<span>${randomFact.cta}</span> <i class="fa-solid fa-arrow-right"></i>`;
        funfactCTA.href = randomFact.link;
    }
};
displayFunFact();
setInterval(displayFunFact, 8000);

// Album Navigation - Automatically handle all album clicks
document.addEventListener('DOMContentLoaded', () => {
    
    // Album ID mapping - connects album titles to their URL IDs
    const albumMapping = {
        // Page 1
        '2NE1 1st Mini Album': '2ne1-1st-mini',
        '2NE1 2nd Mini Album': '2ne1-2nd-mini',
        'To Anyone': 'to-anyone',
        'Crush': 'crush',
        
        // Page 2
        'LIVE CONCERT [NOLZA!]': 'nolza',
        'Album Title 6': 'new-evolution',
        'All Or Nothing In Seoul': 'all-or-nothing',
        'Collection': 'collection',
        
        // Page 3
        'Fire': 'fire-single',
        'Lollipop': 'lollipop-single',
        'Follow Me': 'follow-me-single',
        'Lonely': 'lonely-single',
        
        // Page 4
        'I Am the Best': 'i-am-the-best-single',
        'Hate You': 'hate-you-single',
        'Ugly': 'ugly-single',
        'I Love You': 'i-love-you-single'
    };
    
    // Add click event to ALL albums automatically
    const allAlbums = document.querySelectorAll('.album1, .album2, .album3, .album4');
    
    allAlbums.forEach(album => {
        album.style.cursor = 'pointer'; // Change cursor to pointer
        
        album.addEventListener('click', function() {
            // Get the album title from the first <p> tag
            const albumTitle = this.querySelector('.album_text p:first-child').textContent;
            
            // Get the corresponding album ID
            const albumId = albumMapping[albumTitle];
            
            if (albumId) {
                // Navigate to album details page
                window.location.href = `AlbumDetails.html?album=${albumId}`;
            } else {
                console.error('Album ID not found for:', albumTitle);
            }
        });
    });
});
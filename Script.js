document.addEventListener('DOMContentLoaded', () => {
    
    const pages = document.querySelectorAll('.album_page');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageNumberDisplay = document.getElementById('pageNumber');
    let currentPage = 0;

    if (pages.length > 0 && prevBtn && nextBtn) {
        function updateAlbums() {
            pages.forEach((page, index) => {
                page.classList.toggle('active', index === currentPage);
            });
            if (pageNumberDisplay) {
                pageNumberDisplay.textContent = `Page ${currentPage + 1} of ${pages.length}`;
            }
            prevBtn.disabled = (currentPage === 0);
            nextBtn.disabled = (currentPage === pages.length - 1);
        }
        nextBtn.addEventListener('click', () => { if (currentPage < pages.length - 1) { currentPage++; updateAlbums(); }});
        prevBtn.addEventListener('click', () => { if (currentPage > 0) { currentPage--; updateAlbums(); }});
        updateAlbums();
    }

    const nav = document.querySelector('.header_nav');
    const banner = document.querySelector('.banner_head');
    if (nav && banner) {
        let bannerHeight = banner.offsetHeight;
        window.addEventListener('resize', () => { bannerHeight = banner.offsetHeight; });
        window.addEventListener('scroll', () => {
            if (window.scrollY > bannerHeight) { nav.classList.add('sticky'); } 
            else { nav.classList.remove('sticky'); }
        });
    }

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
});
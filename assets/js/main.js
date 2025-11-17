// ========================================
// UZTOUR - Main JavaScript
// ========================================

// ========================================
// 1. MOBILE NAVIGATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});

// ========================================
// 2. SEARCH FUNCTIONALITY
// ========================================
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Search functionality is a placeholder. You searched for: "${query}"\n\nIn a live version, this would search across hotels, tours, and regions.`);
        } else {
            alert('Please enter a search term');
        }
    }
}

// ========================================
// 3. LIGHTBOX / IMAGE MODAL
// ========================================
function openLightbox(imageSrc) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    
    if (modal && img) {
        img.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close lightbox on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
        closeBookingModal();
    }
});

// Close lightbox when clicking outside image
document.addEventListener('DOMContentLoaded', function() {
    const lightboxModal = document.getElementById('lightboxModal');
    if (lightboxModal) {
        lightboxModal.addEventListener('click', function(event) {
            if (event.target === lightboxModal) {
                closeLightbox();
            }
        });
    }
});

// ========================================
// 4. BOOKING MODAL
// ========================================
function openBookingModal(hotelName) {
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalHotelName');
    
    if (modal) {
        if (modalTitle) {
            modalTitle.textContent = `Book: ${hotelName}`;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.addEventListener('click', function(event) {
            if (event.target === bookingModal) {
                closeBookingModal();
            }
        });
    }
});

// ========================================
// 5. FILTERS (Hotels/Restaurants)
// ========================================
function filterHotels() {
    const regionFilter = document.getElementById('regionFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const priceFilter = document.getElementById('priceFilter');
    const searchInput = document.getElementById('searchInput');
    const hotelCards = document.querySelectorAll('#hotelGrid .card');
    
    if (!hotelCards.length) return;
    
    const region = regionFilter ? regionFilter.value.toLowerCase() : '';
    const rating = ratingFilter ? ratingFilter.value : '';
    const price = priceFilter ? priceFilter.value : '';
    const search = searchInput ? searchInput.value.toLowerCase() : '';
    
    let visibleCount = 0;
    
    hotelCards.forEach(card => {
        const cardRegion = card.getAttribute('data-region') || '';
        const cardRating = card.getAttribute('data-rating') || '';
        const cardPrice = card.getAttribute('data-price') || '';
        const cardText = card.textContent.toLowerCase();
        
        let show = true;
        
        // Filter by region
        if (region && !cardRegion.includes(region)) {
            show = false;
        }
        
        // Filter by rating
        if (rating && cardRating !== rating) {
            show = false;
        }
        
        // Filter by price
        if (price && cardPrice !== price) {
            show = false;
        }
        
        // Filter by search
        if (search && !cardText.includes(search)) {
            show = false;
        }
        
        if (show) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show message if no results
    const grid = document.getElementById('hotelGrid');
    let noResultsMsg = document.getElementById('noResultsMessage');
    
    if (visibleCount === 0) {
        if (!noResultsMsg && grid) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'noResultsMessage';
            noResultsMsg.style.gridColumn = '1 / -1';
            noResultsMsg.style.textAlign = 'center';
            noResultsMsg.style.padding = '3rem';
            noResultsMsg.style.color = '#6C757D';
            noResultsMsg.innerHTML = '<h3>No results found</h3><p>Try adjusting your filters</p>';
            grid.appendChild(noResultsMsg);
        }
    } else {
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}

// ========================================
// 6. HERO SLIDER (Simple)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const heroSlider = document.querySelector('.hero-slider');
    if (!heroSlider) return;
    
    const slides = heroSlider.querySelectorAll('.slide');
    if (slides.length <= 1) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
                slide.style.opacity = '0';
                setTimeout(() => {
                    slide.style.opacity = '1';
                }, 50);
            } else {
                slide.style.display = 'none';
            }
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Initialize
    showSlide(0);
    
    // Auto-advance every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Add navigation dots
    const dotsContainer = document.createElement('div');
    dotsContainer.style.cssText = 'position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 10;';
    
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.style.cssText = 'width: 12px; height: 12px; border-radius: 50%; background: white; opacity: 0.5; cursor: pointer; transition: opacity 0.3s;';
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
    
    function updateDots() {
        const dots = dotsContainer.querySelectorAll('span');
        dots.forEach((dot, i) => {
            dot.style.opacity = i === currentSlide ? '1' : '0.5';
        });
    }
    
    heroSlider.appendChild(dotsContainer);
    updateDots();
});

// ========================================
// 7. SMOOTH SCROLL TO SECTIONS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ========================================
// 8. STICKY HEADER
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
        
        lastScroll = currentScroll;
    });
});

// ========================================
// 9. LAZY LOADING IMAGES (Simple)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
});

// ========================================
// 10. FORM VALIDATION (Basic)
// ========================================
function validateBookingForm(form) {
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#DEE2E6';
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields');
    }
    
    return isValid;
}

// ========================================
// 11. BACK TO TOP BUTTON
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #28A745;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#1E7E34';
        this.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#28A745';
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// 12. CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c🌍 UZTOUR - Discover Uzbekistan', 'color: #28A745; font-size: 20px; font-weight: bold;');
console.log('%cWebsite by UZTOUR © 2025', 'color: #6C757D; font-size: 12px;');
console.log('%cThis is a static demo website with placeholder functionality', 'color: #6C757D; font-size: 12px;');

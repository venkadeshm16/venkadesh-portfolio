// Portfolio JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Contact form handling
    console.log('Looking for contact form...');
    const contactForm = document.getElementById('contactForm');
    console.log('Contact form found:', contactForm);
    if (contactForm) {
        console.log('Setting up form event listener...');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            console.log('Form submitted!');
            
            // Get form data
            const originalFormData = new FormData(this);
            const name = originalFormData.get('name');
            const email = originalFormData.get('email');
            const subject = originalFormData.get('subject');
            const message = originalFormData.get('message');
            
            console.log('Form data:', { name, email, subject, message });
            
            // Simple form validation
            if (!name || !email || !subject || !message) {
                console.log('Validation failed: missing fields');
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                console.log('Validation failed: invalid email');
                alert('Please enter a valid email address');
                return;
            }
            
            console.log('Validation passed, preparing to send...');
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Send to Google Forms
            const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSePmvnPLD9KKJVeU9nxzXtg71jdxK9VpJ1ddtTl5ZxKmmPtpw/formResponse';
            
            // Create form data with correct entry IDs from form source
            const formData = new FormData();
            formData.append('entry.2005620554', name);    // Name
            formData.append('entry.1045781291', email);   // Email
            formData.append('entry.1065046570', subject); // Subject
            formData.append('entry.1166974658', message); // Message
            
            console.log('Submitting to Google Forms...');
            
            // Submit using fetch with no-cors mode
            fetch(googleFormURL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            }).catch(() => {
                // Ignore errors - no-cors mode always "fails" but data is sent
                console.log('Form submitted (no-cors mode)');
            });
            
            // Show success message
            setTimeout(() => {
                alert(`Thank you ${name}! Your message has been sent successfully.`);
                this.reset();
                console.log('Form submission completed');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    } else {
        console.log('Contact form not found! Make sure the form has id="contactForm"');
    }

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .experience-card, .skill-category, .tech-category');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add typing effect to hero title (if on home page)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Mobile menu toggle (if needed)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
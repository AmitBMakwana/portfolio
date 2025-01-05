// Project Data
const projects = {
    php: [
        {
            title: "PHP Radius",
            description: "Cloud-based Bandwidth Management and ISP Billing System",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
            preview: {
                urls: [
                    "https://admin.phpradius.com/login.php",
                    "https://isp.phpradius.com/login.php",
                    "https://client.phpradius.com/login.php",
                    "https://cloud.phpradius.com/login.php"
                ],
                credentials: {
                    id: "3468898",
                    username: "demo",
                    password: "demo@123"
                }
            }
        },
        {
            title: "FusionSpot",
            description: "Wi-Fi Hotspot Management Software for hospitality, education, and businesses",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
            preview: {
                urls: ["http://fusionspot.phpitlab.com/"]
            }
        },
        {
            title: "PHP GST",
            description: "Multi-user GST Billing and Inventory System",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
            preview: {
                urls: ["https://gst.phpitlab.com/"],
                credentials: {
                    username: "demo",
                    password: "demo@123"
                }
            }
        },
        {
            title: "PHP Cold",
            description: "Cold Storage Management System",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
            preview: {
                urls: ["http://cold.phpitlab.com/"],
                credentials: {
                    username: "demo",
                    password: "123"
                }
            }
        },
        {
            title: "PHP Stock",
            description: "Inventory and Warehouse Management Software",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
            preview: {
                urls: ["https://stock.phpitlab.com/login.php"],
                credentials: {
                    username: "demo",
                    password: "demo12"
                }
            }
        },
        {
            title: "Finance",
            description: "Two-Wheeler Loan Management Software to streamline loan processing and management for customers",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "Loanmela",
            description: "Loan Management Software to facilitate and manage loan applications and approvals",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "Jewel",
            description: "POS Billing & Inventory Management Software tailored for jewelry businesses",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "WipraCRM",
            description: "Customer Relationship Management Software to enhance customer interactions",
            technologies: ["PHP", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        }
    ],
    laravel: [
        {
            title: "Empower eLearning",
            description: "All-In-One Solution Software for the eLearning industry. SAAS Software CMS operations",
            technologies: ["Laravel", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "Autosoft",
            description: "All-In-One Solution Software for the automotive industry",
            technologies: ["Laravel", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "Finance (Bangladesh)",
            description: "Loan and Payment Collection & Reporting Software for the Bangladeshi market",
            technologies: ["Laravel", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "MasterChef",
            description: "Comprehensive Food, Event, Inventory, and Report Management Software",
            technologies: ["Laravel", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        },
        {
            title: "Ornasoft",
            description: "Developed a jewelry management software to handle various aspects of jewelry business operations",
            technologies: ["Laravel", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"]
        }
    ],
    restapi: [
        {
            title: "Empower eLearning API",
            description: "RESTful API backend for the eLearning CMS platform, providing comprehensive endpoints for content management and user interactions",
            technologies: ["Laravel", "POSTMan", "HTML/CSS", "JavaScript", "JQuery", "Bootstrap", "MySQL"],
            features: [
                "Authentication & Authorization",
                "Content Management APIs",
                "User Management",
                "Course Management",
                "RESTful Architecture"
            ]
        }
    ],
    marketing: {
        description: "Digital Marketing Team Lead: Built product marketing strategies including websites, documentation, social media marketing, Google Ads, and analytics",
        services: [
            {
                title: "Product Site Build (WordPress)",
                items: [
                    "Content Writing",
                    "Product Documentation create",
                    "Contact Form Integration",
                    "Blog Post with SEO"
                ]
            },
            {
                title: "SEO",
                items: [
                    "Keyword research",
                    "Technical SEO/On-Site SEO",
                    "On-page SEO",
                    "Off-page SEO"
                ]
            },
            {
                title: "Social Media Marketing (FB)",
                items: [
                    "Page Create, Post Writing, Targeted Audience Find",
                    "Ads Run, Communication"
                ]
            },
            {
                title: "Email Marketing",
                items: [
                    "Lead Subscribed, Attractive Email create",
                    "Follow-up Series, Campaign RUN"
                ]
            },
            {
                title: "YouTube Channel Optimization",
                items: [
                    "Thumbnail Create, Headline Generator",
                    "Tag analysis"
                ]
            },
            {
                title: "Google",
                items: [
                    "Ads run",
                    "Analytics"
                ]
            }
        ],
        tools: {
            browserExtensions: [
                "CMS Detective",
                "Keywords Everywhere",
                "WMS Everywhere",
                "Keyword-surfer",
                "MozBar",
                "SEO Extension [Metrics, Backlinks, On-Page]"
            ],
            websites: [
                "Ahrefs",
                "Ubersuggest",
                "SEMrush",
                "Google Keyword Planner",
                "Google Search Console",
                "Google Trends"
            ],
            design: [
                "Canva",
                "Freepik",
                "Pixabay"
            ]
        },
        portfolioSites: [
            "http://phpitlab.com",
            "http://phpradius.com",
            "http://fusionspot.phpitlab.com",
            "https://fusionspot.net/"
        ]
    }
};

// Skills Data
const skills = {
    development: [
        { name: "Core PHP", level: 95 },
        { name: "Laravel", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "MySQL", level: 88 }
    ],
    marketing: [
        { name: "Google Ads", level: 85 },
        { name: "SEO", level: 88 },
        { name: "Content Marketing", level: 80 },
        { name: "Social Media", level: 85 }
    ]
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    initializeSkills();
    initializeAnimations();
    setupContactForm();
    initializeExperienceCards();
    initializeScrollAnimations();
    initSkillsFilter();
    animateSkills();
});

// Initialize Projects
function initializeProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Render all projects initially
    renderProjects('all');

    // Add filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(category);
        });
    });

    function renderProjects(category) {
        let content = '';
        
        if (category === 'marketing') {
            content = `
                <div class="marketing-showcase animate-on-scroll">
                    <div class="marketing-description">
                        <p>${projects.marketing.description}</p>
                    </div>
                    
                    <div class="marketing-services">
                        <h3>Digital Marketing Services</h3>
                        <div class="services-grid">
                            ${projects.marketing.services.map(service => `
                                <div class="service-card">
                                    <h4><i class="fas fa-check-circle"></i> ${service.title}</h4>
                                    <ul>
                                        ${service.items.map(item => `
                                            <li>${item}</li>
                                        `).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="marketing-tools">
                        <h3>Marketing Tools & Resources</h3>
                        <div class="tools-section">
                            <div class="tool-category">
                                <h4><i class="fas fa-puzzle-piece"></i> Browser Extensions</h4>
                                <div class="tool-badges">
                                    ${projects.marketing.tools.browserExtensions.map(tool => `
                                        <span class="tool-badge">${tool}</span>
                                    `).join('')}
                                </div>
                            </div>
                            <div class="tool-category">
                                <h4><i class="fas fa-globe"></i> Websites & Platforms</h4>
                                <div class="tool-badges">
                                    ${projects.marketing.tools.websites.map(tool => `
                                        <span class="tool-badge">${tool}</span>
                                    `).join('')}
                                </div>
                            </div>
                            <div class="tool-category">
                                <h4><i class="fas fa-paint-brush"></i> Design Resources</h4>
                                <div class="tool-badges">
                                    ${projects.marketing.tools.design.map(tool => `
                                        <span class="tool-badge">${tool}</span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-websites">
                        <h3>Portfolio Websites</h3>
                        <div class="website-grid">
                            ${projects.marketing.portfolioSites.map(url => `
                                <a href="${url}" target="_blank" class="website-card">
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>${url}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            let projectsList = [];
            if (category === 'all') {
                projectsList = [...projects.php, ...projects.laravel, ...projects.restapi];
            } else {
                projectsList = projects[category] || [];
            }

            content = projectsList.map(project => `
                <div class="project-card animate-on-scroll">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        ${project.preview ? `
                            <div class="preview-links">
                                ${project.preview.urls.map(url => `
                                    <a href="${url}" target="_blank" class="preview-btn">
                                        <i class="fas fa-external-link-alt"></i> Preview
                                    </a>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="project-content">
                        <p class="project-description">${project.description}</p>
                        <div class="tech-stack">
                            ${project.technologies.map(tech => `
                                <span class="tech-badge">${tech}</span>
                            `).join('')}
                        </div>
                        ${project.preview && project.preview.credentials ? `
                            <div class="preview-credentials">
                                <h4>Demo Credentials</h4>
                                <ul>
                                    ${project.preview.credentials.id ? `<li>ID: ${project.preview.credentials.id}</li>` : ''}
                                    <li>Username: ${project.preview.credentials.username}</li>
                                    <li>Password: ${project.preview.credentials.password}</li>
                                </ul>
                            </div>
                        ` : ''}
                        ${project.features ? `
                            <div class="project-features">
                                <h4>Key Features</h4>
                                <ul>
                                    ${project.features.map(feature => `
                                        <li>${feature}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }

        projectsGrid.innerHTML = content;
        initializeScrollAnimations();
    }
}

// Initialize Skills
function initializeSkills() {
    const developmentSkills = document.querySelector('.skill-category:first-child .skill-bars');
    const marketingSkills = document.querySelector('.skill-category:last-child .skill-bars');

    // Render development skills
    skills.development.forEach(skill => {
        developmentSkills.innerHTML += createSkillBar(skill);
    });

    // Render marketing skills
    skills.marketing.forEach(skill => {
        marketingSkills.innerHTML += createSkillBar(skill);
    });

    function createSkillBar(skill) {
        return `
            <div class="skill-item animate-on-scroll">
                <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percentage">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `;
    }
}

// Experience Section Interaction
function initializeExperienceCards() {
    document.querySelectorAll('.experience-summary').forEach(summary => {
        summary.addEventListener('click', () => {
            const card = summary.closest('.experience-card');
            const details = card.querySelector('.experience-details');
            const toggle = card.querySelector('.details-toggle');
            
            // Close other cards
            document.querySelectorAll('.experience-details.active').forEach(detail => {
                if (detail !== details) {
                    detail.classList.remove('active');
                    detail.closest('.experience-card')
                        .querySelector('.details-toggle')
                        .classList.remove('active');
                }
            });

            // Toggle current card
            details.classList.toggle('active');
            toggle.classList.toggle('active');

            // Smooth scroll to card if it's not fully visible
            if (details.classList.contains('active')) {
                const cardRect = card.getBoundingClientRect();
                const isFullyVisible = (
                    cardRect.top >= 0 &&
                    cardRect.bottom <= window.innerHeight
                );

                if (!isFullyVisible) {
                    card.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Initialize first card as open
    document.querySelector('.experience-card').querySelector('.experience-summary').click();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and project cards
    document.querySelectorAll('section, .project-card').forEach(el => {
        observer.observe(el);
    });
}

// Scroll Animation
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Contact Form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Here you would typically send the data to a server
            // For now, we'll just log it
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
}

// Add scroll-based navbar background
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Handle skill filtering
const initSkillsFilter = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skills-category-card');

    const filterSkills = (category) => {
        skillCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                // Reset and trigger animations for visible cards
                const skillItems = card.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    item.classList.remove('animate');
                    void item.offsetWidth; // Force reflow
                    item.classList.add('animate');
                });
            } else {
                card.style.display = 'none';
            }
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter skills
            const category = btn.getAttribute('data-filter');
            filterSkills(category);
        });
    });

    // Show all skills initially
    filterSkills('all');
};

// Animate skill progress bars when they come into view
const animateSkills = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progress = skillItem.querySelector('.progress');
                const skillLevel = skillItem.dataset.skill;
                
                skillItem.classList.add('animate');
                progress.style.width = `${skillLevel}%`;
                
                // Remove observer after animation
                observer.unobserve(skillItem);
            }
        });
    }, { threshold: 0.2 });

    skillItems.forEach(item => observer.observe(item));
};

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll and section handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Handle specific sections
                if (targetId === 'experience') {
                    setTimeout(() => {
                        const firstCard = document.querySelector('.experience-card');
                        if (firstCard && !firstCard.classList.contains('expanded')) {
                            expandExperienceCard(firstCard);
                        }
                    }, 500);
                } else if (targetId === 'skills') {
                    setTimeout(() => {
                        const firstSkill = document.querySelector('.skill-item');
                        if (firstSkill && !firstSkill.classList.contains('expanded')) {
                            expandSkillItem(firstSkill);
                        }
                        initializeSkills();
                    }, 500);
                }
            }
        });
    });

    // Experience cards functionality
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('click', () => expandExperienceCard(card));
    });

    // Skills functionality
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => expandSkillItem(item));
    });

    // Initialize skills on page load
    initializeSkills();
});

function expandExperienceCard(card) {
    const details = card.querySelector('.experience-details');
    const toggle = card.querySelector('.details-toggle i');
    const isExpanded = card.classList.contains('expanded');

    // Close all other cards
    document.querySelectorAll('.experience-card').forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('expanded')) {
            otherCard.classList.remove('expanded');
            const otherToggle = otherCard.querySelector('.details-toggle i');
            if (otherToggle) {
                otherToggle.classList.remove('fa-chevron-up');
                otherToggle.classList.add('fa-chevron-down');
            }
        }
    });

    // Toggle current card
    card.classList.toggle('expanded');
    if (toggle) {
        toggle.classList.toggle('fa-chevron-down');
        toggle.classList.toggle('fa-chevron-up');
    }
}

function expandSkillItem(item) {
    const details = item.querySelector('.skill-details');
    const isExpanded = item.classList.contains('expanded');

    // Close all other skills
    document.querySelectorAll('.skill-item').forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('expanded')) {
            otherItem.classList.remove('expanded');
        }
    });

    // Toggle current skill
    item.classList.toggle('expanded');
}

function initializeSkills() {
    // Show skill categories with animation
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        setTimeout(() => {
            category.classList.add('visible');
        }, index * 200);
    });

    // Animate skill progress bars
    document.querySelectorAll('.skill-item').forEach(item => {
        const progress = item.querySelector('.skill-progress');
        const level = item.getAttribute('data-skill');
        if (progress && level) {
            setTimeout(() => {
                progress.style.width = `${level}%`;
            }, 500);
        }
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('skill-category')) {
                entry.target.classList.add('visible');
            }
            if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate');
            }
        }
    });
}, { threshold: 0.1 });

// Observe elements
document.querySelectorAll('.skill-category, .project-card').forEach(el => {
    observer.observe(el);
});

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // If clicking experience section, expand first card
                if (target.id === 'experience') {
                    setTimeout(() => {
                        const firstCard = document.querySelector('.experience-card');
                        if (firstCard && !firstCard.classList.contains('expanded')) {
                            expandExperienceCard(firstCard);
                        }
                    }, 500);
                }
            }
        });
    });

    // Experience cards functionality
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('click', () => expandExperienceCard(card));
    });

    // Profile image hover effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profileImg.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            const secondImage = profileImg.querySelector('img:last-child');
            if (secondImage) {
                secondImage.style.transform = `
                    perspective(1000px)
                    rotateY(${x * 10}deg)
                    rotateX(${-y * 10}deg)
                    translateZ(20px)
                `;
            }
        });
        
        profileImg.addEventListener('mouseleave', () => {
            const secondImage = profileImg.querySelector('img:last-child');
            if (secondImage) {
                secondImage.style.transform = '';
            }
        });
    }
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    // Smooth scroll for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop;
                window.scrollTo({
                    top: offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hover effect for navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const link = this.querySelector('.nav-link');
            if (link) {
                link.style.transform = 'translateY(-2px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const link = this.querySelector('.nav-link');
            if (link) {
                link.style.transform = 'translateY(0)';
            }
        });
    });
});

// Typing animation for roles
const roles = document.querySelectorAll('.role');
let currentRole = 0;

function rotateRoles() {
    roles.forEach((role, index) => {
        if (index === currentRole) {
            role.style.opacity = '1';
            role.style.transform = 'translateY(0)';
        } else {
            role.style.opacity = '0';
            role.style.transform = 'translateY(10px)';
        }
    });
    
    currentRole = (currentRole + 1) % roles.length;
}

setInterval(rotateRoles, 3000);
rotateRoles(); // Initial call

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        strings: [
            'Full Stack Laravel Developer',
            'Digital Marketing Specialist',
            'AI Integration Expert'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    };

    if (document.querySelector('#typed-text')) {
        new Typed('#typed-text', options);
    }

    // Profile image tilt effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profileImg.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            profileImg.style.transform = `
                rotateY(${x * 10}deg)
                rotateX(${-y * 10}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        });
        
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = '';
        });
    }

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('.section');
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Profile image tilt effect
    const profileFrame = document.querySelector('.profile-frame');
    if (profileFrame) {
        profileFrame.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = profileFrame.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            profileFrame.style.transform = `
                perspective(1000px)
                rotateY(${x * 10}deg)
                rotateX(${-y * 10}deg)
                scale3d(1.02, 1.02, 1.02)
            `;
        });
        
        profileFrame.addEventListener('mouseleave', () => {
            profileFrame.style.transform = '';
        });
    }

    // CTA buttons hover effect
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

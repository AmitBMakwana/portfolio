# Modern Portfolio Website

A responsive and visually appealing portfolio website showcasing professional experience in software development and digital marketing.

## Features

- Modern and clean design
- Responsive layout for all devices
- Smooth scroll animations
- Interactive project filtering
- Animated skill bars
- Contact form
- Social media integration

## Structure

```
portfolio/
│
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── profile-placeholder.jpg
└── index.html
```

## Setup

1. Clone this repository
2. Replace the profile image in the `images` folder with your own photo
3. Update the personal information in `index.html`
4. Modify the projects and skills data in `main.js`
5. Update social media links and contact information

## Customization

### Colors
The color scheme can be modified in the `css/style.css` file by updating the root variables:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --light-background: #f3f4f6;
}
```

### Projects
Add or modify projects in the `js/main.js` file:

```javascript
const projects = [
    {
        title: "Project Name",
        description: "Project Description",
        category: "php", // or "laravel"
        technologies: ["Tech1", "Tech2"]
    }
];
```

### Skills
Update skills and proficiency levels in `js/main.js`:

```javascript
const skills = {
    development: [
        { name: "Skill Name", level: 90 }
    ],
    marketing: [
        { name: "Skill Name", level: 85 }
    ]
};
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The contact form needs backend implementation to handle form submissions
- Replace all placeholder content with your actual information
- Optimize images before deployment

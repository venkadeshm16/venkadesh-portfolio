# Portfolio Website

A modern, responsive portfolio website built with Node.js and Express.js.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Multiple Sections**: 
  - Home page with hero section and technology showcase
  - Experience page with timeline layout
  - Projects page with detailed project cards
  - Contact page with contact form and information
- **Interactive Elements**: Hover effects, animations, and form validation
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome
- **Styling**: Custom CSS with Flexbox and Grid

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Start the production server:
```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`

## Customization

### Personal Information
Edit the `portfolioData` object in `server.js` to update:
- Personal details (name, title, contact info)
- Work experience
- Technologies and skills
- Projects
- Social media links

### Styling
Modify `public/css/style.css` to customize:
- Colors and themes
- Layout and spacing
- Animations and effects
- Responsive breakpoints

### Content
Update the EJS templates in the `views/` directory to:
- Change page layouts
- Add new sections
- Modify content structure

## Project Structure

```
portfolio/
├── server.js              # Main server file
├── package.json           # Dependencies and scripts
├── README.md             # Project documentation
├── views/                # EJS templates
│   ├── index.ejs         # Home page
│   ├── experience.ejs    # Experience page
│   ├── projects.ejs      # Projects page
│   └── contact.ejs       # Contact page
└── public/               # Static files
    ├── css/
    │   └── style.css     # Main stylesheet
    ├── js/
    │   └── script.js     # JavaScript functionality
    └── images/           # Image assets
        └── placeholder.jpg
```

## Deployment

### Heroku
1. Create a Heroku app
2. Set environment variables if needed
3. Deploy using Git:
```bash
git add .
git commit -m "Deploy portfolio"
git push heroku main
```

### Netlify (Static Export)
1. Build static files
2. Upload to Netlify
3. Configure redirects if needed

### VPS/Server
1. Clone repository on server
2. Install dependencies
3. Use PM2 or similar for process management
4. Configure reverse proxy (Nginx/Apache)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact me directly.

---

**Note**: Remember to replace placeholder content with your actual information, add real project images, and customize the styling to match your personal brand.
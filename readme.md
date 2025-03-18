# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, TailwindCSS, and JavaScript. Features dark mode support, scroll animations, and interactive forms.

## 🌟 Features

- Responsive design that works on all devices
- Dark/Light mode with system preference detection
- Smooth scroll animations and reveals
- Interactive project cards
- Contact form with hCaptcha integration
- Project recommendation system
- Dynamic navigation highlighting

## 🛠️ Technologies Used

- HTML5
- JavaScript (Vanilla)
- TailwindCSS
- Web3Forms API
- hCaptcha

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/PeterBredell/Portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Run TailwindCSS build:
```bash
npx tailwindcss -i src/input.css -o src/output.css --watch
```

## 🚀 Project Structure

```
Portfolio/
├── assets/              # Images and media files
├── src/
│   ├── input.css       # TailwindCSS input file
│   ├── output.css      # Generated CSS
│   ├── main.js         # Main JavaScript file
│   ├── forms.js        # Form handling
│   └── formReset.js    # Form reset functionality
├── index.html          # Main HTML file
├── tailwind.config.js  # TailwindCSS configuration
└── README.md          # Project documentation
```

## 💡 Key Components

- Animated scroll reveals
- Dynamic form handling with Web3Forms
- Secure contact forms with hCaptcha
- Project recommendation system
- System theme detection
- Responsive navigation

## 🔧 Configuration

The project uses TailwindCSS for styling. Configuration can be found in `tailwind.config.js`.

To modify the Web3Forms integration:
1. Update the access key in forms
2. Modify form handling in `forms.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Live Demo

Visit the live site: [Peter's Portfolio](https://peterbredell.github.io/Portfolio/)

## 📄 License

MIT License - Feel free to use this project as a template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a pull request

## 🤖 AI Development Disclaimer

Parts of this portfolio website were developed with assistance from AI tools:
- GitHub Copilot: Used for code suggestions and debugging
- ChatGPT: Used for UI/UX recommendations and code structure guidance

While AI tools were used to enhance development efficiency, all code was reviewed, modified, and validated by me to ensure quality and security. The portfolio content, projects, and personal information are entirely my own.

## 📬 Contact

- LinkedIn: [Peter Bredell](https://www.linkedin.com/in/peter-bredell/)
- GitHub: [@PeterBredell](https://github.com/PeterBredell)
- Email: peterbredell072@gmail.com

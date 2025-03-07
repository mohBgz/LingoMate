# LingoMate


## 🚀 Getting Started

### Prerequisites
- Git installed on your machine
- A modern web browser
- A text editor (VS Code recommended)

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/mohBgz/LingoMate.git
cd LingoMate
```

2. **View the website locally**
- Option 1: Using VS Code Live Server
  - Install "Live Server" extension in VS Code
  - Right-click on `index.html`
  - Select "Open with Live Server"

- Option 2: Using Python's built-in server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser

- Option 3: Using Node.js http-server
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server
```

## 👥 Team Collaboration Guide

### First Time Setup
1. Accept collaboration invite from repository owner
2. Clone the repository
```bash
git clone https://github.com/mohBgz/LingoMate.git
cd LingoMate
```

### Making Changes
1. **Create a new branch for your feature**
```bash
# Get latest changes
git pull origin main

# Create and switch to new branch
git checkout -b feature/your-feature-name
```

2. **Make your changes**
```bash
# Stage changes
git add .

# Commit changes with descriptive message
git commit -m "Add: brief description of your changes"

# Push your feature branch
git push origin feature/your-feature-name
```

3. **Create Pull Request**
- Go to [LingoMate repository](https://github.com/mohBgz/LingoMate)
- Click "Pull requests" → "New pull request"
- Select your feature branch
- Add description of your changes
- Request review from team members

### Best Practices
- Always create a new branch for features/changes
- Keep commits focused and well-described
- Test changes locally before pushing
- Keep pull requests small and focused
- Update your branch with main regularly:
```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

## 🛠️ Project Structure
```
LingoMate/
├── index.html      # Main entry point
├── styles.css      # Global styles
├── img/           # Image assets
└── icons/         # Icon assets
```

## 📝 Additional Notes
- Always pull latest changes before starting new work
- Check if your changes work locally before pushing
- Follow the existing code style and conventions
- Contact team lead for questions or access issues
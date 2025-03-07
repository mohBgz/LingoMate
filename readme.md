# LingoMate

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
# or
git switch -c feature/your-feature-name

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

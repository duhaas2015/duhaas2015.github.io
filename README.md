# 🃏 Sheepshead Scoring App - GitHub Pages

This repository contains a comprehensive Progressive Web App (PWA) for tracking sheepshead card game sessions.

## 📁 Project Structure

```
📁 duhaas2015.github.io/
├── 📄 README.md                    # This file
└── 📁 games/                       # Main application directory
    ├── 📄 index.html               # Main sheepshead scoring app
    ├── 📄 docs.html                # Comprehensive documentation
    ├── 📄 manifest.json            # PWA manifest
    ├── 📄 sw.js                    # Service worker for offline functionality
    ├── 📄 offline.html             # Offline fallback page
    ├── 📄 browserconfig.xml        # Windows tile configuration
    └── 📁 icons/                   # App icons directory
        ├── 📄 README.md            # Icon requirements and instructions
        └── 📄 icon-placeholder.svg # SVG icon placeholder
```

## 🚀 Live Application

**Access the app at:** https://duhaas2015.github.io/games/

### 📱 PWA Installation
- **Mobile**: Browser will prompt to "Add to Home Screen"
- **Desktop**: Install button appears in address bar (Chrome/Edge)
- **Features**: Works offline, app-like experience, automatic updates

## 🎯 What's Included

### 🎮 Core Sheepshead Scoring App
- Complete scoring system with all sheepshead rules
- 5-hand session management with automatic settlement
- Advanced doubler queue system
- Comprehensive player statistics (overall + picker records)
- Historical game tracking and analysis
- Data export/import capabilities

### 📱 PWA Features
- **Offline First**: Works completely without internet
- **Installable**: Native app experience on mobile and desktop
- **Fast Loading**: Cached locally after first visit
- **Auto-Updates**: Seamless updates when changes are pushed
- **App Shortcuts**: Quick access to New Game, History, Stats

### 📚 Documentation
- **Comprehensive Guide**: Complete feature documentation at `/games/docs.html`
- **Visual Examples**: Screenshots and usage scenarios
- **Technical Details**: Setup, troubleshooting, and capabilities

## 🛠️ Development

### Local Development
```bash
# Clone repository
git clone https://github.com/duhaas2015/duhaas2015.github.io.git

# Open in browser
open games/index.html

# Or serve with local server
cd games
python -m http.server 8000
# Visit: http://localhost:8000
```

### PWA Testing
1. Serve over HTTPS (required for service workers)
2. Open browser dev tools → Application → Manifest
3. Check "Add to Home Screen" functionality
4. Test offline by disconnecting network

## 📦 Adding Icons

The app needs icons for full PWA functionality:

1. **Create main icon** (512x512px) with sheepshead/card theme
2. **Use PWA generator** like https://realfavicongenerator.net/
3. **Download all sizes** to `/games/icons/` folder
4. **Test installation** on various devices

See `/games/icons/README.md` for detailed requirements.

## 🔄 Updates

The app automatically updates when changes are pushed to GitHub Pages:
- Service worker detects new versions
- Users get update notification
- Refresh applies latest changes
- Zero downtime updates

## 🎯 Features Highlights

### ✅ Game Management
- 7 preset players + custom player support
- 5+ player games with smart dealer rotation
- Flexible sitting out for 6+ player games

### ✅ Advanced Scoring
- Dollar-based display ($1/point)
- Asymmetric schneider logic (31/30 point thresholds)
- Wrap/re-wrap tracking with proper multipliers
- Doubler queue system (not compounding)

### ✅ Statistics & Analytics
- Dual record tracking (overall vs picker performance)
- Doubler win tracking (session + lifetime)
- Historical session analysis
- CSV export for external analysis

### ✅ Technical Excellence
- Single-file architecture (no dependencies)
- localStorage persistence
- Responsive mobile-first design
- PWA capabilities with offline support

## 📊 Usage Statistics

Perfect for:
- **Regular Game Groups**: Weekly sheepshead nights
- **Tournament Play**: Multi-session tournaments  
- **Statistics Tracking**: Long-term player analysis
- **Mobile Gaming**: Play anywhere, works offline

## 🤝 Contributing

This is a self-contained single-file application. To contribute:
1. Fork the repository
2. Make changes to `/games/index.html`
3. Test thoroughly (especially PWA functionality)
4. Submit pull request

## 📄 License

Open source - feel free to use and modify for personal use.

---

<div align="center">

**🎯 Built for Sheepshead Players, by Sheepshead Players**

[🚀 Launch App](https://duhaas2015.github.io/games/) • [📖 Documentation](https://duhaas2015.github.io/games/docs.html)

</div>
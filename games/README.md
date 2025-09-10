# 🃏 Sheepshead Scoring App

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A comprehensive web-based scoring application for tracking sheepshead card game sessions**

*Advanced statistics • Session management • Data persistence*

[🚀 Get Started](#-setup--installation) • [📖 Documentation](#-usage-instructions) • [🎯 Features](#-features)

</div>

---

## 📋 Overview

This application helps groups of sheepshead players track scores, statistics, and game history across multiple sessions. Perfect for regular game nights and tournaments!

🎯 **Designed for**: Picker-calls-partner variant with 5+ players  
💾 **Data Storage**: Automatic local storage with export capabilities  
📱 **Platform**: Works on desktop and mobile browsers

---

## 🎯 Features

### 👥 Game Setup & Players
- 🎭 **Preset Players**: 7 predefined regular players ready to go
- ➕ **Custom Players**: Add your own players (up to 8 total)
- 🔢 **Flexible Count**: Supports 5+ players with smart dealer rotation
- 🪑 **Sitting Out**: Automatic management when more than 5 players

### 💰 Scoring System
- 🏦 **Dollar Display**: Shows points as dollars ($1/point) for easy settlement
- 📊 **Session Management**: Automatic 5-hand sessions with settlement alerts
- 📈 **Running Totals**: Tracks cumulative debt/winnings across sessions
- ⚡ **Real-Time Updates**: Live score updates as you play

### 📝 Hand Tracking
- 🎯 **Complete Records**: Picker, partner, points, called suit, dealer
- 🌯 **Wrap Tracking**: Records who wrapped and re-wrapped hands
- 🧮 **Smart Schneider**: Correctly implements asymmetric schneider rules
  - 🎯 Picker team needs **31+** points to avoid schneider
  - 🛡️ Opponents need **30+** points to avoid schneider
- 🚫 **Schwarz Detection**: Automatic "No Trick" detection (0 or 120 points)

### 🎲 Advanced Doubler System
- 🔄 **Doubler Queue**: Multiple doublers stack as separate 2x hands
- 👁️ **Visual Indicators**: Clear display of queued doublers
- ➕ **Proper Logic**: 3 doublers = next 3 hands are 2x (not 8x!)

### 📊 Advanced Statistics

#### 🏆 Current Session Stats
- 📋 **Live Scoreboard**: Real-time session totals with hand breakdowns
- 🎲 **Doubler Tracking**: Shows doublers won per player this session
- ⏱️ **Progress Display**: Shows hands remaining until settlement

#### 🎯 Player Performance
- 🏆 **Overall Record**: Total wins-losses across all roles
- 🎯 **Picker Record**: Wins-losses specifically when picking
- 📈 **Key Metrics**:
  - Overall win percentage
  - Times picked/partnered
  - 🎲 Doublers won (lifetime)
  - 💰 Average score per hand

#### 📚 Historical Data
- 📖 **Game History**: Browse all completed sessions
- 🔍 **Session Details**: Detailed breakdown of each game
- 🏅 **All-Time Rankings**: Comprehensive player performance
- ♠️ **Suit Analysis**: Called suit success rates
- 🌯 **Wrap Statistics**: Wrap/re-wrap success tracking

### 💾 Data Management
- 🔐 **Auto-Save**: Automatic saving to browser storage
- 📤 **Export Options**: 
  - CSV export of current game
  - Individual session exports
  - Complete historical data export
- 🔄 **Backup & Restore**: Full data import/export capability
- ⚡ **Persistence**: Survives browser restarts

---

## 🎮 Game Rules Implemented

<table>
<tr>
<td width="50%">

### 🎯 Sheepshead Basics
- **👥 Players**: 5+ required to start
- **🤝 Partnership**: Picker calls partner via suit
- **🎯 Points**: 120 total available
- **🏆 Win Condition**: Picker team needs 61+ points

</td>
<td width="50%">

### 🏆 Scoring Rules
- **📊 Base**: 1 point for normal win/loss
- **⚡ Schneider**: 2 points (asymmetric thresholds)
- **🚫 Schwarz**: 3 points for complete shutout
- **🌯 Wrapping**: Doubles points when defense wins
- **🎲 Doublers**: 2x multiplier for queued hands

</td>
</tr>
</table>

### 🎲 Dealer Rules
| Player Count | Dealer Role |
|-------------|-------------|
| **5 Players** | 🎯 Can pick or partner |
| **6+ Players** | 🪑 Sits out (cannot pick/partner) |

---

## 🚀 Setup & Installation

### 💻 Quick Start
1. **📥 Download** the `index.html` file
2. **🌐 Open** in any modern web browser
3. **🎉 Start playing** - no setup required!

### 🌐 Web Hosting
```bash
# Upload to your web server
📁 /your-website/
  └── 📄 index.html
  
# Access at: https://yourdomain.com/index.html
```

### ✅ Requirements
- 🌐 Modern web browser
- 📱 JavaScript enabled
- 💾 Local storage support

---

## 📖 Usage Instructions

### 🎬 Starting a Game

<table>
<tr>
<td width="30%">

**1. 👥 Select Players**
- ✅ Check preset players
- ➕ Add custom players
- 🎯 Minimum 5 required

</td>
<td width="30%">

**2. 🚀 Launch Game**
- 🖱️ Click "Start Game"
- ⚡ Auto-setup interface
- 🎯 Ready to score!

</td>
<td width="40%">

**3. 🎮 Start Playing**
- 🎲 Record each hand
- 📊 Watch live stats
- 💰 Track winnings

</td>
</tr>
</table>

### 📝 Recording Hands

> **Step-by-step hand entry workflow**

| Step | Action | Notes |
|------|--------|-------|
| 1️⃣ | **🎯 Select Dealer** | Required first with 6+ players |
| 2️⃣ | **👤 Choose Picker** | From available players |
| 3️⃣ | **🤝 Select Partner** | Auto-excludes picker/dealer |
| 4️⃣ | **🎯 Enter Points** | Picker team total (0-120) |
| 5️⃣ | **♠️ Called Suit** | Hearts, Spades, or Clubs |
| 6️⃣ | **🌯 Mark Wraps** | If applicable + who wrapped |
| 7️⃣ | **🎲 Mark Doublers** | If everyone passed |
| 8️⃣ | **✅ Score Hand** | Records and updates stats |

---

## 📊 Statistics Dashboard

### 🏆 Performance Tracking

<div align="center">

| Stat Type | What It Shows | Why It Matters |
|-----------|---------------|----------------|
| **🎯 Overall Record** | Total W-L across all roles | General skill level |
| **👤 Picker Record** | W-L specifically as picker | Risk assessment ability |
| **📈 Win %** | Success rate percentage | Consistency measure |
| **🎲 Doublers Won** | Doubled hands won | High-pressure performance |

</div>

### 📈 Session Management

- 🔄 **Auto-Settlement**: Every 5 hands
- 💰 **Clear Alerts**: Who owes/collects money  
- 📊 **Running Totals**: Cumulative tracking
- 📚 **History Access**: Browse past sessions

---

## 📤 Export & Backup

### 📄 Available Exports

```
📊 Current Game     → All current hands + totals
📝 Session Data     → Specific 5-hand session  
📚 All History      → Complete database export
🔧 Debug Info       → Raw storage data
```

### 💾 Data Recovery
- 🔧 Use "Debug Storage" to inspect data
- 📤 Export regularly for backups
- 📥 Import function restores from files

---

## 🛠️ Troubleshooting

### ❓ Common Issues

<details>
<summary>🚨 <strong>"Need 5+ Players" Error</strong></summary>

**Solution**: Add more players to your game setup
- ✅ Check at least 5 preset players
- ➕ Add custom players if needed
- 🎯 Click "Start Game" when ready

</details>

<details>
<summary>🚨 <strong>"Select Dealer First" Message</strong></summary>

**Solution**: With 6+ players, dealer must be selected first
- 🎯 Choose dealer from dropdown
- 👤 Then select picker
- 🤝 Finally select partner

</details>

<details>
<summary>🚨 <strong>Missing Game History</strong></summary>

**Solution**: Check browser storage settings
- 🔐 Ensure localStorage is enabled
- 🔄 Try refreshing the browser
- 💾 Check if you have any saved data

</details>

---

## 🔧 Technical Details

### 🏗️ Architecture
- **📄 Single File**: Complete app in one HTML file
- **🔧 No Dependencies**: Pure HTML/CSS/JavaScript
- **📱 Responsive**: Works on all devices
- **💾 Local Storage**: Browser-based persistence

### 🌐 Browser Support
- ✅ Chrome/Chromium
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

---

## 🎉 Version Highlights

The app has evolved to include:

- 🎲 **Advanced Doubler System**: Proper queueing mechanics
- 🧮 **Smart Schneider Logic**: Asymmetric point thresholds
- 📊 **Comprehensive Stats**: Overall vs picker performance
- 🏆 **Session Management**: 5-hand automatic cycles
- 📚 **Historical Tracking**: Complete game history
- 💎 **Enhanced UI**: Beautiful, responsive design

---

## 🤝 Contributing

This single-file application is designed for simplicity and ease of deployment. 

**Want to contribute?**
- 🔧 Make direct edits to `index.html`
- 🧪 Test thoroughly before sharing
- 📝 Document any new features

---

## 📄 License

**Open Source** - Feel free to modify and distribute for personal use.

---

<div align="center">

**🎯 Made for Sheepshead Players, by Sheepshead Players**

*Happy Gaming! 🃏*

</div>
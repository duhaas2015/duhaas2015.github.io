# Sheepshead Scoring App

A comprehensive web-based scoring application for tracking sheepshead card game sessions with advanced statistics, session management, and data persistence.

## Overview

This application helps groups of sheepshead players track scores, statistics, and game history across multiple sessions. It's designed specifically for the picker-calls-partner variant of sheepshead with 5+ players.

## Features

### Game Setup & Players
- **Preset Players**: 7 predefined regular players (Duane Haas, Nate Miller, Adam Arndt, Jim Remm, Rick Lopez, Jeff LaValle, Todd Sobotka)
- **Custom Players**: Add up to 8 total players per game
- **Flexible Player Count**: Supports 5+ players with automatic dealer rotation
- **Sitting Out**: Players can sit out hands when there are more than 5 players

### Scoring System
- **Dollar-Based Scoring**: Displays points as dollars ($1/point) for easy settlement
- **Session Management**: Automatic 5-hand sessions with settlement summaries
- **Running Totals**: Tracks cumulative debt/winnings across all sessions
- **Real-Time Updates**: Live score updates during gameplay

### Hand Tracking
- **Complete Hand Records**: Tracks picker, partner, points, called suit, dealer
- **Wrap/Re-wrap Tracking**: Records who wrapped and re-wrapped hands
- **Schneider Logic**: Correctly implements asymmetric schneider rules
  - Picker team needs 31+ points to avoid schneider
  - Opponents need 30+ points to avoid schneider
- **Schwarz Detection**: Tracks "No Trick" hands (0 or 120 points)

### Doubler System
- **Doubler Queue**: Multiple doublers stack as separate 2x hands
- **Visual Indicators**: Shows queued doublers in session info and hand titles
- **Proper Cascading**: 3 doublers = next 3 hands are 2x (not 8x)

### Advanced Statistics

#### Current Session Stats
- **Live Scoreboard**: Real-time session totals with hand-by-hand breakdown
- **Doubler Tracking**: Shows doublers won per player in current session
- **Session Progress**: Displays hands remaining until settlement

#### Player Statistics
- **Overall Record**: Total wins-losses across all roles
- **Picker Record**: Wins-losses specifically when picking
- **Performance Metrics**:
  - Overall win percentage
  - Times picked/partnered
  - Doublers won (lifetime)
  - Average score per hand
  - Total earnings/losses

#### Historical Data
- **Game History**: Browse all completed 5-hand sessions
- **Session Details**: Detailed breakdown of each historical session
- **All-Time Stats**: Comprehensive player rankings and performance data
- **Suit Statistics**: Analysis of called suit success rates
- **Wrap Statistics**: Tracking of wrap/re-wrap success

### Data Management
- **Local Storage**: Automatic saving of all game data
- **Export Functions**: 
  - CSV export of current game
  - CSV export of individual sessions
  - CSV export of all historical data
- **Import/Export**: Full data backup and restore capability
- **Data Persistence**: Survives browser refreshes and closures

## Game Rules Implemented

### Sheepshead Basics
- **Minimum Players**: 5 players required to start
- **Picker-Partner System**: Picker calls a partner via suit
- **Point System**: 120 total points available
- **Winning Threshold**: Picker team needs 61+ points to win

### Scoring Rules
- **Base Points**: 1 point for normal win/loss
- **Schneider**: 2 points when losing team gets ≤30 points (picker) or ≤29 points (opponents)
- **Schwarz (No Trick)**: 3 points for complete shutout
- **Wrapping**: Doubles the points when defense wins
- **Re-wrapping**: Doubles again when picker team wins after wrap
- **Doublers**: 2x multiplier for hands following "everyone passes" situations

### Dealer Rules
- **5 Players**: Dealer can pick or partner
- **6+ Players**: Dealer sits out and cannot pick or partner
- **Rotation**: Dealer changes each hand

## Usage Instructions

### Starting a Game
1. Select preset players or add custom players (minimum 5, maximum 8)
2. Click "Start Game" to begin
3. Application automatically sets up scoring interface

### Recording Hands
1. **Select Dealer** (required first with 6+ players)
2. **Choose Picker** from available players
3. **Select Partner** (automatically excludes picker and dealer if applicable)
4. **Enter Points** scored by picker team
5. **Select Called Suit** (Hearts, Spades, or Clubs)
6. **Mark Wraps** if applicable and select who wrapped
7. **Mark Doublers** if everyone passed
8. Click "Score Hand" to record

### Session Management
- Sessions automatically complete after 5 hands
- Settlement alerts show who owes/collects money
- New sessions start automatically
- Access historical data via "Game History" tab

### Viewing Statistics
- **Current Game Tab**: Live scoreboard and current session stats
- **Game History Tab**: Browse and export past sessions
- **All-Time Stats Tab**: Comprehensive player performance data

## Technical Details

### Browser Compatibility
- Modern web browsers with JavaScript enabled
- Local storage support required for data persistence
- Responsive design works on desktop and mobile devices

### Data Storage
- Uses browser localStorage for data persistence
- Automatic backup on every hand scored
- Data survives browser restarts and updates

### File Structure
- Single HTML file with embedded CSS and JavaScript
- No external dependencies required
- Can be run locally or hosted on any web server

## Setup & Installation

1. Download the `index.html` file
2. Open in any modern web browser
3. No additional setup required

For web hosting:
1. Upload `index.html` to your web server
2. Access via your domain/path
3. All functionality works immediately

## Export Formats

### CSV Exports Include
- **Current Game**: All hands with player scores and details
- **Session Export**: Specific 5-hand session data
- **All Data**: Complete historical export with statistics
- **Columns**: Hand number, player scores, game details, totals

## Troubleshooting

### Common Issues
- **"Need 5+ Players"**: Add more players to player list
- **"Select Dealer First"**: With 6+ players, dealer must be selected before picker/partner
- **Missing History**: Check that localStorage is enabled in browser
- **Export Issues**: Ensure browser allows file downloads

### Data Recovery
- Use "Debug Storage" button to view raw data
- Export all data regularly as backup
- Import function can restore from exported files

## Version History

The application has evolved to include:
- Advanced doubler queueing system
- Asymmetric schneider logic
- Comprehensive statistics tracking
- Session-based gameplay
- Historical data management
- Enhanced player performance metrics

## Contributing

This is a single-file application designed for ease of use and deployment. Modifications can be made directly to the HTML file.

## License

Open source - feel free to modify and distribute for personal use.
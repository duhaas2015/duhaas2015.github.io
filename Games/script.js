class SheepsheadScorer {
    constructor() {
        this.players = [];
        this.scores = {};
        this.hands = [];
        this.currentHand = 1;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updatePlayerInputs();
    }

    setupEventListeners() {
        document.getElementById('player-count').addEventListener('change', () => {
            this.updatePlayerInputs();
        });

        document.getElementById('start-game').addEventListener('click', () => {
            this.startGame();
        });

        document.getElementById('new-game').addEventListener('click', () => {
            this.newGame();
        });

        document.getElementById('wrap-checkbox').addEventListener('change', (e) => {
            this.toggleWrapCaller(e.target.checked);
        });

        document.getElementById('rewrap-checkbox').addEventListener('change', (e) => {
            this.toggleRewrapCaller(e.target.checked);
        });

        document.getElementById('submit-hand').addEventListener('click', () => {
            this.submitHand();
        });
    }

    updatePlayerInputs() {
        const count = parseInt(document.getElementById('player-count').value);
        const container = document.getElementById('player-names');
        
        container.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            const div = document.createElement('div');
            div.className = 'player-input';
            div.innerHTML = `
                <label for="player-${i}">Player ${i}:</label>
                <input type="text" id="player-${i}" placeholder="Enter name" value="Player ${i}">
            `;
            container.appendChild(div);
        }
    }

    startGame() {
        const count = parseInt(document.getElementById('player-count').value);
        this.players = [];
        this.scores = {};
        
        for (let i = 1; i <= count; i++) {
            const name = document.getElementById(`player-${i}`).value.trim() || `Player ${i}`;
            this.players.push(name);
            this.scores[name] = 0;
        }
        
        this.hands = [];
        this.currentHand = 1;
        
        this.populatePlayerSelects();
        this.updateScoreDisplay();
        this.updateHandNumber();
        
        document.getElementById('setup-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
    }

    newGame() {
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('setup-screen').classList.remove('hidden');
        document.getElementById('history-list').innerHTML = '';
    }

    populatePlayerSelects() {
        const selects = ['picker-select', 'partner-select', 'wrap-caller', 'rewrap-caller'];
        
        selects.forEach(selectId => {
            const select = document.getElementById(selectId);
            select.innerHTML = '';
            
            if (selectId === 'partner-select') {
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = 'Select partner...';
                select.appendChild(defaultOption);
            }
            
            this.players.forEach(player => {
                const option = document.createElement('option');
                option.value = player;
                option.textContent = player;
                select.appendChild(option);
            });
        });
    }

    toggleWrapCaller(enabled) {
        const wrapCaller = document.getElementById('wrap-caller');
        const rewrapCheckbox = document.getElementById('rewrap-checkbox');
        
        if (enabled) {
            wrapCaller.classList.remove('hidden');
            rewrapCheckbox.disabled = false;
        } else {
            wrapCaller.classList.add('hidden');
            rewrapCheckbox.checked = false;
            rewrapCheckbox.disabled = true;
            this.toggleRewrapCaller(false);
        }
    }

    toggleRewrapCaller(enabled) {
        const rewrapCaller = document.getElementById('rewrap-caller');
        
        if (enabled) {
            rewrapCaller.classList.remove('hidden');
        } else {
            rewrapCaller.classList.add('hidden');
        }
    }

    calculateHandScore(result, multiplier) {
        const baseScores = {
            'picker-wins': { picker: 2, partner: 1, others: -1 },
            'picker-loses': { picker: -2, partner: -1, others: 1 },
            'picker-schneider': { picker: -4, partner: -2, others: 2 },
            'picker-schwarz': { picker: -6, partner: -3, others: 3 },
            'opposition-schneider': { picker: 4, partner: 2, others: -2 },
            'opposition-schwarz': { picker: 6, partner: 3, others: -3 }
        };

        const base = baseScores[result];
        return {
            picker: base.picker * multiplier,
            partner: base.partner * multiplier,
            others: base.others * multiplier
        };
    }

    submitHand() {
        const picker = document.getElementById('picker-select').value;
        const partner = document.getElementById('partner-select').value;
        const result = document.getElementById('result-select').value;
        const wrapCalled = document.getElementById('wrap-checkbox').checked;
        const rewrapCalled = document.getElementById('rewrap-checkbox').checked;
        const wrapCaller = wrapCalled ? document.getElementById('wrap-caller').value : null;
        const rewrapCaller = rewrapCalled ? document.getElementById('rewrap-caller').value : null;

        if (!picker || !partner) {
            alert('Please select both picker and partner');
            return;
        }

        if (picker === partner) {
            alert('Picker and partner cannot be the same person');
            return;
        }

        let multiplier = 1;
        if (wrapCalled) multiplier *= 2;
        if (rewrapCalled) multiplier *= 2;

        const handScores = this.calculateHandScore(result, multiplier);

        this.players.forEach(player => {
            if (player === picker) {
                this.scores[player] += handScores.picker;
            } else if (player === partner) {
                this.scores[player] += handScores.partner;
            } else {
                this.scores[player] += handScores.others;
            }
        });

        const handData = {
            hand: this.currentHand,
            picker,
            partner,
            result,
            wrapCalled,
            rewrapCalled,
            wrapCaller,
            rewrapCaller,
            multiplier,
            scores: { ...handScores }
        };

        this.hands.push(handData);
        this.addHandToHistory(handData);
        this.updateScoreDisplay();
        this.resetHandForm();
        this.currentHand++;
        this.updateHandNumber();
    }

    addHandToHistory(handData) {
        const historyList = document.getElementById('history-list');
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';

        let wrapText = '';
        if (handData.wrapCalled) {
            wrapText = ` | Wrap by ${handData.wrapCaller}`;
        }
        if (handData.rewrapCalled) {
            wrapText += ` | Re-wrap by ${handData.rewrapCaller}`;
        }

        const resultText = this.getResultText(handData.result);

        historyItem.innerHTML = `
            <div class="history-header">
                Hand ${handData.hand}: ${handData.picker} + ${handData.partner} vs Others
            </div>
            <div class="history-details">
                ${resultText}${wrapText} | Multiplier: ${handData.multiplier}x<br>
                Picker: ${handData.scores.picker > 0 ? '+' : ''}${handData.scores.picker} | 
                Partner: ${handData.scores.partner > 0 ? '+' : ''}${handData.scores.partner} | 
                Others: ${handData.scores.others > 0 ? '+' : ''}${handData.scores.others} each
            </div>
        `;

        historyList.insertBefore(historyItem, historyList.firstChild);
    }

    getResultText(result) {
        const texts = {
            'picker-wins': 'Picker team wins',
            'picker-loses': 'Picker team loses',
            'picker-schneider': 'Picker team schneider',
            'picker-schwarz': 'Picker team schwarz',
            'opposition-schneider': 'Opposition schneider',
            'opposition-schwarz': 'Opposition schwarz'
        };
        return texts[result] || result;
    }

    resetHandForm() {
        document.getElementById('picker-select').selectedIndex = 0;
        document.getElementById('partner-select').selectedIndex = 0;
        document.getElementById('result-select').selectedIndex = 0;
        document.getElementById('wrap-checkbox').checked = false;
        document.getElementById('rewrap-checkbox').checked = false;
        this.toggleWrapCaller(false);
    }

    updateScoreDisplay() {
        const scoreTable = document.getElementById('score-table');
        scoreTable.innerHTML = '';

        const sortedPlayers = this.players.slice().sort((a, b) => this.scores[b] - this.scores[a]);

        sortedPlayers.forEach(player => {
            const scoreRow = document.createElement('div');
            scoreRow.className = 'score-row';
            scoreRow.innerHTML = `
                <span class="player-name">${player}</span>
                <span class="player-score">${this.scores[player]}</span>
            `;
            scoreTable.appendChild(scoreRow);
        });
    }

    updateHandNumber() {
        document.getElementById('hand-number').textContent = this.currentHand;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SheepsheadScorer();
});
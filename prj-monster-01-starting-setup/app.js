const getRandomValue = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const fullGame = Vue.createApp({
    data() {
        return {
            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 1,
            healused : 0,
            winner : null,
            logs : []
        }
    },
    computed: {
        MonsterBarStyles() {
            if(this.monsterHealth < 0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        PlayerBarStyles() {
            if(this.playerHealth < 0){
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        SpecialAttackButtonStyles() {
            if(this.currentRound % 3 === 0){
                return false
            }else{
                return true
            }    
        },
        healButtonStyles() {
            if(this.healused === 0 && this.playerHealth < 50){
                return false;
            }else{
                return true;
            }
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            }else if(value <= 0){
                this.winner = 'Monster'
            }
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw'
            }else if(value <= 0){
                this.winner = 'Player'
            }
        }
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 1;
            this.healused = 0;
            this.winner = null;
            this.logs = [];
        },
        attackByPlayer() {
            this.currentRound++;
            const pattackValue = getRandomValue(12, 5);
            this.monsterHealth -= pattackValue;
            this.addLogMessage('Player', 'attack', pattackValue);
            this.attackByMonster();   
        },
        attackByMonster() { 
            const mattackValue = getRandomValue(15, 8);
            this.playerHealth -= mattackValue;
            this.addLogMessage('Monster', 'attack', mattackValue);
        },
        specialAttackByPlayer() {
            if(this.currentRound >= 3 ){
                const pattackValue = getRandomValue(25, 10);
                this.monsterHealth -= pattackValue;
                this.addLogMessage('Player', 'attack', pattackValue);
                this.specialAttackByMonster();
                this.currentRound = 1;
            }
        },
        specialAttackByMonster() {
            const mattackValue = getRandomValue(15, 8);
            this.playerHealth -= mattackValue;
            this.addLogMessage('Monster', 'attack', mattackValue)
        },
        healPlayer() {
            if(this.healused === 0 && this.playerHealth < 50){
                const playerHealValue = getRandomValue(30, 20);
                this.playerHealth += playerHealValue;
                this.healused = 1
                this.addLogMessage('Player', 'Heal', playerHealValue);
                this.attackByMonster();
            }
        },
        addLogMessage(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },
        gameOver() {
            alert('You have surrendered and lost to the monster!!!!')
            }

    }
}); 
fullGame.mount('#game');
var player;
var enemy;

window.addEvent("domready", function() {
    player = new GamePlayer();
    enemy = new GameEnemy();
});
var GameGroup = new Class({
    "add": function() {}
});

var GameObject = new Class({
    "initialize": function(type) {
        this.object = new Element("div", {
            "class": type
        });
        this.object.inject("stage");
    }
});

var GamePlayer = new Class({
    "Extends": GameObject,
    "initialize": function() {
        this.parent("player");
    },
    "move": function(direction) {
        var left = this.object.getCoordinates("stage").left.toInt();
        var nextPosition = left + direction * 34;
        
        if(this.canMove(nextPosition)) {
            this.object.setStyle("left",  nextPosition + "px");
        }
    },
    "canMove": function(position) {
        console.log(position)
        return position >= 0 && position <= 642 - 30;
    }
});

document.addEvent("keydown", function(e) {
    var directions = {
        "left": -1,
        "right": 1
    };
    if(e.key == "right" || e.key == "left") {
        player.move(directions[e.key]);
    }
});
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
        
        // setting animation things
        this.left = this.object.getCoordinates("stage").left.toInt();
        this.object.set("morph", {
            "duration": 50,
            "link": "chain",
            "transition": "linear"
        });
        
        // bind the onKeyDown event to this.respondToKey
        document.addEvent("keydown", this.respondToKey.bind(this));
    },
    "move": function(direction) {
        var position = this.left + direction * 34;
        if(this.canMoveTo(position)) {
            this.left = position;
            this.object.morph({
                "left":  this.left
            });
        }
    },
    "canMoveTo": function(position) {
        return position >= 0 && position <= 642 - 30;
    },
    "fire": function() {
        var coords = this.object.getCoordinates("stage");
        new GameShot().fire([this.left + 13, coords.top.toInt() - 20], "top");
    },
    "respondToKey": function(e) {
        switch(e.key) {
            case "left":
                return this.move(-1);
            case "right":
                return this.move(1);
            case "space":
                return this.fire();
        }
        return true;
    }
});

var GameShot = new Class({
    "Extends": GameObject,
    "initialize": function() {
        this.parent("shot");
    },
    "fire": function(position, direction) {
        this.object.setStyles({
            "left": position[0],
            "top": position[1]
        }).morph({
            "top": 0
        })
    }
});
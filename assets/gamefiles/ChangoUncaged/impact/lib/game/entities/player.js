ig.module(
    'game.entities.player'
)
.requires(
    'plusplus.abstractities.player',
    'game.abilities.banana-peel',
    'game.abilities.throw-poop',
    'game.abilities.mold-decoy',
    'plusplus.abilities.glow',
    //'game.ui.ui-toggle-gfx',
    'plusplus.ui.ui-toggle-pause',
    'game.ui.ui-bananas',
    'plusplus.ui.ui-text',
    'plusplus.ui.ui-meter',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityPlayer = ig.global.EntityPlayer = ig.Player.extend({
        
        name: "player",
	size: {x:32, y:32},
	offset: {x:8, y:8},
	ui: {},
	
	animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'chango.png', 48, 48 ),	
	
	animInit: "idleDown",
	
	animSettings: {
	    idleX: {
		frameTime: 0.2,
		sequence: [6]
	    },
	    idleRight: {
		frameTime: 0.2,
		sequence: [6]
	    },
	    idleUp: {
		frameTime: 0.2,
		sequence: [3]
	    },
	    idleDown: {
		frameTime: 0.2,
		sequence: [0]
	    },
	    moveX: {
		frameTime: 0.2,
		sequence: [6,7,6,8]
	    },
	    moveRight: {
		frameTime: 0.2,
		sequence: [6,7,6,8]
	    },
	    moveUp: {
		frameTime: 0.2,
		sequence: [4,5]
	    },
	    moveDown: {
		frameTime: 0.2,
		sequence: [1,2]
	    },
	    invisible: {
		frameTime: 0.1,
		sequence: [9]
	    }
	},
        
	// stats
	bananas: 0,
        lives: 3,
        score: 0,
	visibility: 100,
	regen: false,
	health: 10,
	
	// settings for glow
	glowSettings: {
	    light: {
		performance: ig.EntityExtended.PERFORMANCE.MOVABLE,
		castsShadows: true
	    }
	},
        
	initProperties: function () {
	    this.parent();
            
            this.initUI();
	    this.glow = new ig.AbilityGlow( this );
	    this.dropPeel = new ig.BananaPeel( this );
	    this.throwPoop = new ig.ThrowPoop( this );
	    this.moldDecoy = new ig.MoldDecoy (this);
            
            this.sndBurp = new ig.Sound(_c.PATH_TO_MEDIA + 'sound_burp.*', [true]);
            this.sndPoop = new ig.Sound(_c.PATH_TO_MEDIA + 'sound_poop.*', [true]);
            this.sndDecoy = new ig.Sound(_c.PATH_TO_MEDIA + 'sound_decoy.*', [true]);
            this.sndNopoop = new ig.Sound(_c.PATH_TO_MEDIA + 'sound_nouse.*', [true]);
	    
	    this.abilities.addDescendants( [
		this.glow, this.dropPeel, this.throwPoop, this.moldDecoy
	    ]);
	},
	
	initTypes: function () {
	    this.parent();
            
	    _ut.addType(ig.EntityExtended, this, 'checkAgainst', "CREATURE");
	},
        
	initUI: function(){
	    this.parent();
            
            if (!ig.global.wm) {
                this.ui.togglePause = ig.game.spawnEntity( ig.UITogglePause, 0, 0, {
                    posPct: { x: 0, y: 0 },
                    marginAsPct: false,
                    margin: { x: 64, y: 20 }
                });
                
                //this.ui.toggleGfx = ig.game.spawnEntity( ig.UIToggleGfx, 0, 0, {
                //    marginAsPct: false,
                //    margin: { x: 16, y: 0 },
                //    linkedTo: this.ui.togglePause,
                //    linkAlign: { x: 1, y: 0 },
                //});
                //
                //this.ui.toggleGfx.activate();
                
                this.ui.bananaMeter = ig.game.spawnEntity(ig.UIuiBananas, 0, 0, {
                    marginAsPct: false,
                    margin: {x: 16, y: 64}
                });
                
                this.ui.scoreText = ig.game.spawnEntity(ig.UIText, 0, 0, {
                    margin: {x: 0, y: 0},
                    font: new ig.Font(_c.PATH_TO_MEDIA + 'font_04b03_white_16.png'),
                    text: 'Score: ' + this.score
                });
            }
	},
	
	drainEnergy: function (amount, from, unblockable) {
            this.bananas -= amount;
            this.score -= amount * 50;
            this.ui.scoreText.text = 'Score: ' + this.score;
	},
	
	receiveEnergy: function (amount, from) {
            this.bananas += amount;
            this.score += 100;
            this.ui.scoreText.text = 'Score: ' + this.score;
	},
        
        update: function(){
            this.parent();
            this.bananaMeterUpdate();
            this.visibility += 1;
            if (this.visibility > 100) {
                this.visibility = 100;
            }
            if (this.visibility > 50) {
                this.unhide();
                this.animRelease("invisible");
            }
        },
        
        resetLives: function(){
            this.lives = 3;
        },
        
        die: function(){
            this.parent();
            this.lives -= 1;
            this.score -= 100;
            this.ui.scoreText.text = 'Score: ' + this.score;
            if (this.lives <= 0) {
                ig.game.loadLevelDeferred(ig.global.LevelElLose);
                this.resetLives();
                this.deactivate();
            }
        },
        
        bananaMeterUpdate: function(){
            if (this.bananas <= 5) {
                switch (this.bananas) {
                    default:
                    case 0: this.ui.bananaMeter.animOverride("zero"); break;
                    case 1: this.ui.bananaMeter.animOverride("one"); break;
                    case 2: this.ui.bananaMeter.animOverride("two"); break;
                    case 3: this.ui.bananaMeter.animOverride("three"); break;
                    case 4: this.ui.bananaMeter.animOverride("four"); break;
                    case 5: this.ui.bananaMeter.animOverride("five"); break;
                }
            } else {
                this.ui.bananaMeter.animOverride("fiveplus"); 
            }
        },
	
	handleInput: function() {
	    var shootX;
	    var shootY;
	    
	    if (ig.input.pressed('bananaPeel')){
                if (this.bananas >= 1){
                    if ( this.facing.x !== 0 ){
                        shootX = this.facing.x > 0 ? this.pos.x + this.size.x : this.pos.x;
                    }else{
                        shootX = this.pos.x + this.size.x * 0.5;
                    }
                    
                    if ( this.facing.y !== 0 ){
                        shootY = this.facing.y > 0 ? this.pos.y + this.size.y : this.pos.y;
                    }else{
                        shootY = this.pos.y + this.size.y * 0.5;
                    }
                    
                    this.dropPeel.activate({
                        x: shootX,
                        y: shootY
                    });
                    
                    this.sndBurp.play();
                    this.drainEnergy(1,this,true);
                }else{
                    this.sndNopoop.play();
                }
            }
	    
	    if (ig.input.pressed('moldDecoy')){
                if (this.bananas >= 5){
                    if ( this.facing.x !== 0 ) {
                        shootX = this.facing.x > 0 ? this.pos.x + this.size.x : this.pos.x;
                    }else{
                        shootX = this.pos.x + this.size.x * 0.5;
                    }
                    
                    if ( this.facing.y !== 0 ) {
                        shootY = this.facing.y > 0 ? this.pos.y + this.size.y : this.pos.y;
                    }else{
                        shootY = this.pos.y + this.size.y * 0.5;
                    }
                    
                    this.moldDecoy.activate( {
                        x: shootX,
                        y: shootY
                    } );
                    
                    this.sndDecoy.play();
                    this.drainEnergy(5,this,true);
                }else{
                    this.sndNopoop.play();
                }
            }
	    
	    if (ig.input.pressed('throwPoop')) {
                if (this.bananas >= 2) {
                    if ( this.facing.x !== 0 ) {
                        shootX = this.facing.x > 0 ? this.pos.x + this.size.x : this.pos.x;
                    } else {
                        shootX = this.pos.x + this.size.x * 0.5;
                    }
                    
                    if ( this.facing.y !== 0 ) {
                        shootY = this.facing.y > 0 ? this.pos.y + this.size.y : this.pos.y;
                    } else {
                        shootY = this.pos.y + this.size.y * 0.5;
                    }
                    
                    this.throwPoop.activate( {
                        x: shootX,
                        y: shootY
                    } );
                    
                    this.sndPoop.play();
                    this.drainEnergy(2,this,true);
                }else{
                    this.sndNopoop.play();
                }
            }
	},
	
	check: function(entity){
	    this.parent(entity);
	    
	    if (entity instanceof EntityBush || entity instanceof EntityBarrel) {
		if (this.visibility - 2 > 0) {
                    this.visibility -= 2;
                }
                this.hide();
                this.animOverride("invisible");
	    }
	}
    });
});
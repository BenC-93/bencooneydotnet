ig.module(
    'game.entities.crate'
)
.requires(
    'plusplus.abstractities.character',
    'plusplus.core.config',
    'plusplus.helpers.utils',
    'plusplus.abilities.glow-toggle'
)
.defines(function(){
    "use strict";

    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityCrate = ig.global.EntityCrate = ig.Character.extend({
    
        size: {x: 32, y: 32},
        offset: {x: 0, y: 8},
        
        collides: ig.EntityExtended.COLLIDES.FIXED,
        
        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'crate.png', 48, 48 ),
        
        animInit: "idle",
        
        animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
        },
        
        glowSettings: {
	    light: {
		performance: ig.EntityExtended.PERFORMANCE.MOVABLE,
		castsShadows: true
	    }
	},
        
        initProperties: function(){
            this.parent();
            
            this.glow = new ig.AbilityGlowToggle( this );
            this.sndExit = new ig.Sound(_c.PATH_TO_MEDIA + 'sound_exit.*', [true]);
            
            this.abilities.addDescendants( [
		this.glow
	    ]);
        },
        
        canFlipX: false,
        canFlipY: false,
        
        regen: false,
        invulnerable: true,
        
        initTypes: function() {
            this.parent();
            
            _ut.addType(ig.EntityExtended, this, 'checkAgainst', "CHARACTER");
        },
        
        openExit: function() {
            this.glow.activate();
            this.sndExit.play();
            this.pos.x += 48;
        }
    });
});
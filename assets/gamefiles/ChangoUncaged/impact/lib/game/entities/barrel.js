ig.module(
    'game.entities.barrel'
)
.requires(
    'plusplus.abstractities.creature',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityBarrel = ig.global.EntityBarrel = ig.Creature.extend({
        
        size: {x: 24, y: 24},
        offset: {x: 12, y: 16},
        
        collides: ig.EntityExtended.COLLIDES.NEVER,
        
        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'barrel.png', 48, 48 ),	
        
        animInit: "empty",
        
        animSettings: {
            empty: {
                frameTime: 0.2,
                sequence: [0]
            },
            monkey: {
                frameTime: 0.75,
                sequence: [1,2]
            }
        },
        
        canFlipX: false,
        canFlipY: false,
        
        speed: { x: 0, y: 0 },
        
        canJump: false,
        canClimb: false,
        
        regen: false,
        invulnerable: true,
        
        deathSettings: {
            spawnCountMax: 3,
            spawnSettings: {
                animTileOffset: ig.EntityParticleColor.colorOffsets.GREEN
            }
        },
        
        initTypes: function () {
            this.parent();
	    
            _ut.addType(ig.EntityExtended, this, 'checkAgainst', "CHARACTER");
        },
        
        check: function( entity ) {
	    this.parent(entity);
            
            if (entity instanceof EntityPlayer) {
		this.animOverride("monkey");
            }
	}
    });
});
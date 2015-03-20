ig.module(
    'game.entities.peels'
)
.requires(
    'plusplus.abstractities.projectile',
    'plusplus.entities.explosion',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityPeels = ig.global.EntityPeels = ig.Projectile.extend({
	
	collides: ig.EntityExtended.COLLIDES.LITE,
	
	size: {x: 16, y: 16},
	
	offset: {x: 4, y: 4},
	
	animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'peel.png', 24, 24 ),
	
	animSettings: {
            moveX: {
                frameTime: 1,
                sequence: [0]
            }
	},
	
        canFlipX: false,
	canFlipY: false,
        
        deathSettings: {
            spawnCountMax: 3,
            spawnSettings: {
                animTileOffset: ig.EntityParticleColor.colorOffsets.YELLOW
            }
        },
        
        damage: 2,
        lifeDuration: 20,
        
        friction: { x: 1000, y: 1000 },
        
        collisionKills: true,
        
        check: function( entity ) {
	    this.parent(entity);
            
            if (entity instanceof EntityZookeeper) {
                entity.slowDown();
                this.kill(false);
            }
	}
    });
})
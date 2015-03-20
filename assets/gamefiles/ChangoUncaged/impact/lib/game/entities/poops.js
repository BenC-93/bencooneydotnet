ig.module(
    'game.entities.poops'
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
    
    ig.EntityPoops = ig.global.EntityPoops = ig.Projectile.extend({
	
	collides: ig.EntityExtended.COLLIDES.LITE,
	size: {x: 16, y: 16},
	offset: {x: 4, y: 4},
	
	animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'poopjectile.png', 24, 24 ),
	
	animSettings: {
	    moveX: {
		frameTime: 0.5,
		sequence: [0,1]
	    },
	    moveY: {
		frameTime: 0.5,
		sequence: [2,3]
	    }
	},
        
        deathSettings: {
	    spawnCountMax: 3,
	    spawnSettings: {
		animTileOffset: ig.EntityParticleColor.colorOffsets.BROWN
	    }
	},
	
	canFlipX: true,
	canFlipY: true,
	
	damage: 4,
        lifeDuration: 3,
        
        collisionKills: true
    });
});
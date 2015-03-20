ig.module(
    'game.entities.decoy'
)
.requires(
    'plusplus.abstractities.creature',
    'plusplus.entities.explosion',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityDecoy = ig.global.EntityDecoy = ig.Creature.extend({
	
	collides: ig.EntityExtended.COLLIDES.LITE,
	
	size: {x: 32, y: 32},
	offset: {x: 8, y: 16},
        speed: {x: 0, y: 0},
	
	animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'decoy.png', 48, 48 ),
	
	animSettings: {
	    idle: {
		frameTime: 1,
		sequence: [0]
	    }
	},
	
	canFlipX: false,
	canFlipY: false,
    
	deathSettings: {
	    spawnCountMax: 3,
	    spawnSettings: {
                animTileOffset: ig.EntityParticleColor.colorOffsets.BROWN
	    }
	},
	
	//damage: 2,
        regen: false,
        health: 50,
        lifeDuration: 20,
	collisionKills: true,
        
        initTypes: function () {
	    this.parent();
            
            _ut.addType(ig.EntityExtended, this, 'type', "DAMAGEABLE");
	    _ut.addType(ig.EntityExtended, this, 'group', "FRIEND", "GROUP");
	},
	
	check: function( entity ) {
	    this.parent(entity);
	    
	    if (entity instanceof EntityZookeeper) {
		entity.slowDown();
		this.kill(false);
	    }
	}
    });
});
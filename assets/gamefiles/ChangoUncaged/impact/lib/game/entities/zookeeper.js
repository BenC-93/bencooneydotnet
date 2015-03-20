ig.module(
    'game.entities.zookeeper'
)
.requires(
    'plusplus.abstractities.creature',
    'plusplus.abilities.melee',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityZookeeper = ig.global.EntityZookeeper = ig.Creature.extend({
	
	size: {x: 24, y: 24},
	offset: {x: 12, y: 16},
        soiled: false,
	
	collides: ig.EntityExtended.COLLIDES.LITE,
	
	animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'zookeeper.png', 48, 48 ),	
	
	animInit: "idleX",
	
	animSettings: {
	    idleX: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [4] :*/ [1]
	    },
	    idleRight: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [4] :*/ [1]
	    },
	    idleUp: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [16] :*/ [13]
	    },
	    idleDown: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [10] :*/ [7]
	    },
	    moveX: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [3,4,5,4] :*/ [0,1,2,1]
	    },
	    moveRight: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [3,4,5,4] :*/ [0,1,2,1]
	    },
	    moveUp: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [15,16,17,16] :*/ [12,13,14,13]
	    },
	    moveDown: {
		frameTime: 0.5,
		sequence: /*this.soiled ? [9,10,11,10] :*/ [6,7,8,7]
	    }
	},
	
	canFlipX: true,
	canFlipY: false,
	
	maxVelGrounded: { x: 25, y: 25 },
	maxVelUngrounded: { x: 25, y: 25 },
	frictionGrounded: { x: 800, y: 800 },
	frictionUngrounded: { x: 800, y: 800 },
	speed: { x: 150, y: 150 },
	
	regen: false,
	health: 10,
	healthMax: 10,
	
	deathSettings: {
	    spawnCountMax: 3,
	    spawnSettings: {
		animTileOffset: ig.EntityParticleColor.colorOffsets.RED
	    }
	},
	
	canWanderX: true,
	canWanderY: true,
	
	wanderSwitchChance: 0.005,
	wanderSwitchChanceStopped: 0.015,
	
	tetherDistance: 100,
        canBreakTether: true,
	
	reactionDistance: 150,
	
	needsLineOfSightPrey: true,
	
        moveToPreySettings: {
            searchDistance: 175
	},
	
	slowDown: function(){
            this.maxVelGrounded = {x:25,y:25};	
	},
	
	initTypes: function () {
	    this.parent();
            
	    _ut.addType(ig.EntityExtended, this, 'type', "DAMAGEABLE");
	    _ut.addType(ig.EntityExtended, this, 'group', "ENEMY", "GROUP");
	    _ut.addType(ig.EntityExtended, this, 'preyGroup', "FRIEND", "GROUP");
	    _ut.addType(ig.EntityExtended, this, 'checkAgainst', "CHARACTER");
	},
	
	initProperties: function () {
	    this.parent();
	    
	    this.melee = new ig.AbilityMelee( this, {
		canFindTarget: false,
		damage: 10,
		rangeX: this.size.x * 0.75
	    });
	    
	    this.abilities.addDescendants( [
		this.melee
	    ]);
	},
	
	attack : function( entity ){
	    this.melee.setEntityTarget(entity);
	    
	    if ( this.melee.entityTarget ) {
		var closeEnough = this.melee.closeEnough();
		this.melee.activate();
		return closeEnough;
	    } else {
		return this.parent(entity);
	    }
	},
        
        check: function( entity ) {
	    this.parent(entity);
	    
            if (entity instanceof EntityPoops) {
                entity.receiveDamage(10,this);
                this.soiled = true;
            }
	}
    });
});
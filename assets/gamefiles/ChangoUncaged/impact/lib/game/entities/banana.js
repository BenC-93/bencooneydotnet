ig.module(
    'game.entities.banana'
)
.requires(
    'plusplus.abstractities.character',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function(){
    "use strict";

    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.EntityBanana = ig.global.EntityBanana = ig.Character.extend({
    
        size: {x: 16, y: 16},
        offset: {x: 4, y: 4},
        
        collides: ig.EntityExtended.COLLIDES.NEVER,
        
        animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'banana.png', 24, 24 ),
        
        animInit: "idle",
        
        animSettings: {
            idle: {
                frameTime: 1,
                sequence: [0]
            }
        },
        
        canFlipX: false,
        canFlipY: false,
        
        regen: false,
        invulnerable: true,
        
        initTypes: function() {
            this.parent();
            _ut.addType(ig.EntityExtended, this, 'checkAgainst', "CHARACTER");
        },
        
        deathSettings: {
            spawnCountMax: 3,
            spawnSettings: {
                animTileOffset: ig.EntityParticleColor.colorOffsets.YELLOW
            }
        },
        
        check: function( entity ) {
            this.parent(entity);
            
            if (entity instanceof EntityPlayer) {
                entity.receiveEnergy( 1, this );
                this.kill(false);
            }
        }
    });
});
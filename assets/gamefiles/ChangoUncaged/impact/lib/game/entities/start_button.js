ig.module(
    'game.entities.start_button'
)
.requires(
    'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    
    ig.EntityStart_button = ig.global.EntityStart_button = ig.EntityExtended.extend({
        
        size: { x: 200, y: 98 },
        
        animSheet: new ig.AnimationSheet(_c.PATH_TO_MEDIA + 'start_button.png', 200, 98 ),
        
        animInit: "idleX",
        
        animSettings: {
            idleX: {
                sequence: [0],
                frameTime: 1
            }
        },
        
        activate: function( entity ){
           this.parent( entity );
        }
    });
});
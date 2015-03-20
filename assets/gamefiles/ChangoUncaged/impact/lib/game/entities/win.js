ig.module(
    'game.entities.win'
)
.requires(
    'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    
    ig.EntityWin = ig.global.EntityWin = ig.EntityExtended.extend({
        
        size: { x: 1005, y: 603 },
        
        animSheet: new ig.AnimationSheet(_c.PATH_TO_MEDIA + 'winning.png', 1005, 603 ),
        
        animInit: "idleX",
        
        animSettings: {
            idleX: {
                sequence: [0],
                frameTime: 1,
                stop: true
            }
        }
    });
});
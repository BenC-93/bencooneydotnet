ig.module(
    'game.entities.title'
)
.requires(
    'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    
    ig.EntityTitle = ig.global.EntityTitle = ig.EntityExtended.extend({
        
        size: { x: 1005, y: 604 },
        
        animSheet: new ig.AnimationSheet(_c.PATH_TO_MEDIA + 'title.png', 1005, 604 ),
        
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
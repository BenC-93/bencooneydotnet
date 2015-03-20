ig.module(
    'game.entities.instructions'
)
.requires(
    'plusplus.core.config',
    'plusplus.core.entity'
)
.defines(function () {
    "use strict";

    var _c = ig.CONFIG;

    /**
     * Main title for Impact++.
     * @class
     * @extends ig.EntityExtended
     * @memberof ig
     * @author Collin Hover - collinhover.com
     */
    ig.EntityInstructions = ig.global.EntityInstructions = ig.EntityExtended.extend(/**@lends ig.EntityTitleMain.prototype */{
        
        size: { x: 1005, y: 604 },
        
        animSheet: new ig.AnimationSheet(_c.PATH_TO_MEDIA + 'instructions.png', 1007, 604 ),
        
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
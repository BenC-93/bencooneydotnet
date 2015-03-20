ig.module(
    'game.ui.ui-bananas'
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
    
    ig.UIuiBananas = ig.global.UIuiBananas = ig.UIElement.extend({
	
	size: {x: 144, y: 24},
	
	animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'banana_bar.png', 144, 24 ),	
	
	animInit: "zero",
	
	animSettings: {
	    zero: {
		frameTime: 1,
		sequence: [0]
	    },
	    one: {
		frameTime: 1,
		sequence: [1]
	    },
	    two: {
		frameTime: 1,
		sequence: [2]
	    },
	    three: {
		frameTime: 1,
		sequence: [3]
	    },
	    four: {
		frameTime: 1,
		sequence: [4]
	    },
	    five: {
		frameTime: 1,
		sequence: [5]
	    },
	    fiveplus: {
		frameTime: 1,
		sequence: [6]
	    }
	}
    });
});
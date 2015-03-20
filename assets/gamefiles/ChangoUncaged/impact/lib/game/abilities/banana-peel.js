/**
 * 
 **/
ig.module(
    'game.abilities.banana-peel'
)
.requires(
    'plusplus.abilities.ability-shoot',
    'game.entities.peels',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.BananaPeel = ig.AbilityShoot.extend({
	spawningEntity: ig.EntityPeels,
	
	offsetVelX: 0,
	offsetVelY: 0
    });
});
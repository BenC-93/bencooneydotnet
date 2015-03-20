ig.module(
    'game.abilities.throw-poop'
)
.requires(
    'plusplus.abilities.ability-shoot',
    'game.entities.poops',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    ig.ThrowPoop = ig.AbilityShoot.extend({
	spawningEntity: ig.EntityPoops,
	
	offsetVelX: 100,
	offsetVelY: 100,
    });
});
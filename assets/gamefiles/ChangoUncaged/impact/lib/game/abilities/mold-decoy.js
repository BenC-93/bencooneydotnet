ig.module(
    'game.abilities.mold-decoy'
)
.requires(
    'plusplus.abilities.ability',
    'game.entities.decoy',
    'plusplus.core.config',
    'plusplus.helpers.utils'
)
.defines(function () {
    "use strict";
    
    var _c = ig.CONFIG;
    var _ut = ig.utils;
    
    ig.MoldDecoy = ig.Ability.extend({
        activateComplete: function (settings){
            this.parent(settings);
            
            ig.game.spawnEntity(ig.EntityDecoy, settings.x, settings.y, settings);
        }
    });
});
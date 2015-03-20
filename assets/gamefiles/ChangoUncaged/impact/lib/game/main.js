// starting with Impact++ is simple!
// setup a main game file, such as 'game/main.js'
// that you load right after ImpactJS
// and inside this file...
// setup the main module
ig.module(
    'game.main'
)
// now require the appropriate files
.requires(
    
    // the following are the only files required to use Impact++
    
    'plusplus.core.plusplus',
    'plusplus.ui.ui-toggle-volume',
    
    'game.entities.player',
    
    //'game.levels.test',
    'game.levels.title',
    'game.levels.instructions',
    'game.levels.elOne',
    'game.levels.elTwo',
    'game.levels.elThree',
    'game.levels.elFour',
    'game.levels.elFive',
    'game.levels.elSix',
    'game.levels.elSeven',
    'game.levels.exOne',
    'game.levels.exTwo',
    'game.levels.exThree',
    'game.levels.elWin',
    'game.levels.elLose'
    
    // debug while developing
    // remove before release!
    //'plusplus.debug.debug'
)

// define the main module
.defines(function () {
    "use strict";
    var _c = ig.CONFIG;
    
    // have your game class extend Impact++'s game class
    var game = ig.GameExtended.extend({
	
	// get the collision map shapes for lighting and shadows
	shapesPasses: {
	    lighting: {
	        ignoreClimbable: true,
	        discardBoundaryInner: true
	    }
	},
	
        sndMenu: new ig.Sound(_c.PATH_TO_MEDIA + 'music_menu.*'),
        sndLevels: new ig.Sound(_c.PATH_TO_MEDIA + 'music_level.*'),
        
	// override the game init function
	init: function () {
	    
	    this.parent();
	    
            ig.music.add(this.sndMenu, false);
            ig.music.add(this.sndLevels, false);
            ig.music.play();
            
	    // so we can load the first level
	    // which of course you didn't forget to require above
	    
	    this.loadLevel(ig.global.LevelTitle);
	    
	    // initialize the example UI
	    this.initUI();
	    
	},
	
	// add a few extra inputs
	// this is just to mimic the original example
	// Impact++ adds a few basics already
	// tap / click to shoot
	// spacebar / swipe to jump
	// wasd / arrows to move
	inputStart: function () {
	    
	    this.parent();
	    
	    ig.input.bind(ig.KEY._1, 'bananaPeel');
	    ig.input.bind(ig.KEY._2, 'throwPoop');
	    ig.input.bind(ig.KEY._3, 'moldDecoy');
            ig.input.bind(ig.KEY.Z, 'bananaPeel');
	    ig.input.bind(ig.KEY.X, 'throwPoop');
	    ig.input.bind(ig.KEY.C, 'moldDecoy');
	    
	},
	
	inputEnd: function () {
	    
	    this.parent();
	    
	    ig.input.unbind(ig.KEY._1, 'bananaPeel');
	    ig.input.unbind(ig.KEY._2, 'throwPoop');
	    ig.input.unbind(ig.KEY._3, 'moldDecoy');
            ig.input.unbind(ig.KEY.Z, 'bananaPeel');
	    ig.input.unbind(ig.KEY.X, 'throwPoop');
	    ig.input.unbind(ig.KEY.C, 'moldDecoy');
	    
	},
	
	// quick and dirty UI for example
	// in your own game you probably want to
	// create separate classes for UI elements
	// instead of defining them dynamically as below
	initUI: function () {
            var toggleSound = this.spawnEntity( ig.UIToggleVolume, 0, 0, {
                size: {x: 32, y: 32},
                animSheet: new ig.AnimationSheet( _c.PATH_TO_MEDIA + 'buttons_states.png', 32, 32 ),
                posPct: { x: 0, y: 0 },
                marginAsPct: false,
                margin: { x: 16, y: 20 }
            });
            
            this.parent();
	}
    });
    
    // now lets boot up impact with
    // our game and config settings
    // we've modified Impact++'s 'config-user.js' file
    // to override some of the default settings
    ig.main(
	'#canvas',
	game,
	60,
	_c.GAME_WIDTH,
	_c.GAME_HEIGHT,
	_c.SCALE,
	ig.LoaderExtended
    );
});

ig.module( 'game.levels.test' )
.requires( 'impact.image','game.entities.zookeeper','game.entities.banana','game.entities.bush','plusplus.entities.levelchange','plusplus.entities.checkpoint','game.entities.player' )
.defines(function(){
LevelTest=/*JSON[*/{"entities":[{"type":"EntityZookeeper","x":488,"y":520},{"type":"EntityBanana","x":256,"y":640},{"type":"EntityBanana","x":64,"y":64},{"type":"EntityBanana","x":160,"y":232},{"type":"EntityBanana","x":640,"y":160},{"type":"EntityBanana","x":68,"y":640},{"type":"EntityBanana","x":640,"y":640},{"type":"EntityBanana","x":640,"y":256},{"type":"EntityBush","x":348,"y":156},{"type":"EntityZookeeper","x":488,"y":152},{"type":"EntityBanana","x":308,"y":64},{"type":"EntityZookeeper","x":148,"y":452},{"type":"EntityBanana","x":356,"y":640},{"type":"EntityBanana","x":592,"y":352},{"type":"EntityBanana","x":168,"y":244},{"type":"EntityBanana","x":160,"y":108},{"type":"EntityBanana","x":156,"y":124},{"type":"EntityBanana","x":160,"y":140},{"type":"EntityBanana","x":164,"y":152},{"type":"EntityBanana","x":164,"y":172},{"type":"EntityBanana","x":164,"y":192},{"type":"EntityBanana","x":164,"y":204},{"type":"EntityBanana","x":164,"y":216},{"type":"EntityLevelchange","x":56,"y":208,"settings":{"levelName":"elWin"}},{"type":"EntityCheckpoint","x":160,"y":64},{"type":"EntityPlayer","x":152,"y":52}],"layer":[{"name":"collision","width":45,"height":45,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,2,1,1,1,1,1,1,1,24,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,13,1,35,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,13,1,35,0,0,0,13,1,35,0,0,0,13,1,1,1,1,1,1,1,1,1,1,35,0,0,0,13,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,24,0,0,0,2,1,1,1,1,24,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,13,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,13,1,1,1,1,1,1,1,35,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"main","width":15,"height":15,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesallinone.png","repeat":false,"preRender":false,"distance":"1","tilesize":48,"foreground":false,"data":[[2,12,2,12,2,12,12,2,12,12,12,12,12,12,2],[2,11,2,11,2,11,11,2,11,11,11,11,11,11,2],[2,11,2,11,2,11,11,12,11,2,12,2,11,11,2],[2,11,2,11,2,11,11,11,11,2,11,2,11,11,2],[2,11,12,11,12,11,12,12,12,12,11,12,12,12,2],[2,11,11,11,11,11,11,11,11,11,11,11,11,11,2],[2,11,12,12,12,12,2,11,12,2,11,2,12,12,2],[2,11,11,11,11,11,2,11,11,2,11,2,11,11,2],[2,11,11,11,11,11,2,11,11,12,12,12,11,11,2],[2,11,11,11,11,11,2,11,11,11,11,11,11,11,2],[2,11,11,11,11,11,2,11,11,11,11,11,11,11,2],[2,11,11,11,11,11,2,11,11,11,11,11,11,11,2],[2,11,11,11,11,11,2,11,11,11,11,11,11,11,2],[2,11,11,11,11,11,2,11,11,11,11,11,11,11,2],[12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]]}]}/*]JSON*/;
LevelTestResources=[new ig.Image('media/tilesallinone.png')];
});
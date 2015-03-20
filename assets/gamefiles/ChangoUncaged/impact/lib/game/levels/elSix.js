ig.module( 'game.levels.elSix' )
.requires( 'impact.image','game.entities.banana','game.entities.bush','plusplus.entities.levelchange','plusplus.entities.checkpoint','plusplus.entities.trigger-function','game.entities.crate','game.entities.barrel','game.entities.zookeeper','plusplus.entities.void','plusplus.entities.camera-atmosphere','plusplus.entities.trigger-constant' )
.defines(function(){
LevelElSix=/*JSON[*/{"entities":[{"type":"EntityBanana","x":540,"y":404},{"type":"EntityBush","x":156,"y":160},{"type":"EntityLevelchange","x":980,"y":736,"settings":{"levelName":"elSeven","playerSpawnerName":"enter"}},{"type":"EntityCheckpoint","x":52,"y":676,"settings":{"name":"enter"}},{"type":"EntityTriggerFunction","x":692,"y":164,"settings":{"target":{"1":"exit"},"functionName":"openExit"}},{"type":"EntityBush","x":348,"y":160},{"type":"EntityBanana","x":544,"y":64},{"type":"EntityBanana","x":928,"y":352},{"type":"EntityBush","x":444,"y":300},{"type":"EntityBanana","x":352,"y":64},{"type":"EntityCrate","x":960,"y":536},{"type":"EntityBush","x":876,"y":160},{"type":"EntityTriggerFunction","x":964,"y":736,"settings":{"functionName":"resetLives"}},{"type":"EntityCrate","x":960,"y":728,"settings":{"name":"exit"}},{"type":"EntityCrate","x":960,"y":296},{"type":"EntityBanana","x":544,"y":736},{"type":"EntityBanana","x":636,"y":740},{"type":"EntityBanana","x":64,"y":64},{"type":"EntityBanana","x":64,"y":160},{"type":"EntityBanana","x":692,"y":164},{"type":"EntityBanana","x":352,"y":304},{"type":"EntityBush","x":204,"y":592},{"type":"EntityBush","x":540,"y":640},{"type":"EntityBush","x":636,"y":636},{"type":"EntityBush","x":876,"y":684},{"type":"EntityBush","x":780,"y":400},{"type":"EntityBarrel","x":148,"y":352},{"type":"EntityBarrel","x":60,"y":352},{"type":"EntityBarrel","x":104,"y":352},{"type":"EntityZookeeper","x":592,"y":516,"settings":{"tetherName":"tether4"}},{"type":"EntityZookeeper","x":716,"y":336,"settings":{"tetherName":"tether3"}},{"type":"EntityZookeeper","x":776,"y":628,"settings":{"tetherName":"tether5"}},{"type":"EntityZookeeper","x":224,"y":448,"settings":{"tetherName":"tether1"}},{"type":"EntityZookeeper","x":444,"y":124,"settings":{"tetherName":"tether2"}},{"type":"EntityVoid","x":788,"y":628,"settings":{"name":"tether5"}},{"type":"EntityVoid","x":220,"y":452,"settings":{"name":"tether1"}},{"type":"EntityVoid","x":444,"y":132,"settings":{"name":"tether2"}},{"type":"EntityVoid","x":748,"y":316,"settings":{"name":"tether3"}},{"type":"EntityVoid","x":596,"y":524,"settings":{"name":"tether4"}},{"type":"EntityCameraAtmosphere","x":56,"y":676,"settings":{"name":"atmos","atmosphereFadeDuration":0}},{"type":"EntityTriggerConstant","x":1204,"y":320,"settings":{"target":{"1":"atmos"}}}],"layer":[{"name":"collision","width":63,"height":51,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":16,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,35,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,24,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,2,1,1,1,1,24,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,35,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,13,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,1,1,1,1,1,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,2,1,24,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,13,1,1,1,1,1,1,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,35,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,24,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,35,0,0,0,13,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,24,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,13,1,35,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,13,1,35,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,2,1,24,0,0,0,0,0,0,0,0,0,2,1,24,0,0,0,1,1,1,0,0,0,2,1,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,24,0,0,0,0,0,0,0,0,0,2,1,24,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,13,1,35,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,13,1,1,1,1,1,1,1,35,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,24,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,35,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,1,1,1,1,1,1,35,0,0,0,1,1,1],[1,1,1,0,0,0,2,1,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,13,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,13,1,1,1,1,1,1,1,1,1,1,1,1,1,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,2,1,24,0,0,0,2,1,24,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,13,1,35,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,1,1,1,1,1,1,1,1],[1,1,1,0,0,0,2,1,24,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,2,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,13,1,35,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,13,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,2,1,24,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,24,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"main","width":21,"height":17,"linkWithCollision":false,"visible":1,"tilesetName":"media/sample2.png","repeat":false,"preRender":false,"distance":"1","tilesize":48,"foreground":false,"data":[[7,18,18,18,18,18,7,18,18,18,18,18,7,18,18,18,18,18,7,18,7],[7,11,11,11,11,11,7,11,11,11,11,11,7,11,11,11,11,11,18,11,7],[7,18,7,11,11,11,7,11,11,11,11,11,7,11,11,7,18,11,11,11,7],[7,11,7,11,11,11,18,11,11,11,11,11,7,11,11,7,11,11,11,11,7],[7,11,18,18,18,11,11,11,11,11,11,11,7,18,18,18,11,11,7,11,7],[7,11,11,11,11,11,7,18,7,18,18,11,18,11,11,11,11,11,7,11,7],[7,18,18,18,7,11,18,11,7,11,11,11,11,11,11,11,11,11,7,11,11],[7,11,11,11,18,11,11,11,7,11,11,11,11,11,11,11,11,11,7,11,7],[7,11,7,11,11,11,7,11,7,11,7,11,11,11,11,11,11,11,18,18,7],[7,11,18,11,11,11,7,11,7,11,18,18,18,11,11,11,7,11,11,11,7],[7,11,11,11,11,11,18,11,7,11,11,11,11,11,11,11,18,18,18,11,7],[7,11,7,11,11,11,11,11,7,11,11,11,11,11,11,11,11,11,11,11,11],[7,11,18,11,11,11,11,11,7,11,18,18,7,18,18,11,11,11,11,11,7],[7,11,11,11,7,11,7,11,18,11,11,11,7,11,11,11,11,11,18,18,7],[7,11,7,11,18,11,7,11,11,11,18,18,7,11,11,11,11,11,11,11,7],[7,11,7,11,11,11,7,11,7,11,11,11,7,11,11,11,11,11,7,11,11],[18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18]]}]}/*]JSON*/;
LevelElSixResources=[new ig.Image('media/sample2.png')];
});
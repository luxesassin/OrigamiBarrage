
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	init: function () {
		this.preloadBar = null;
		this.ready = false;
	},

	preload: function () {

		//	These are the assets we loaded in Boot.js				
		this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloaderBar');		
		this.preloadBar.anchor.setTo(0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	You can find all of these assets in the Phaser Examples repository

    	// luxes.
    	this.load.image('butterfly', 'assets/images/butterfly.png');
    	this.load.image('frog', 'assets/images/frog.png');
    	this.load.image('pinwheel', 'assets/images/pinwheel.png');
    	this.load.image('crane', 'assets/images/crane.png');
    	this.load.image('bullet', 'assets/images/bullet.png');

		// main page
		this.game.load.spritesheet('main_bg', 'assets/images/spritesheet_main.png', 730, 1290);

    	this.game.load.spritesheet('explosion', 'assets/images/explode.png', 128, 128);
    	this.game.load.spritesheet('crash', 'assets/images/crash_flight.png', 60, 100);


		this.load.image('floor1', 'assets/images/bg1.png');
		this.load.image('floor3', 'assets/images/bg2.png');
		this.load.image('floor2', 'assets/images/bg2.png');

		this.load.image('plane1', 'assets/images/plane1.png');
    	this.load.image('plane2', 'assets/images/plane2.png');



		// Audio track Attribution (menu sci-fi 1.ogg, CC 3.0)
		// Alexandr-Zhelanov: https://soundcloud.com/alexandr-zhelanov 
		//this.load.audio('bgm', ['assets/audio/menusci-fi1.ogg', 'assets/audio/menusci-fi1.mp3']);

		this.load.audio('bgm', ['assets/audio/bgm.ogg', 'assets/audio/bgm.mp3']);
      	this.load.audio('levelchange', ['assets/audio/levelchange.ogg', 'assets/audio/levelchange.mp3']);
      	this.load.audio('papercrunch', ['assets/audio/papercrunch.ogg', 'assets/audio/papercrunch.mp3']);
      	this.load.audio('explosion', ['assets/audio/explosion.ogg', 'assets/audio/explosion.mp3']);

	},

	create: function () {


		//this.state.start('MainMenu');


	},
	update: function () {
		if (this.cache.isSoundDecoded('bgm') && this.cache.isSoundDecoded('levelchange') && this.ready == false) {
         this.ready = true;
         this.state.start('MainMenu');
		}
	}

};

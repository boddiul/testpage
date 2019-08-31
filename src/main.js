var game = new Phaser.Game(720, 1280, Phaser.AUTO, '', { preload: preload, create: create, update: update });



function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.load.image('back', 'assets/back.png');
    game.load.image('button', 'assets/button.png');
}

function actionOnClick () {


    
    send("VKWebAppShowWallPostBox", {"message": "test! #hashtag","attachments":"photo-54781675_457239019,https://vk.com/app7119527_59559418"});


}

function create() {

    game.add.sprite(0, 0, 'back');
    button = game.add.button(15, 40, 'button', actionOnClick, this, 2, 1, 0);
}


function update() {

}
class Game{
    constructor(){

    } 

    getGameState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })

    }
    updateGameState(state){
        //ref(/)is a reference to the main car racing database 

        database.ref('/').update({
            gameState:state
        })

    }
    start(){
        if (gameState===0){
            form = new Form();
            form.display();
            player = new Player();
            player.getPlayerCount();

        }
    }
}
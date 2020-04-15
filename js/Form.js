class Form{
    constuctor(){
    }

    display(){
        var title = createElement('H1');
        title.html("multiplayer car racing game");
        title.position(130,0);
        var input = createInput('NAME');
        var button = createButton('PLAY');
        var greeting = createElement('H2');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+= 1;
            player.update(game);
            player.updateCount(playerCount);
            greeting.html("HELLO"+ name);
            greeting.position(130,160);
             

        })
    }
    
}
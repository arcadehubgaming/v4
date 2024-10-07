Game.registerMod('cheat mod',{
    /*
        what this example mod does:
        -double your CpS
        -display a little popup for half a second whenever you click the big cookie
        -add a little intro text above your bakery name, and generate that intro text at random if you don't already have one
        -save and load your intro text
    */
    init:function(){
        Game.cookies = 9999999999999999999;
    }
});

javascript:(function(){Game.registerMod('cheat mod',{init:function(){Game.cookies = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999; Game.lumpsTotal = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;}});})();
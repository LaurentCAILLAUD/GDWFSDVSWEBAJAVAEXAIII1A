$(() => {
  /* variable declaration */
  let player1;
  let player2;
  let currentPlayer;
  //let changeCurrentPlayer = false;
  /* Add a click event on the new game "button" */
  $(".newGameContainer").click(() => {
    /* registration nickname of players */
    let player1Nickname = savePlayerNicknameWithThisNumber(1);
    let player2Nickname = savePlayerNicknameWithThisNumber(2);
    /* Instanciations of players */
    player1 = new Player(1, false, player1Nickname, 0, 0);
    player2 = new Player(2, false, player2Nickname, 0, 0);
    currentPlayer = player1;
    /* formatting of the interface indicating which player is playing and which player is not playing */
    $(".player1Identity").html(player1Nickname);
    $(".player1Container").addClass("grey");
    $(".player1Container .currentPlayer").addClass("pink");
    $(".player1Identity").css("color", "#707070");
    $(".player1Identity").css("font-family", "lato bold");
    if ($(".player1CurrentPoints").html() != 0) {
      $(".player1CurrentPoints").html(0);
    }
    if ($(".player1GlobalPoints").html() != 0) {
      $(".player1GlobalPoints").html(0);
    }
    $(".player2Identity").html(player2Nickname);
    $(".player2Container").removeClass("grey");
    $(".player2Container .currentPlayer").removeClass("pink");
    $(".player2Identity").css("color", "#D9D7D6");
    $(".player2Identity").css("font-family", "lato regular");
    if ($(".player2CurrentPoints").html() != 0) {
      $(".player2CurrentPoints").html(0);
    }
    if ($(".player2GlobalPoints").html() != 0) {
      $(".player2GlobalPoints").html(0);
    }
    $(".rollDiceResult").css("display", "none");
    $(".actionGameContent").css("visibility", "visible");
    alert("La partie commence. C'est " + player1.nickname + " qui joue en premier.");
  });
  /* add click event on roll dice "button" */
  $(".rollDice").click(() => {
    currentPlayer.rollDice();
    if (currentPlayer === player1 && currentPlayer.loseControl === true) {
      currentPlayer = player2;
      player1.loseControl = false;
    } else if (currentPlayer === player2 && currentPlayer.loseControl === true) {
      currentPlayer = player1;
      player2.loseControl = false;
    }
  });
  /* add click event on save point "button" */
  $(".savePoints").click(() => {
    currentPlayer.savePoints();
    if (currentPlayer === player1 && currentPlayer.globalPoints < 100) {
      alert("Score enregistré " + player1.nickname + ". C'est au tour de " + player2.nickname + " de jouer.");
      currentPlayer = player2;
    } else if (currentPlayer === player2 && currentPlayer.globalPoints < 100) {
      alert("Score enregistré " + player2.nickname + ". C'est au tour de " + player1.nickname + " de jouer.");
      currentPlayer = player1;
    }
  });
});

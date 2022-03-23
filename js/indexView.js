$(() => {
  /* Variable declaration */
  let player1;
  let player2;
  let currentPlayer;
  let changeCurrentPlayer = false;
  /* Add a click event on the new game "button" */
  $(".newGameContainer").click(() => {
    /* Registration nickname of players */
    let player1Nickname = savePlayerNicknameWithThisNumber(1);
    let player2Nickname = savePlayerNicknameWithThisNumber(2);
    /* Instanciations of players */
    player1 = new Player(1, player1Nickname, 0, 0);
    player2 = new Player(2, player2Nickname, 0, 0);
    currentPlayer = player1;
    /* CSS and HTML management */
    $(".player1Identity").html(player1Nickname);
    $(".player1Container").addClass("grey");
    $(".player1Container .currentPlayer").addClass("pink");
    $(".player1Identity").css("color", "#707070");
    $(".player1Identity").css("font-family", "lato bold");
    if ($(".player1CurrentPoints").html() != 0) {
      $(".player1CurrentPoints").html(0);
    }
    $(".player2Identity").html(player2Nickname);
    $(".player2Container").removeClass("grey");
    $(".player2Container .currentPlayer").removeClass("pink");
    $(".player2Identity").css("color", "#D9D7D6");
    $(".player2Identity").css("font-family", "lato regular");
    if ($(".player2CurrentPoints").html() != 0) {
      $(".player2CurrentPoints").html(0);
    }
    $(".rollDiceResult").css("display", "none");
    $(".actionGameContent").css("visibility", "visible");
  });
  /* Add click event on roll dice "button" */
  $(".rollDice").click(() => {
    if (changeCurrentPlayer === false) {
      changeCurrentPlayer = currentPlayer.rollDice();
    } else if (currentPlayer === player1) {
      currentPlayer = player2;
      changeCurrentPlayer = false;
      changeCurrentPlayer = currentPlayer.rollDice();
    } else {
      currentPlayer = player1;
      changeCurrentPlayer = false;
      changeCurrentPlayer = currentPlayer.rollDice();
    }
  });
});

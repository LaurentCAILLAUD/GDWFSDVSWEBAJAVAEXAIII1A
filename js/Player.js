class Player {
  /**
   * Create a new Player object
   * @param {number} id
   * @param {string} nickname
   * @param {number} roundPoints
   * @param {number} globalPoints
   */
  constructor(id, nickname, roundPoints, globalPoints) {
    this.id = id;
    this.nickname = nickname;
    this.roundPoints = roundPoints;
    this.globalPoints = globalPoints;
  }

  /* rollDice method */
  rollDice() {
    /* random number creation between 1 and 6 */
    let dicePoints = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    /* if is the first roll, displaying of the block contain dice picture */
    if ($(".rollDiceResult").css("display") == "none") {
      $(".rollDiceResult").css("display", "block");
    }
    /* picture display based on random number */
    switch (dicePoints) {
      case 1:
        $(".rollDiceResult").css("background-image", "url(images/dice-1-img.png)");
        break;
      case 2:
        $(".rollDiceResult").css("background-image", "url(images/dice-2-img.png)");
        break;
      case 3:
        $(".rollDiceResult").css("background-image", "url(images/dice-3-img.png)");
        break;
      case 4:
        $(".rollDiceResult").css("background-image", "url(images/dice-4-img.png)");
        break;
      case 5:
        $(".rollDiceResult").css("background-image", "url(images/dice-5-img.png)");
        break;
      case 6:
        $(".rollDiceResult").css("background-image", "url(images/dice-6-img.png)");
        break;
    }
    /*  verification of the player who is playing. (When true in returned we change player, when false is returned the player continue to play) */
    if (this.id === 1) {
      if (dicePoints > 1) {
        this.roundPoints += dicePoints;
        $(".player1CurrentPoints").html(this.roundPoints);
        return false;
      } else {
        this.roundPoints = 0;
        alert("Malédiction " + this.nickname + " ! Tu viens de faire 1 avec ton dé. Tu perds donc tous les points accumulés dans cette partie et tu passes ton tour.");
        /* formatting of the interface indicating which player is playing and which player is not playing */
        $(".player1CurrentPoints").html(this.roundPoints);
        $(".player1Container").removeClass("grey");
        $(".player1Container .currentPlayer").removeClass("pink");
        $(".player1Identity").css("color", "#D9D7D6");
        $(".player1Identity").css("font-family", "lato regular");
        $(".player2Container").addClass("grey");
        $(".player2Container .currentPlayer").addClass("pink");
        $(".player2Identity").css("color", "#707070");
        $(".player2Identity").css("font-family", "lato bold");
        return true;
      }
      /*  verification of the player who is playing. (When true in returned we change player, when false is returned the player continue to play)*/
    } else if (this.id === 2) {
      if (dicePoints > 1) {
        this.roundPoints += dicePoints;
        $(".player2CurrentPoints").html(this.roundPoints);
        return false;
      } else {
        this.roundPoints = 0;
        alert("Malédiction " + this.nickname + " ! Tu viens de faire 1 avec ton dé. Tu perds donc tous les points accumulés dans cette partie et tu passes ton tour.");
        /* formatting of the interface indicating which player is playing and which player is not playing */
        $(".player2CurrentPoints").html(this.roundPoints);
        $(".player1Container").addClass("grey");
        $(".player1Container .currentPlayer").addClass("pink");
        $(".player1Identity").css("color", "#707070");
        $(".player1Identity").css("font-family", "lato bold");
        $(".player2Container").removeClass("grey");
        $(".player2Container .currentPlayer").removeClass("pink");
        $(".player2Identity").css("color", "#D9D7D6");
        $(".player2Identity").css("font-family", "lato regular");
        return true;
      }
    }
  }

  /* savePoints in global points method */
  savePoints() {
    /* verification of the player who is playing */
    if (this.id === 1) {
      this.globalPoints += this.roundPoints;
      $(".player1GlobalPoints").html(this.globalPoints);
      this.roundPoints = 0;
      $(".player1CurrentPoints").html(this.roundPoints);
      /* if the players's global points is equal or more than 100 points he wins the game */
      if (this.globalPoints >= 100) {
        alert("Bravo " + this.nickname + " !. Tu as gagné la partie !");
        $(".rollDiceResult").css("display", "none");
        $(".actionGameContent").css("visibility", "hidden");
        $(".player1Container").removeClass("grey");
        $(".player1Container .currentPlayer").removeClass("pink");
      } else {
        /* formatting of the interface indicating which player is playing and which player is not playing */
        $(".player1Container").removeClass("grey");
        $(".player1Container .currentPlayer").removeClass("pink");
        $(".player1Identity").css("color", "#D9D7D6");
        $(".player1Identity").css("font-family", "lato regular");
        $(".player2Container").addClass("grey");
        $(".player2Container .currentPlayer").addClass("pink");
        $(".player2Identity").css("color", "#707070");
        $(".player2Identity").css("font-family", "lato bold");
      }
      /* verification of the player who is playing */
    } else if (this.id === 2) {
      this.globalPoints += this.roundPoints;
      $(".player2GlobalPoints").html(this.globalPoints);
      this.roundPoints = 0;
      $(".player2CurrentPoints").html(this.roundPoints);
      /* if the players's global points is equal or more than 100 points he wins the game */
      if (this.globalPoints >= 100) {
        alert("Bravo " + this.nickname + " !. Tu as gagné la partie !");
        $(".rollDiceResult").css("display", "none");
        $(".actionGameContent").css("visibility", "hidden");
        $(".player2Container").removeClass("grey");
        $(".player2Container .currentPlayer").removeClass("pink");
      } else {
        /* formatting of the interface indicating which player is playing and which player is not playing */
        $(".player1Container").addClass("grey");
        $(".player1Container .currentPlayer").addClass("pink");
        $(".player1Identity").css("color", "#707070");
        $(".player1Identity").css("font-family", "lato bold");
        $(".player2Container").removeClass("grey");
        $(".player2Container .currentPlayer").removeClass("pink");
        $(".player2Identity").css("color", "#D9D7D6");
        $(".player2Identity").css("font-family", "lato regular");
      }
    }
  }
}

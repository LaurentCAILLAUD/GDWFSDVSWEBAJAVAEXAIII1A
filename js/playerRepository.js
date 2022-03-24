/**
 * Save the nickname of the player
 * @param {number} number
 * @returns
 */
function savePlayerNicknameWithThisNumber(number) {
  let pseudo = prompt("Quel est le pseudo du joueur n°" + number + " ?\n (Attention le pseudo ne peut contenir que 7 caractères.)");
  /* verifiy if  the player doesn't click on cancel or write a blank pseudo */
  if (pseudo === null || pseudo === "") {
    alert("Merci de saisir votre pseudo.");
    return savePlayerNicknameWithThisNumber(number);
    /* verify if the length of pseudo written by the player contain maximum seven characters */
  } else if (pseudo.length > 7) {
    alert("Votre pseudo ne doit pas dépasser 7 caractères.");
    return savePlayerNicknameWithThisNumber(number);
  } else {
    return pseudo;
  }
}

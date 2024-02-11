// Pega o nome completo do usuário
var fullName = "César Tallys Henrique Duarte";

// Divide o nome completo em partes usando o espaço como separador
var partsName = fullName.split(" ");

// Pega o primeiro nome
var firstName = partsName[0];

// Pega o último nome
var lastName = partsName[partsName.length - 1];

// Pega a primeira letra do primeiro nome
var firstLetter = firstName.charAt(0);
// Pega a primeira letra do último nome
var lastLetter = lastName.charAt(0);
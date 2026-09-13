/**
 * Kurze Erklärungen der Positionen – für Besucher, die Volleyball nicht im Detail kennen.
 * Bewusst allgemein gehalten und nicht auf einzelne Spielerinnen gemünzt.
 */
const erklaerungen: Record<string, string> = {
  Libera: "Die Libera ist die Abwehrspezialistin: Sie nimmt Aufschläge an, wehrt Angriffe ab und darf selbst nicht angreifen oder blocken. Erkennbar am andersfarbigen Trikot.",
  Libero: "Die Libera ist die Abwehrspezialistin: Sie nimmt Aufschläge an, wehrt Angriffe ab und darf selbst nicht angreifen oder blocken. Erkennbar am andersfarbigen Trikot.",
  Zuspiel: "Die Zuspielerin ist die Regisseurin auf dem Feld. Sie berührt fast jeden zweiten Ball und entscheidet, welche Angreiferin den Abschluss bekommt.",
  Außenangriff: "Der Außenangriff schlägt über die linke Netzseite ab, nimmt Aufschläge an und ist über alle sechs Positionen im Einsatz – die kompletteste Rolle im Team.",
  Mittelblock: "Der Mittelblock verteidigt am Netz gegen gegnerische Angriffe und schließt selbst schnelle Bälle aus der Mitte ab. Meist die größten Spielerinnen im Kader.",
  Diagonalangriff: "Die Diagonalspielerin steht der Zuspielerin gegenüber und ist die Haupt-Angreiferin: Sie bekommt die schwierigen Bälle und punktet am häufigsten.",
  Universal: "Universalspielerinnen sind auf mehreren Positionen einsetzbar und füllen dort die Lücke, wo das Team sie gerade braucht.",
};

export function positionsErklaerung(position: string) {
  return erklaerungen[position];
}

/** Weiblich gebeugte Rollenbezeichnung für Fließtext. */
const rollen: Record<string, string> = {
  Libera: "Libera",
  Libero: "Libera",
  Zuspiel: "Zuspielerin",
  Außenangriff: "Außenangreiferin",
  Mittelblock: "Mittelblockerin",
  Diagonalangriff: "Diagonalangreiferin",
  Universal: "Universalspielerin",
};

export function rollenName(position: string) {
  return rollen[position] ?? position;
}

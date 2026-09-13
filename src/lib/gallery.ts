export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Bildergalerie – Auswahl aus dem Saison-Shooting 2026/27 (Emsland Group und
 * Vechtetalhalle) sowie zwei Aufnahmen aus einem Heimspiel.
 * Alle Dateien auf 1600 px längste Kante und unter 400 KB.
 */
export const gallery: GalleryImage[] = [
  { src: "/gallery/mannschaft-vechtetalhalle.jpg", width: 1600, height: 1271, alt: "Die 1. Damenmannschaft mit Trainer- und Betreuerteam vor der Vechtetalhalle" },
  { src: "/gallery/spielszene-angriff.jpg",        width: 1066, height: 1600, alt: "Angriff über das Netz bei einem Heimspiel in der Vechtetalhalle" },
  { src: "/gallery/sprung-dreier.jpg",             width: 1600, height: 1141, alt: "Spielerinnen im Sprung beim Saison-Shooting im Werk der Emsland Group" },
  { src: "/gallery/ball-praesentation.jpg",        width: 1096, height: 1600, alt: "Zwei Spielerinnen halten einen Volleyball in die Kamera" },
  { src: "/gallery/mannschaft-halle-2.jpg",        width: 1600, height: 1198, alt: "Mannschaft und Betreuerteam in der Produktionshalle der Emsland Group" },
  { src: "/gallery/lachen-zu-dritt.jpg",           width: 1174, height: 1600, alt: "Drei Spielerinnen lachen beim Saison-Shooting" },
  { src: "/gallery/vechtetalhalle-spielball.jpg",  width: 1600, height: 1066, alt: "Spielball auf dem Hallenboden der Vechtetalhalle vor dem Anpfiff" },
  { src: "/gallery/angriff-duo.jpg",               width: 1154, height: 1600, alt: "Zwei Spielerinnen beim Shooting, eine davon im Sprung" },
  { src: "/gallery/mannschaft-werk-2.jpg",         width: 1600, height: 1202, alt: "Die Mannschaft in einer Reihe vor dem Werk der Emsland Group" },
  { src: "/gallery/vier-spielerinnen.jpg",         width: 1092, height: 1600, alt: "Vier Spielerinnen der 1. Damen nebeneinander" },
  { src: "/gallery/sprung-duo.jpg",                width: 1600, height: 1100, alt: "Zwei Spielerinnen im Sprung, zwei weitere dazwischen" },
  { src: "/gallery/mannschaft-halle-3.jpg",        width: 1215, height: 1600, alt: "Mannschaft und Betreuerteam zwischen den Fahnen der Emsland Group" },
  { src: "/gallery/duo-mit-baellen.jpg",           width: 1112, height: 1600, alt: "Zwei Spielerinnen der 1. Damen beim Saison-Shooting" },
  { src: "/gallery/mannschaft-werk-1.jpg",         width: 1600, height: 1131, alt: "Die Mannschaft mit Trainer- und Betreuerteam vor dem Werksgebäude" },
  { src: "/gallery/physio-team.jpg",               width: 1216, height: 1600, alt: "Das Physiotherapie-Team mit dem Koffer von therapie.punkt Veldhausen" },
  { src: "/gallery/mannschaft-halle-1.jpg",        width: 1600, height: 1173, alt: "Mannschaft und Betreuerteam in der Halle der Emsland Group" },
  { src: "/gallery/betreuerinnen.jpg",             width: 1196, height: 1600, alt: "Zwei Betreuerinnen des SCU Emlichheim beim Shooting" },
  { src: "/gallery/mannschaft-werk-3.jpg",         width: 1082, height: 1600, alt: "Spielerin jongliert mit Bällen, eine Mitspielerin filmt mit dem Handy" },
];

import { Personnel } from './Personnel';
import { Etudiant } from './Etudiant';
import { Cours } from './Cours';
import { Notation } from './Notation';

let coursMaths = new Cours(1, "Front-end");
console.log(`Cours: ${coursMaths.getLibelleCours()}`);

let noteMaths = new Notation(coursMaths, 15.5, 2);
console.log(`Note en Front: ${noteMaths.getNote()}, Coef: ${noteMaths.getCoef()}`);

let personnel = new Personnel(1, "Mme leboi", "Alice", 35, "alice@example.com", "0123456789");
console.log(personnel.afficheFiche());

let etudiant = new Etudiant(2, "ziyad", "chaabi", 21, "ziyad.cha@example.com", "9876543210", "2002", "MMI", [noteMaths]);
console.log(etudiant.afficheFiche());
console.log(`Moyenne de l'étudiant: ${etudiant.calculerMoyenneEtud()}`);
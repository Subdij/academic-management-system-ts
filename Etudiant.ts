import { Personnel } from './Personnel';
import { Notation } from './Notation';

export class Etudiant extends Personnel {
  protected _annee: string;
  protected _promotion: string;
  private _tabNotes: Notation[];

  constructor(
    _idPers: number,
    _nomPers: string,
    _prenomPers: string,
    _agePers: number,
    _mailPers: string,
    _telPers: string,
    _annee: string,
    _promotion: string,
    _tabNotes: Notation[]
  ) {
    super(_idPers, _nomPers, _prenomPers, _agePers, _mailPers, _telPers);
    this._annee = _annee;
    this._promotion = _promotion;
    this._tabNotes = _tabNotes;
  }

  // Getters
  getAnneeEntry(): string {
    return this._annee;
  }

  getPromotion(): string {
    return this._promotion;
  }

  getTabNotes(): Notation[] {
    return this._tabNotes;
  }

  // Setters
  setAnneeEntry(_annee: string): void {
    this._annee = _annee;
  }

  setPromotion(_promotion: string): void {
    this._promotion = _promotion;
  }

  setTabNotes(_tabNotes: Notation[]): void {
    this._tabNotes = _tabNotes;
  }

  calculerMoyenneEtud(): number {
    let total = 0;
    let totalCoefficients = 0;
    this._tabNotes.forEach((note) => {
      total += note.getNote() * note.getCoef();
      totalCoefficients += note.getCoef();
    });
    return totalCoefficients > 0 ? total / totalCoefficients : 0;
  }

  afficheFiche(): any {
    let fichePersonnel = super.afficheFiche();
    return {
      ...fichePersonnel,
      anneeEntry: this._annee,
      promotion: this._promotion,
      moyenne: this.calculerMoyenneEtud(),
    };
  }
}
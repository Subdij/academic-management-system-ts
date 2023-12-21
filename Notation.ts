import { Cours } from './Cours';

export class Notation {
  private _cours: Cours;
  private _note: number;
  private _coef: number;

  constructor(cours: Cours, note: number, coef: number) {
    this._cours = cours;
    this._note = note;
    this._coef = coef;
  }

  // Getters et Setters pour Notation
  getCours(): Cours {
    return this._cours;
  }

  getNote(): number {
    return this._note;
  }

  getCoef(): number {
    return this._coef;
  }

  setCours(cours: Cours): void {
    this._cours = cours;
  }

  setNote(note: number): void {
    this._note = note;
  }

  setCoef(coef: number): void {
    this._coef = coef;
  }
}
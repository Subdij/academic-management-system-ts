export class Cours {
  private idCours: number;
  public libelleCours: string;

  constructor(idCours: number, libelleCours: string) {
    this.idCours = idCours;
    this.libelleCours = libelleCours;
  }

  // Getters et Setters pour Cours
  getIdCours(): number {
    return this.idCours;
  }

  getLibelleCours(): string {
    return this.libelleCours;
  }

  setIdCours(idCours: number): void {
    this.idCours = idCours;
  }

  setLibelleCours(libelleCours: string): void {
    this.libelleCours = libelleCours;
  }
}
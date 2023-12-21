export class Personnel {
  protected idPers: number;
  protected nomPers: string;
  protected prenomPers: string;
  protected agePers: number;
  protected mailPers: string;
  protected telPers: string;

  constructor(
    idPers: number,
    nomPers: string,
    prenomPers: string,
    agePers: number,
    mailPers: string,
    telPers: string
  ) {
    this.idPers = idPers;
    this.nomPers = nomPers;
    this.prenomPers = prenomPers;
    this.agePers = agePers;
    this.mailPers = mailPers;
    this.telPers = telPers;
  }
  // Getters
  getIdPers(): number {
    return this.idPers;
  }

  getNomPers(): string {
    return this.nomPers;
  }

  getPrenomPers(): string {
    return this.prenomPers;
  }

  getAgePers(): number {
    return this.agePers;
  }

  getMailPers(): string {
    return this.mailPers;
  }

  getTelPers(): string {
    return this.telPers;
  }

  // Setters
  setIdPers(id: number): void {
    this.idPers = id;
  }

  setNomPers(nom: string): void {
    this.nomPers = nom;
  }

  setPrenomPers(prenom: string): void {
    this.prenomPers = prenom;
  }

  setAgePers(age: number): void {
    this.agePers = age;
  }

  setMailPers(mail: string): void {
    this.mailPers = mail;
  }

  setTelPers(tel: string): void {
    this.telPers = tel;
  }

  afficheFiche(): any {
    return {
      id: this.idPers,
      nom: this.nomPers,
      prenom: this.prenomPers,
      age: this.agePers,
      email: this.mailPers,
      telephone: this.telPers,
    };
  }
}
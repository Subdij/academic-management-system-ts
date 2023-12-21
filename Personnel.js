"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personnel = void 0;
var Personnel = /** @class */ (function () {
    function Personnel(idPers, nomPers, prenomPers, agePers, mailPers, telPers) {
        this.idPers = idPers;
        this.nomPers = nomPers;
        this.prenomPers = prenomPers;
        this.agePers = agePers;
        this.mailPers = mailPers;
        this.telPers = telPers;
    }
    // Getters
    Personnel.prototype.getIdPers = function () {
        return this.idPers;
    };
    Personnel.prototype.getNomPers = function () {
        return this.nomPers;
    };
    Personnel.prototype.getPrenomPers = function () {
        return this.prenomPers;
    };
    Personnel.prototype.getAgePers = function () {
        return this.agePers;
    };
    Personnel.prototype.getMailPers = function () {
        return this.mailPers;
    };
    Personnel.prototype.getTelPers = function () {
        return this.telPers;
    };
    // Setters
    Personnel.prototype.setIdPers = function (id) {
        this.idPers = id;
    };
    Personnel.prototype.setNomPers = function (nom) {
        this.nomPers = nom;
    };
    Personnel.prototype.setPrenomPers = function (prenom) {
        this.prenomPers = prenom;
    };
    Personnel.prototype.setAgePers = function (age) {
        this.agePers = age;
    };
    Personnel.prototype.setMailPers = function (mail) {
        this.mailPers = mail;
    };
    Personnel.prototype.setTelPers = function (tel) {
        this.telPers = tel;
    };
    Personnel.prototype.afficheFiche = function () {
        return {
            id: this.idPers,
            nom: this.nomPers,
            prenom: this.prenomPers,
            age: this.agePers,
            email: this.mailPers,
            telephone: this.telPers,
        };
    };
    return Personnel;
}());
exports.Personnel = Personnel;

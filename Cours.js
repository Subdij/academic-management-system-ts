"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cours = void 0;
var Cours = /** @class */ (function () {
    function Cours(idCours, libelleCours) {
        this.idCours = idCours;
        this.libelleCours = libelleCours;
    }
    // Getters et Setters pour Cours
    Cours.prototype.getIdCours = function () {
        return this.idCours;
    };
    Cours.prototype.getLibelleCours = function () {
        return this.libelleCours;
    };
    Cours.prototype.setIdCours = function (idCours) {
        this.idCours = idCours;
    };
    Cours.prototype.setLibelleCours = function (libelleCours) {
        this.libelleCours = libelleCours;
    };
    return Cours;
}());
exports.Cours = Cours;

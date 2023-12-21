"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notation = void 0;
var Notation = /** @class */ (function () {
    function Notation(cours, note, coef) {
        this._cours = cours;
        this._note = note;
        this._coef = coef;
    }
    // Getters et Setters pour Notation
    Notation.prototype.getCours = function () {
        return this._cours;
    };
    Notation.prototype.getNote = function () {
        return this._note;
    };
    Notation.prototype.getCoef = function () {
        return this._coef;
    };
    Notation.prototype.setCours = function (cours) {
        this._cours = cours;
    };
    Notation.prototype.setNote = function (note) {
        this._note = note;
    };
    Notation.prototype.setCoef = function (coef) {
        this._coef = coef;
    };
    return Notation;
}());
exports.Notation = Notation;

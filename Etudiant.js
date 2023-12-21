"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
var Personnel_1 = require("./Personnel");
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(_idPers, _nomPers, _prenomPers, _agePers, _mailPers, _telPers, _annee, _promotion, _tabNotes) {
        var _this = _super.call(this, _idPers, _nomPers, _prenomPers, _agePers, _mailPers, _telPers) || this;
        _this._annee = _annee;
        _this._promotion = _promotion;
        _this._tabNotes = _tabNotes;
        return _this;
    }
    // Getters
    Etudiant.prototype.getAnneeEntry = function () {
        return this._annee;
    };
    Etudiant.prototype.getPromotion = function () {
        return this._promotion;
    };
    Etudiant.prototype.getTabNotes = function () {
        return this._tabNotes;
    };
    // Setters
    Etudiant.prototype.setAnneeEntry = function (_annee) {
        this._annee = _annee;
    };
    Etudiant.prototype.setPromotion = function (_promotion) {
        this._promotion = _promotion;
    };
    Etudiant.prototype.setTabNotes = function (_tabNotes) {
        this._tabNotes = _tabNotes;
    };
    Etudiant.prototype.calculerMoyenneEtud = function () {
        var total = 0;
        var totalCoefficients = 0;
        this._tabNotes.forEach(function (note) {
            total += note.getNote() * note.getCoef();
            totalCoefficients += note.getCoef();
        });
        return totalCoefficients > 0 ? total / totalCoefficients : 0;
    };
    Etudiant.prototype.afficheFiche = function () {
        var fichePersonnel = _super.prototype.afficheFiche.call(this);
        return __assign(__assign({}, fichePersonnel), { anneeEntry: this._annee, promotion: this._promotion, moyenne: this.calculerMoyenneEtud() });
    };
    return Etudiant;
}(Personnel_1.Personnel));
exports.Etudiant = Etudiant;

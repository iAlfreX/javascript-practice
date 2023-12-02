"use strict";

class DataValidation {
  static checkForString(value) {
    return typeof value === "string";
  }

  static checkForEmptyString(value) {
    return value.trim() === "";
  }

  static checkForUndefined(value) {
    return typeof value === "undefined";
  }
}

class Link {
  constructor(text, link) {
    this._text = DataValidation.checkForString(text) && !DataValidation.checkForEmptyString(text) ? text : "Ссылка";
    this._link = DataValidation.checkForString(link) && !DataValidation.checkForEmptyString(link) ? link : "#";
    this._style = "";
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = DataValidation.checkForString(value) && !DataValidation.checkForEmptyString(value) ? value : "Ссылка";
  }

  get link() {
    return this._link;
  }

  set link(value) {
    this._link = DataValidation.checkForString(value) && !DataValidation.checkForEmptyString(value) ? value : "#";
  }

  get style() {
    return this._style;
  }

  set style(value) {
    this._style = DataValidation.checkForString(value) && !DataValidation.checkForEmptyString(value) ? value : "";
  }

  _checkForProtocol() {
    if (this._link === "#") return;

    if (!this._link.startsWith("http://") || !this._link.startsWith("https://")) this.link = "https://" + this._link;
  }

  createLink(linkStyle) {
    const link = document.createElement("a");

    if (!DataValidation.checkForUndefined(linkStyle)) this.style = linkStyle;

    link.textContent = this._text;
    link.style.cssText = this._style;
    this._checkForProtocol();
    link.setAttribute("href", `${this._link}`);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
  }
}

const firstLink = new Link("Первая ссылка", "www.uintei.kiev.ua");

/* 
	У данного сайта фактически http протокол. В методе _checkForProtocol() 
	добавляется https протокол и данная запись в методе не призведет к ошибке 
	так как браузеры автоматически там где нужно могут заменять http на https и наоборот!
*/

const firstLinkStyle =
  "display: inline-block; margin-right: 5px; padding: 10px 20px; text-decoration: none; background-color: #3498db; color: #fff; border-radius: 5px;";
firstLink.createLink(firstLinkStyle);

const secondLink = new Link("Вторая ссылка", "www.youtube.com");
const secondLinkStyle =
  "display: inline-block; padding: 10px 20px; text-decoration: none; background-color: #3498db; color: #fff; border-radius: 5px;";
secondLink.createLink(secondLinkStyle);

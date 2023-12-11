"use strict";

class DataValidation {
  static checkForNumber(value) {
    return typeof value === "number";
  }

  static checkForNaN(value) {
    return isNaN(value);
  }

  static checkForInteger(value) {
    return Number.isInteger(value);
  }

  static checkForValidInteger(value) {
    return this.checkForNumber(value) && !this.checkForNaN(value) && this.checkForInteger(value);
  }

  static checkForFormElement(value) {
    return value instanceof HTMLFormElement;
  }

  static checkForObject(value) {
    return value instanceof Object;
  }

  static checkForNull(value) {
    return value === null;
  }
}

class FormTable {
  constructor(formObj, numberOfFields) {
    this._formObj = DataValidation.checkForObject(formObj) ? formObj : null;
    this._numberOfFields = DataValidation.checkForValidInteger(numberOfFields) ? numberOfFields : null;
    this._cols = 2;
  }

  get numberOfFields() {
    return this._numberOfFields;
  }

  set numberOfFields(numberOfFields) {
    this._numberOfFields = DataValidation.checkForValidInteger(numberOfFields) ? numberOfFields : null;
  }

  get formObj() {
    return this._formObj;
  }

  set formObj(formObj) {
    this._formObj = DataValidation.checkForObject(formObj) ? formObj : null;
  }

  createTableWithData() {
    if (!DataValidation.checkForNull(this._formObj) || !DataValidation.checkForNull(this._numberOfFields)) {
      const table = document.createElement("table");
      table.className = "table";

      Object.entries(this._formObj).forEach(([key, value]) => {
        const tableRow = document.createElement("tr");
        table.appendChild(tableRow);

        const tableHeader = document.createElement("th");
        tableHeader.textContent = key;
        tableHeader.className = "table-header";

        const tableData = document.createElement("td");
        tableData.textContent = value;
        tableData.className = "table-data";

        tableRow.appendChild(tableHeader);
        tableRow.appendChild(tableData);
      });

      document.body.appendChild(table);
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const formObj = convertFormToObject(event.target);
  new FormTable(formObj.form, formObj.numberOfFields).createTableWithData();
}

function convertFormToObject(form) {
  if (DataValidation.checkForFormElement(form)) {
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());

    if ("languages" in formObj) {
      const selectedLanguages = formData.getAll("languages");
      formObj.languages = selectedLanguages;
    }

    return {
      form: formObj,
      numberOfFields: countNumberOfObjectFields(formObj),
    };
  }
}

function countNumberOfObjectFields(obj) {
  if (DataValidation.checkForObject(obj)) return Object.keys(obj).length;
}

document.querySelector(".form").addEventListener("submit", handleSubmit);

"use strict";

class DataValidation {
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
  constructor(formObj) {
    this._formObj = DataValidation.checkForObject(formObj) ? formObj : null;
  }

  get formObj() {
    return this._formObj;
  }

  set formObj(formObj) {
    this._formObj = DataValidation.checkForObject(formObj) ? formObj : null;
  }

  createTableWithData() {
    if (!DataValidation.checkForNull(this._formObj)) {
      const checkingForTableExistence = document.querySelector(".table") !== null;

      if (checkingForTableExistence) document.querySelector(".table").remove();

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
  new FormTable(formObj).createTableWithData();
}

function convertFormToObject(form) {
  if (DataValidation.checkForFormElement(form)) {
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());

    if ("languages" in formObj) {
      const selectedLanguages = formData.getAll("languages");
      formObj.languages = selectedLanguages;
    }

    return formObj;
  }
}

document.querySelector(".form").addEventListener("submit", handleSubmit);

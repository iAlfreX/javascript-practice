"use strict";

class DataValidation {
  static checkForNumber(value) {
    return typeof value === "number" && !isNaN(value);
  }

  static checkForInteger(value) {
    return Number.isInteger(value);
  }
}

class Table {
  constructor(rows, cols) {
    this.rows = DataValidation.checkForNumber(rows) && DataValidation.checkForInteger(rows) ? rows : 0;
    this.cols = DataValidation.checkForNumber(cols) && DataValidation.checkForInteger(cols) ? cols : 0;
  }

  get amountOfRows() {
    return this.rows;
  }

  set amountOfRows(value) {
    if (DataValidation.checkForNumber(value) && DataValidation.checkForInteger(value)) {
      this.rows = value;
    } else {
      console.log(`${value} не является допустимым значением!`);
    }
  }

  get amountOfCols() {
    return this.cols;
  }

  set amountOfCols(value) {
    if (DataValidation.checkForNumber(value) && DataValidation.checkForInteger(value)) {
      this.cols = value;
    } else {
      console.log(`${value} не является допустимым значением!`);
    }
  }

  createTable() {
    const table = document.createElement("table");
    let counter = 0;
    table.style.cssText = "border-collapse: collapse; width: 50%; height: 50%;";
    // table.style.borderCollapse = "collapse";
    // table.style.width = "100%";
    // table.style.border = "1px solid #000";
    document.body.style.cssText = "margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh;";
    document.body.insertBefore(table, document.body.firstChild);

    for (let rows = 1; rows <= this.amountOfRows; rows++) {
      const tableRow = document.createElement("tr");
      table.appendChild(tableRow);

      for (let cols = 1; cols <= this.amountOfCols; cols++) {
        const tableData = document.createElement("td");
        tableData.style.cssText = "text-align: center; width: 10%; border: 1px solid #000;";
        tableData.textContent = ++counter;
        tableRow.appendChild(tableData);
      }
    }
  }
}

const userTable = new Table(10, 10);
userTable.createTable();

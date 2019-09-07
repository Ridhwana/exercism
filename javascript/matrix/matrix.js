export class Matrix {
  constructor(str) {
    this.str = str
    this.arrRows = this.getRows();
  }

  get rows() {
    return this.arrRows;
  }

  get columns() {
    return this.arrRows[0].map((col,i) => this.arrRows.map(row => row[i]));
  }

  getRows() {
    const newlineSplit = this.str.split('\n');
    const rows = newlineSplit.map((arr) => {
      return (arr.split(' ').map(val => parseInt(val)));
    });
    return rows;
  }

}

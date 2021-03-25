function myFunction() {
  var ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/1g8Zdqjiqkot9DLmIF_nAldDNyRWMzk9WFdm7DQwS4pg/edit');
    var sheet = ss.getSheets()[0];
    var cell = sheet.getRange('A55');
    cell.setValue('Vishwas Bordia - 18103054');
}

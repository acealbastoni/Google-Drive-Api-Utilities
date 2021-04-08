function updateCell_(columnNumber,subscriberId){
  var sheet = SpreadsheetApp.openById(QMedicEvents_From_S3_Only_ID).getSheetByName("sheet1");
  // Single column
  var column = sheet.getRange(2, columnNumber,sheet.getLastRow());
  column.setNumberFormat("####.#");
  
  sheet.getRange(2,columnNumber).setValue(subscriberId);
  //SpreadsheetApp.flush();
}

function getSubscriberId_(columnNumber){
  var sheet = SpreadsheetApp.openById(QMedicEvents_From_S3_Only_ID).getSheetByName("sheet1")
  var subscriberId= sheet.getRange(2,columnNumber).getValue();
  return subscriberId;
}


function getObject_(stringValue) {
  var columnNumber =Number(stringValue.substring(6));
  return {columnNumber: columnNumber, lowerLimit:(((columnNumber-1)*50)+1), upperLimit: columnNumber* 50 };
}


function Init_(lowerLimit,upperLimit, columnNumber) {
  return {
    downloadedDate: function () { var downloadedDate = new Date(); downloadedDate.setHours(downloadedDate.getHours() - 9); return downloadedDate;},
    subscriberId: function () { var subscriberId = getSubscriberId_(columnNumber); subscriberId = (subscriberId && (subscriberId <upperLimit))? subscriberId : lowerLimit; return subscriberId;}
  };
}

var QMedicEvents_From_S3_Only_ID = '1IGwRX_kIMfFjviX1ovGQ3AIsn_mwMGsU1bz6_fKY4mI';
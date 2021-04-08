function myFunctiouuun() {
  
  
  
  
  return ;
  
  
  var start = (new Date()).getTime();
  
  var arr = [] ;
  var date = new Date();
  var i  =0 ;
  while(++i<=300){
    try{ 
      getEvents(i,date);
      arr.push(i)
    }
    catch(e)
    {
    }
  }
  Logger.log(arr.length);
  
  Logger.log("Tim is:  "+ ((new Date().getTime() - start)/1000 ) +"  Second" );
}












//function myFunction() { 
//  
//  try{ 
//    
//    throw {message:"Cache and S3 are aquals"};
//    
//  }
//  catch(e)
//  {
//    
//    var str = (e.message).toString();
//    if((str.indexOf("NoSuchKey") !== -1) ||(str.indexOf("Cache and S3 are aquals") !== -1) )
//    {
//      Logger.log("Hello");
//      
//      Logger.log(e.message);
//    }
//    
//  }
//}



//
//
//
//
//
//
//
//
//
//
//
//
//
//var cache = CacheService.getScriptCache();
//var subscriberId=16;
//var downloadedDate = new Date();
//downloadedDate.setDate(downloadedDate.getDate() - 5);
//
//var key = "Event/" + subscriberId + "/" + QMedicUtilities._convertDate(downloadedDate) + "/EventData.json";
//
//var jsonEventsFromS3 = getEvents(subscriberId, downloadedDate);
//var  jsonEventsFromCache =  QMedicEvents.getEvents(subscriberId, downloadedDate) 
//if(JSON.stringify(jsonEventsFromS3) === JSON.stringify(jsonEventsFromCache))
//{
//  Logger.log("They ar Equal ");
//  // continue;
//}
//Logger.log("NotEqual");
//QMedicEvents.put_in_QMedicEvents_ScriptCache(key, JSON.stringify(jsonEventsFromS3))
//
//
//
////  if(jsonEventsFromCache===jsonEventsFromS3);  
////  {
////    Logger.log("continue");
////  }
////  
//
//
//
////cache.put(key, jsonEventsFromS3, QMedicConstants.TIME_IN_CACHE); 
//
//
//
//
//function test()
//{  
//  
//  QMedicEvents.put_in_QMedicEvents_ScriptCache("MM", "dWWAfaa");
//}
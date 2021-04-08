function getEvents(subscriberId, downloadedEventDate) {
  var key = "Event/" + subscriberId + "/" + QMedicUtilities._convertDate(downloadedEventDate) + "/EventData.json";
  var s3Client = QMedicS3API.getInstance(QMedicConstants.AWS_KEY, QMedicConstants.AWS_SECRET);
  var jsonEvents = s3Client.readEventsFromS3(key);
  //Logger.log("From S3 : " + key);
  console.log("From S3 : "+ key);
  return JSON.parse(jsonEvents);
}
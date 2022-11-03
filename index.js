function superbowlWin(record){
  let blah = record.find(function(element){
    if(element.result === "W"){
      return true;
    }
  })
  if(blah === undefined){
    return undefined;
  } else {
    return blah.year;
  }
}
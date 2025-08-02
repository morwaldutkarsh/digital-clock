function countdown() {
  let time= document.getElementById("input").value;
  let hours = time.split(":")[0];
  let minutes = time.split(":")[1];
  let seconds = time.split(":")[2];
  document.getElementById("input").value=`${hours}:${minutes}:${seconds}`

  if(seconds==="00"){
    seconds="60";
    minutes--;
  }else{
    seconds--;
  }
  document.getElementById("input").value=`${hours}:${minutes}:${seconds}`

}

setInterval(countdown,1000);
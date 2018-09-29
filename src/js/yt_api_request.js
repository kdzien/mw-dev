export function getLastVideo() {
  return new Promise((resolve,reject) => {
    $.ajax({url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDpeMKA2OSu_1kzvfFRO4u79p1aj2f6an0&channelId=UCvSL2WFTrkGJ7K166k_Ktrg&part=snippet,id&order=date&maxResults=20", success: function(result){
      let last_video = result.items[0].id.videoId;
      $("#videos iframe").attr('src',`https://www.youtube.com/embed/${last_video}?controls=0&showinfo=0`)
      resolve()
    }});
  })
}
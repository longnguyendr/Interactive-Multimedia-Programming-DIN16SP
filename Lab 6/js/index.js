$("button").on("click", handleButtonClick);

function handleButtonClick() {
  var y = document.getElementById('inputField').value
  $.ajax({
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: { "tags": y, "format": "json" }
  });
}

function jsonFlickrFeed(json) {
  console.log(json);

  $.each(json.items, function(i, item) {
    $("<img />").attr("src", item.media.m).appendTo("#images");
  });
};

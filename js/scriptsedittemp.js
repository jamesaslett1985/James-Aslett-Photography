/*function load () {

var picThumbs = [
{flickrURL: "https://c2.staticflickr.com/8/7254/27968609851_32ee40c210_b.jpg", imageName: "edit-01a-small.jpg", imgDescrip: "a"},
{flickrURL: "https://c2.staticflickr.com/8/7371/10801136084_ef79539122_b.jpg", imageName: "edit-01b-small.jpg", imgDescrip: "b"}];

var list = "";
var gallery = document.getElementById("gallery");
shuffle(picThumbs);
for ( var i = 0; i < picThumbs.length; i++ ) {
	var co = picThumbs[i];
	var style = "background-image: url('img/"+co.imageName+ "')";
	list += '<li>' + '<a href=' + co.flickrURL + ' target="_blank" class="fancybox">' + '<div class="image" ><img src="img/small/'+co.imageName+'"></img> <h2>'+co.imgDescrip+'</h2></div></li>';
}
gallery.innerHTML = list;

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//End of Index code

//JQuery Code
	$(document).ready(function(){
		load(); //load all the images
		
		
		
		
		$(".fancybox").fancybox(
		{beforeLoad: function() {
			
    this.title = $(this.element).find('h2').text();

   }

		}
		);  //apply fancy box to loaded images
		
	});
	
	
	TwentyTwenty
	
	*/
	
	$(window).load(function() {
  $(".twentyWrapper").twentytwenty({
	 
	  
  });
});
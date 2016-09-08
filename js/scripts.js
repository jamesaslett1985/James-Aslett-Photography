//JavaScript

//Index load images and shuffle

function load () {

var picThumbs = [
{flickrURL: "https://c2.staticflickr.com/6/5070/5645307055_cc511ffcd1_b.jpg", imageName: "01-small.jpg", imgDescrip: "Stonehenge"},
{flickrURL: "https://c2.staticflickr.com/6/5272/5888211577_d0d25abf6d_b.jpg", imageName: "02-small.jpg", imgDescrip: "Clouds"},
{flickrURL: "https://c2.staticflickr.com/6/5184/5888866884_891e48ebe8_b.jpg", imageName: "03-small.jpg", imgDescrip: "Mobo"},
{flickrURL: "https://c1.staticflickr.com/7/6063/6027042694_82a34112f2_b.jpg", imageName: "04-small.jpg", imgDescrip: "Barley"},
{flickrURL: "https://c1.staticflickr.com/7/6079/6047180718_3ffe75dd36_b.jpg", imageName: "05-small.jpg", imgDescrip: "New York"},
{flickrURL: "https://c1.staticflickr.com/9/8441/7931961512_e47baf3798_b.jpg", imageName: "06-small.jpg", imgDescrip: "Jersey Cow"},
{flickrURL: "https://c2.staticflickr.com/8/7322/12572212434_444828f6e7_b.jpg", imageName: "07-small.jpg", imgDescrip: "Beach huts"},
{flickrURL: "https://c2.staticflickr.com/8/7148/13852082615_439074d681_b.jpg", imageName: "08-small.jpg", imgDescrip: "Henry"},
{flickrURL: "https://c2.staticflickr.com/4/3875/14514856215_2da3bf7949_b.jpg", imageName: "09-small.jpg", imgDescrip: "Goodwood"},
{flickrURL: "https://c2.staticflickr.com/8/7543/15876634190_562e604566_b.jpg", imageName: "10-small.jpg", imgDescrip: "Woods"},
{flickrURL: "https://c2.staticflickr.com/8/7597/16745059651_8d442546f4_b.jpg", imageName: "11-small.jpg", imgDescrip: "Kona"},
{flickrURL: "https://c2.staticflickr.com/4/3347/5825475733_32a95116df_b.jpg", imageName: "12-small.jpg", imgDescrip: "Station"},
{flickrURL: "https://c1.staticflickr.com/9/8635/16558716408_c339eec9ec_b.jpg", imageName: "13-small.jpg", imgDescrip: "Robin"},
{flickrURL: "https://c2.staticflickr.com/8/7607/16558829920_fa22bb839a_b.jpg", imageName: "14-small.jpg", imgDescrip: "Center Parcs"},
{flickrURL: "https://c2.staticflickr.com/6/5758/22031608083_02202a3780_b.jpg", imageName: "15-small.jpg", imgDescrip: "Bosham"},
{flickrURL: "https://c2.staticflickr.com/2/1490/25761915270_68dea50148_b.jpg", imageName: "16-small.jpg", imgDescrip: "Reflection"},
{flickrURL: "https://c2.staticflickr.com/8/7489/26544194060_7b6d90cd3f_b.jpg", imageName: "17-small.jpg", imgDescrip: "St Mary's"},
{flickrURL: "https://c2.staticflickr.com/2/1664/25942215512_4726bd5652_b.jpg", imageName: "18-small.jpg", imgDescrip: "Bark"},
{flickrURL: "https://c2.staticflickr.com/6/5509/14515085695_89ff08e34c_b.jpg", imageName: "19-small.jpg", imgDescrip: "Speed"},
{flickrURL: "https://c1.staticflickr.com/9/8318/8011119879_fd7dd40e27_b.jpg", imageName: "20-small.jpg", imgDescrip: "Sail"},
{flickrURL: "https://c2.staticflickr.com/8/7255/27463911272_97fcc45a37_b.jpg", imageName: "21-small.jpg", imgDescrip: "Ivy"},
{flickrURL: "https://c2.staticflickr.com/8/7708/27430903652_ebd9601141_b.jpg", imageName: "22-small.jpg", imgDescrip: "McQueen"},
{flickrURL: "https://c2.staticflickr.com/8/7309/26816271465_2946255dee_b.jpg", imageName: "23-small.jpg", imgDescrip: "Marlborough"},
{flickrURL: "https://c2.staticflickr.com/2/1639/26371683310_6a75ce7c56_b.jpg", imageName: "24-small.jpg", imgDescrip: "Oscar"}];

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
	

//TOP NAV JQuery
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}	
	
//Hide icon when mobile menu open
$(".icon").click(function(){
	if (!$(".icon a").hasClass("open")) {
		var a = $(this).find("a");
		a.addClass("icon-cross");
		a.addClass("open");
		
	}
	else {
		var a = $(this).find("a");
		a.removeClass("icon-cross");
		a.removeClass("open");
	}
});



//Force mobile menu to shut if left open on screen resize
$(window).resize(function(){
	if($(window).width() > 382) {
//Remove Responsive class
	$("#myTopnav").removeClass(" responsive");
//Force X icon back to hamburger
	var a = $(".icon a");
	a.removeClass("icon-cross");
	a.removeClass("open");
//Else leave it there	
    } else {
    console.log("bigger");
	}
});

//TABLES SCRIPTS
$(document).ready(function() 
    { 
        $("#myTable").tablesorter(); 
    } 
); 
    




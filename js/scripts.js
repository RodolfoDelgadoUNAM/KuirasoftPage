var admin = require("firebase-admin");

var serviceAccount = require("X:\Programador\DesarrolloWeb\GoFastHuasca\go-fast-huasca-firebase-adminsdk-q9zs3-2b5bcb929b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://go-fast-huasca-default-rtdb.firebaseio.com"
});

const db = admin.database();


$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});
});

function irRestaurant() {
    window.location.href = "./restaurant.html#RefRestaurant";
}

function irTamales() {
    window.location.href = "./restaurant.html";
}

function irBarbacoa() {
    window.location.href = "./restaurant.html#RefBarbacoa";
}

function irPizzas() {
    window.location.href = "./restaurant.html#RefPizzas";
}

function irAlitas() {
    window.location.href = "./restaurant.html#RefAlitas";
}
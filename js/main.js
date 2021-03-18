// Funione per attivare burger

function btnWork() {

  $(".hamburger-menu").css("display", "block");
}

// Funione per disattivare burger
function btnNotWork(){
  $(".hamburger-menu").css("display", "none");
}

$('.fa-bars').click(btnWork);
$('.fa-times').click(btnNotWork);

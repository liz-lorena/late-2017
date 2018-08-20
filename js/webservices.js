function changeImage(index) {
    
    if(index == 1){
        $('#imgspot1').attr('src', '');
    } else if (index == 2){
        $('#imgspot1').attr('src', '');

    } else if (index == 3){
        $('#imgspot1').attr('src', '');

    } else if(index == 4){
        $('#imgspot2').attr('src', '');
    } else if (index == 5){
        $('#imgspot2').attr('src', '');

    } else if (index == 6){
        $('#imgspot2').attr('src', '');

    } else if(index == 7){
        $('#imgspot3').attr('src', '');
    } else if (index == 8){
        $('#imgspot3').attr('src', '');

    } else if (index == 9){
        $('#imgspot3').attr('src', '');

    } else if(index == 10){
        $('#imgspot4').attr('src', '');
    } else if (index == 11){
        $('#imgspot4').attr('src', '');

    } else if (index == 12){
        $('#imgspot4').attr('src', '');

    }
    
}

function changeDiv(index) {


    if (index == 1) {
        $('#btn2').removeClass('active');

        $('#websitePolicies').show();
        $('#websitePrices').hide();
        $('#btn1').addClass('active');
    }
    else if (index == 2) {
        $('#btn1').removeClass('active');

        $('#websitePrices').show();
        $('#websitePolicies').hide();
        $('#btn2').addClass('active');
    }
    else if (index == 3) {
      $('#btn4').removeClass('active');

        $('#illusPolicies').show();
        $('#illusPrices').hide();
        $('#btn3').addClass('active');

    }
    else if (index == 4) {
         $('#btn3').removeClass('active');

        $('#illusPrices').show();
        $('#illusPolicies').hide();
        $('#btn4').addClass('active');

    }
}

$(document).ready(function() {
    
    
    $('#main').hide();
    $('#websitePrices').hide();
    
});

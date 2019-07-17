$('body').css("background-color", "black");
$("#com2").css("width", "300px");

A = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
C = ['zero', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];


$('#btn').click(() => {
    //on initialise
    B = "";
    var b=0;
    var f=0;
    var d=0;

    $('#com2').val("");
    var a = parseInt($('#com1').val(), 10);
    if (isNaN(a)) {
        alert("Veuillez saisir un nombre entre 0 et 999");

    } else {
        if (a < 0 || a > 999) {
            alert("Veuillez saisir un nombre entre 0 et 999");
        } else {

            // détermination des centaines, dizaines
            b = Math.trunc(a / 100);
            c = a % 100;
            if (c != 0) {
                d = Math.trunc(c / 10);
                e = c % 10;
                if (e != 0) {
                    f = Math.trunc(e / 1);
                }
            }

            // affichage
            if (b != 0) {
                B+= (b==1) ? (" cent ") : (A[b] + "-cent ");
                B+= (d!=0) ? ("-" + C[d]) : " ";
                B+=(f!=0) ? ("-" + A[f]) : " ";
            }else{
                if(d!=0){
                    B+= (C[d]);
                    B+=(f!=0) ? ("-" + A[f]) : " ";
                }else{

                    B+=A[f];
                }
            }
            
           

            $('#com2').val(B);
        }
    }
});
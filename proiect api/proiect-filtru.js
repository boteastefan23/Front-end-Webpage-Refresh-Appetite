//-----Scroll Behavior-----//

$(document).ready(function (){
    $("#button-first").click(function (){
        $('html, body').animate({
            scrollTop: $("#club-nr-1").offset().top
        }, 2000);
    });
});


//----- FILTRU CLUBURI ------//
document.getElementById('filtrare').onclick = function(ev) {

    ev.preventDefault();

    filtrare_continut();
}

function filtrare_continut() {

    let pret_sel = document.getElementById('pret').value;
    console.log(pret_sel);
    let muzica_sel = document.getElementById('specific-muzica').value;
    let varsta_sel = document.getElementById('varsta-medie').value;

    let content_elements = document.getElementsByClassName('club-container')
    //console.log(content_elements)


    for (let i = 0; i < content_elements.length; i++) {
 

            let content_element = content_elements[i];

            //console.log(content_element);

            let pret_el = content_element.getAttribute('data-pret');
           // console.log(pret_el);
            let muzica_el = content_element.getAttribute('data-muzica');
            let varsta_el = content_element.getAttribute('data-varsta');

            
            let pret_cond = (pret_el == pret_sel) || (pret_sel == 'all');
            let muzica_cond = (muzica_el == muzica_sel) || (muzica_sel == 'all') || (muzica_el == 'all');
            let varsta_cond = (varsta_el == varsta_sel) || (varsta_sel == 'all');


            if (pret_cond && muzica_cond && varsta_cond) {

                content_element.style.display = 'block';
            } else {
                content_element.style.display = 'none';
            }
    }
}











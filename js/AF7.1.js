// write here the optimal jQuery code as required in the statemens

$(document).ready(function() {
    
    $("section:nth-child(odd)").hover(function () {
        $(this).find("div + div").fadeIn();       
    }, function() {
        $(this).find("div + div").fadeOut();
    });
    $("section:nth-child(even)").dblclick( function () {
        $(this).find("div + div").fadeIn();       
    });
    $("div + div > button").click(function () {
        $(this).parent().fadeOut();
    });    

    // Lo siguiente se podría hacer de igual forma con .filter(function())
    $("nav button").click(function () {
        let city = $(this).text();
        let element = $("h2:contains('"+city+"')").parent();
        $(element).slideToggle("slow");        
    });
});

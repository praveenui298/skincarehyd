import {homepage_data} from './commen.js';
$(document).ready(function(){
    // slides
    const slides = document.getElementById('slides_temp').innerHTML;
    console.log(slides);
    $('.carousel-inner').html(Mustache.render(slides , homepage_data));
    $('.carousel-item:first').attr('class' , 'carousel-item active');
  
    //  specialization
    const specialization = document.getElementById('specialization_temp').innerHTML;
    $('#specialization').html(Mustache.render(specialization , homepage_data));

    //  specialization_services
    const specialization_services = document.getElementById('specialization_services').innerHTML;
     $('#specializaition_services').html(Mustache.render(specialization_services , homepage_data));           
    })
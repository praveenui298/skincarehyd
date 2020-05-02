import {homepage_data} from './commen.js';
$(document).ready(function(){
    // slides
    const slides_temp = `
    {{#slides}}
    <div class="carousel-item">
    <img src="{{.}}" class="d-block w-100">
    </div>
    {{/slides}}
    `
    $('.carousel-inner').html(Mustache.render(slides_temp , homepage_data));
    $('.carousel-item:first').attr('class' , 'carousel-item active');
  
    //  specialization
const specialization_temp = `
<div class ="row">
{{#specialization}}
 <div class ="col-lg-3">
 <img src ="{{imgage}}" class="w-75" alt="specialization">
 <h2>{{titile}}</h2>
 </div>
 {{/specialization}}
 </div>
 `
$('#specialization').html(Mustache.render(specialization_temp , homepage_data));

//  specialization_services
    const specialization_services_temp = 
          `
          <div class="row">
           {{#specialization_services}}
            <div class ="col-lg-6">
            <img src="{{image}}" class="w-100 mt-lg-5" alt="">
            <h2>{{heading}}</h2>
            <p>{{text}}</p>
            <button>{{button}}</button>
            </div>
            {{/specialization_services}}
            </div>
            `
     $('#specializaition_services').html(Mustache.render(specialization_services_temp , homepage_data));       
    })
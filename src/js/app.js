import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/variables.scss';
import '../styles/mixins.scss';
import '../styles/style.scss';
import '../styles/header.scss';
import '../styles/concerts.scss';
import '../styles/biography.scss';
import '../styles/videos.scss';
import '../styles/social.scss';
import '../styles/footer.scss';
import 'jquery';
import './navigation.js'
import './animations.js'
import {getLastVideo} from './yt_api_request'
import 'jquery.scrollto';
window.onload = function() {
  getLastVideo().then(()=>{
    $('body').fadeIn(function(){
      let section_positions = [];
      $("section,footer").each(function(i,elem){
        section_positions.push({id:$(this).attr('id'),pos:$(this)[0].offsetTop,visible:false})
      })
      $(window).scroll(function(e){
        let bottom_pos = $(this).scrollTop()+window.innerHeight-200;
        console.log(section_positions)
        section_positions.forEach(elem=>{
          if(bottom_pos>elem.pos && !elem.visible){
            $(`#${elem.id}`).find(".hide_div").fadeOut(500);
            elem.visible = true;
          }
        })
      })
    });
  })
};

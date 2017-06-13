import '../scss/index.scss';
import 'file-loader?name=[name].[ext]!../index.html';

import 'jquery';

console.log('jQuery:', jQuery);

$('#container>div').click((ev)=>{
  console.log('You clicked:', ev.target);
  $(ev.target).fadeToggle();
});

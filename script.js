$(function(){
  var p=location.pathname.split('/').pop().replace('.html','')||'index';
  $('nav a[data-p="'+p+'"]').addClass('active');
  var words=['Python apps','CLI tools','C++ logic','backend skills'],w=0,c=0,del=false,$t=$('#typed');
  if($t.length&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    (function tick(){var s=words[w];c+=del?-1:1;$t.text(s.slice(0,c));
      if(!del&&c===s.length){del=true;return setTimeout(tick,1200)}
      if(del&&c===0){del=false;w=(w+1)%words.length}
      setTimeout(tick,del?50:90)})();
  } else $t.text(words[0]);
  setTimeout(function(){$('.bar span').each(function(){$(this).css('width',$(this).data('w')+'%')})},200);
  $('#expand').on('click',function(){var o=$('.proj').first().hasClass('open');$('.proj').toggleClass('open',!o);$(this).text(o?'Expand all':'Collapse all')});
  $('#cf').on('submit',function(ev){ev.preventDefault();
    var n=$.trim($('#n').val()),e=$.trim($('#e').val()),m=$.trim($('#m').val());
    if(!n||!e||!m){$('#out').addClass('err').text('Fill in all fields.');return}
    $('#out').removeClass('err').addClass('msg').text('Thanks, '+n+'. Opening your email app...');
    location.href='mailto:riteshreddy1623@gmail.com?subject='+encodeURIComponent('Message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+e);
  });
});

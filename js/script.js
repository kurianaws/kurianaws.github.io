var app = new Vue({
  el: "#app",
  mounted: function(){
     setTimeout(()=>{ this.showimg = true; this.showvid=false}, 35000);
  },
  data: {
    sections:{ 
	'home': {'name':'home',
	    'url':'#intro',
	    'show':'true'},
	'about': {'name':'about',
	    'url':'#about',
	    'show':'true'},
	'events': {'name':'events',
	    'url':'#events',
	    'show':'true'},
	'schedule': {'name':'schedule',
	    'url':'#schedule',
	    'show':'false'},
	'gallery': {'name':'gallery',
	    'url':'#gallery',
	    'show':'false'},
	'supporters': {'name':'supporters',
	    'url':'#supporters',
	    'show':'false'},
	'contact': {'name':'contact',
	    'url':'#contact',
	    'show':'false'}
    },
    events:[
	{'name':'Liner','pic':'img/eventpics/liner.png','url':'liner.html','title':'Liner','tagline':'"Robots will light up the track"'},
	{'name':'Qriosity','pic':'img/eventpics/quriosity.png','url':'quiz.html','title':'Qriosity','tagline':'"Prove your knowledge"'},
	{'name':'Be The Stark','pic':'img/eventpics/bethestark.png','url':'bethestark.html','title':'Be The Stark','tagline':'"Show you are worthy"'},
	{'name':'Pitch Perfect','pic':'img/eventpics/pitch.png','url':'pitch.html','title':'Pitch Perfect','tagline':'"Sell your idea "'},
	{'name':'Resist The Flow','pic':'img/eventpics/resisttheflow.png','url':'resist.html','title':'Resist The Flow','tagline':'"Block it like ohm"'},
	{'name':'Electricuit','pic':'img/eventpics/electricuit.png','url':'electricuit.html','title':'Electricuit','tagline':'"Bug the bugs"'}
    ],
    showimg:false,
    showvid:true,
  },
   filters: {
    capitalize: function(value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}});
$(document).ready(
    function(){
	$('#overlay').fadeOut();
    }
)

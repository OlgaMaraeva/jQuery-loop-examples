/* First loop */
var time;

var $loops = $('li'), counter = 1;

 if(typeof time != 'undefined'){
        clearInterval(time);
    }

time=setInterval(function(){
  $loops.removeClass('is-active');
  $loops.eq(counter++ % $loops.length).addClass('is-active');

}, 1000);

/* Second loop */
var $p = $("p");

 var InfiniteRotator =
    {
        init: function()
        {

//count number of items
var numberOfItems = $p.length;
 
//set current item
var currentItem = 0;
          
//loop through the items
var infiniteLoop = setInterval(function(){
$p.eq(currentItem).removeClass('active');
 
if(currentItem == numberOfItems -1){
currentItem = 0;
} else{
currentItem++;
}
                $p.eq(currentItem).addClass('active');
 
            }, 1000);
        }
    };
 
    InfiniteRotator.init();


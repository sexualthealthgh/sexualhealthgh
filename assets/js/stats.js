$(document).ready(function() {
     /*Cervical Cancer*/
    var up = true;
    var value = 778;
    var increment = 1;
    var ceiling = 1556;

    function RunStats1(){
    if (up == true && value <= ceiling){
      value += increment

        if (value == ceiling)
        {up = false;}
        }
        else
        {
        up = false
        value -= increment;

        if (value == 0)
        {up = true;}
        }
        document.getElementById('number1').innerHTML = value ;
    }



    /*Abortions*/
    var Aup = true;
    var Avalue = 1000;
    var Aincrement = 1;
    var Aceiling = 1556;

    function RunStats2(){
    if (Aup == true && Avalue <= ceiling)
    {
      Avalue += Aincrement

      if (Avalue == Aceiling)
      {Aup = false;}
    }
    else
    {
        Aup = false
        Avalue -= Aincrement;

        if (Avalue == 0)
        {Aup = true;}
    }
         document.getElementById('number2').innerHTML = Avalue ;
    }



    /*HIV & STI's*/
    var Sup = true;
    var Svalue = 778;
    var Sincrement = 1;
    var Sceiling = 1556;

    function RunStats3(){
    if (Sup == true && Svalue <= Sceiling)
    {
      Svalue += Sincrement

      if (Svalue == Sceiling)
      {Sup = false;}
    }
    else
    {
        Sup = false
        Svalue -= Sincrement;

        if (Svalue == 0)
        {Sup = true;}
    }

     document.getElementById('number3').innerHTML = Svalue ;
    }

   /* Cervical Cancer call at a rate of 6 min*/
    setInterval(RunStats1, 1000);
    /*Abortions Call at a rate of 12 mins*/
    setInterval(RunStats2, 500);
    /*HIV & SIT Call at a rate of */
    setInterval(RunStats3, 800);

     $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });

   $('div.action,div.stats1,div.stats2,div.stats3,div.cancer').click(function() {
       // /*Hide the stats*/
       // $(this).toggle(1000);

       // /*show the welcome message*/
       $(".welcome").fadeIn(6000);
   }); 
});
function squares(a, b) {

     var lower= Math.ceil(Math.sqrt(a))

     var higher = Math.floor(Math.sqrt(b))



     if(lower>higher)

     return 0



    var count=0;

    for(var i =lower ;i<=higher ;i++){

        if (lower<=i*i<=higher){

            count++

        }

    }

    

    return count;



}
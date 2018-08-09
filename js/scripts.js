$(document).ready(function(){
  $("img").attr("style", "height:400px;");
  // $(".dog",".elephant").click(function(){
  //   if(this.".dog" == 'dog'){
  //     $("#dog").show();
  //   }
  //   else if (this.".elephant" == 'elephant'){
  //     $("#elephant").show();
  //   }
  // });
  $(':button').click(function () {
    console.log("IT WORKS!");
    console.log($(this).attr("class"));
    if ($(this).attr("class") == 'dog') {
        $('#dog').show();
    }
    else if ($(this).attr("class") == 'elephant') {
        $('#elephant').show();
    }
});

});

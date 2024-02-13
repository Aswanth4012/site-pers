$(document).ready(function(){
  $("#icon-to-portfolio").click(function(){
    $("#sec-portfolio").slideToggle(1000);
  })
  /*$('.simple').mouseenter(function(){
    $('.half-hover').slideDown(500),
    $('.half-hover').css({display:'flex'})
  }),
  $('.simple').mouseleave(function(){
    $('.half-hover').slideUp(500);
  }),
  $('.simple').touch(function(){
    $('.half-hover').slideDown(500),
    $('.half-hover').css({display:'flex'})
  })*/
}),
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwhW5gmZKLbiCyeVxw6VJKFKAr-9q-8o69Jp13o61HySBe1EReGulCTsoE5r4Bn5tAIbQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

function showDiv(){
  document.getElementById("overlay").style.display = "block"
}

function hideDiv(){
  document.getElementById("overlay").style.display = "none"
}
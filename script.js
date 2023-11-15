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

/*function showDiv(){
  document.getElementById("overlay").style.display = "block"
}

function hideDiv(){
  document.getElementById("overlay").style.display = "none"
}*/
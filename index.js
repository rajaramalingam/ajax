$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "index.txt", 
        	success: function(result){
            $("#msge").html(result);
        }});
    });
});



function loadDoc() {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();

    } else {
    xhttp = new ActiveXObject("");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "index1.txt", true);
  xhttp.send();
}




$(document).ready(function () {
  $("button").click(function(){
  	 $.ajax({url:"index2.txt",
  	 	dataType:"json",
  	 	success:function(result){
  	 		console.log(result);
  	 		$("#name").html(result.Name);
  	 		$("#age").html(result.Age);
  	 		$("#city").html(result.City);
  	 		$("#state").html(result.State);
  	 		$("#country").html(result.Country);

  	 	}});
  });
});
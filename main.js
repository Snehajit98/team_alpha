$(function(){
  
   
   $("#button-a").click(function(){
   alert("wroking")
      var data_file = "./test_x.json";
      var http_request = new XMLHttpRequest();
      try{
         // Opera 8.0+, Firefox, Chrome, Safari
         http_request = new XMLHttpRequest();
      }catch (e) {
         // Internet Explorer Browsers
         try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
         
         }catch (e) {
      
            try{
               http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e) {
               // Something went wrong
               alert("Your browser broke!");
               return false;
            }
         
         }
      }
   
      http_request.onreadystatechange = function() {
   
         if (http_request.readyState == 4  ) {
            // Javascript function JSON.parse to parse JSON data AND JSON.stringify() converts any javascript object to json string
            var jsonObj = JSON.parse(http_request.responseText);
            document.getElementById("Name").innerHTML=jsonObj.name;
            document.getElementById("Country").innerHTML = jsonObj.country;
         }
      }
   
      http_request.open("GET", data_file, true);
      
      http_request.send();
      
  })

  $("#button-b").click(function(){
   alert("wroking")
      var data_file = "./test_x.json";
      var http_request = new XMLHttpRequest();
      try{
         // Opera 8.0+, Firefox, Chrome, Safari
         http_request = new XMLHttpRequest();
      }catch (e) {
         // Internet Explorer Browsers
         try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
         
         }catch (e) {
      
            try{
               http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e) {
               // Something went wrong
               alert("Your browser broke!");
               return false;
            }
         
         }
      }
   
      http_request.onreadystatechange = function() {
   
         if (http_request.readyState == 4  ) {
            // Javascript function JSON.parse to parse JSON data AND JSON.stringify() converts any javascript object to json string
            var jsonObj = {"name":"name","country":"mal"}
         }
      }
 
    
      http_request.open("POST", data_file, true);
      http_request.setRequestHeader("Content-Type","application/json");
      http_request.setRequestHeader("Access-Control-Allow-Origin","http://127.0.0.1:5500");
      
      http_request.send(JSON.stringify({"name":"name","country":"mal"}));
      
//       fetch("http://127.0.0.1:5500/test_x.json", {
//   method: "POST",
//   headers: [
//     ["Content-Type", "application/json"],
    
//   ],
//   credentials: "include",
//   body: JSON.stringify({"name":"name","country":"mal"})
// });



  })


//   $("#button-b").click(function(){
        
//       var name = "baal"
//       var email ="bichi"
      

//       alert("wroking")
//       var data_file = "./test_x.json";
//       var http_request = new XMLHttpRequest();
//       try{
//          // Opera 8.0+, Firefox, Chrome, Safari
//          http_request = new XMLHttpRequest();
//       }catch (e) {
//          // Internet Explorer Browsers
//          try{
//             http_request = new ActiveXObject("Msxml2.XMLHTTP");
         
//          }catch (e) {
      
//             try{
//                http_request = new ActiveXObject("Microsoft.XMLHTTP");
//             }catch (e) {
//                // Something went wrong
//                alert("Your browser broke!");
//                return false;
//             }
         
//          }
//       }
   
//       http_request.onreadystatechange = function() {
   
//          if (http_request.readyState == 4  ) {

//          json = {"name" : name, "email" : email }
//       }
   
//       http_request.open("POST", data_file, true);
      
//       http_request.send(JSON.stringify(json));

//       // const xhr = new XMLHttpRequest();
//       // // create a JSON object
//       // const json = {
//       //     name: name,
//       //     coutry: email,
//       // };
//       // // open request
//       // xhr.open("POST", "http://127.0.0.1:5500/test_x.json", true);
//       // xhr.withCredentials = false
//       // xhr.credentials = false
//       // // set `Content-Type` header
//       // xhr.setRequestHeader("Content-Type",
//       //                      "application/json");
//       // // send request with JSON payload
//       // xhr.send(JSON.stringify(json));

// }}
// )




})
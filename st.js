(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
$(function(){
  
   
   $("#button-a").click(function(){
   alert("wroking")
    
  
   
    const fs = require('fs');
  
    
      fs.readFileSync('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        
      });
  

   })


   function loadJSON() {
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
      
  }

  function sendJSON() {
        
      var name = "baal"
      var email ="bichi"
      

      const xhr = new XMLHttpRequest();
      // create a JSON object
      const json = {
          name: name,
          coutry: email,
      };
      // open request
      xhr.open("POST", "./test_x.json", true);
      // set `Content-Type` header
      xhr.setRequestHeader("Content-Type",
                           "application/json");
      // send request with JSON payload
      xhr.send(JSON.stringify(json));

}

})
   
},{"fs":1}]},{},[2]);


// function fetchJSONFile(path, callback) {
//    var httpRequest = new XMLHttpRequest();
//    httpRequest.onreadystatechange = function() {
//        if (httpRequest.readyState === 4) {
//            if (httpRequest.status === 200) {
//                var data = JSON.parse(httpRequest.responseText);
//                if (callback) callback(data);
//            }
//        }
//    };
//    httpRequest.open('GET', path);
//    httpRequest.send(); 
// }

// // this requests the file and executes a callback with the parsed result once
// //   it is available
// fetchJSONFile('pathToFile.json', function(data){
//    // do something with your data
//    console.log(data);
// });

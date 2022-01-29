// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {  

document.getElementById("email").addEventListener("click", function() {

  document.getElementById('demo').innerHTML = "Please wait. Email is check is in progress.";
  
  var search = document.getElementById('inputzone').value;

  if (search == ""){
    document.getElementById('demo').innerHTML = "Please enter valid email adress!";
  }
  else {
    var ret_value = request_email(search);

    document.getElementById('demo').innerHTML = ret_value;
  }

  //var ret_value = request_email(search);

  //document.getElementById('demo').innerHTML = ret_value;
  });


});



function request_email(search)
{
  //var theUrl = "https://myrz.org/api/email_search.php?key=619ef10e927e9faa84ff2a56ff605c69&email="+search; // ilk key
  //var theUrl = "https://myrz.org/api/email_search.php?key=63029c32fdea59e488377e56a613935e&email="+search; // 930
  var theUrl = "https://myrz.org/api/email_search.php?key=02b07837192535cc52448c08a7c10cd1&email="+search; // 998
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

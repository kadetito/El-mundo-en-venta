function mailTo() {

  var email = "hello@tvornicabannera.com";
  
  if (!document.getElementById("mailTo")) return false;
  
  var spanobj = document.getElementById("mailTo");
  var anch = document.createElement("a");
  var mailto = "mailto:" + email;
  anch.setAttribute("href",mailto);
  spanobj.appendChild(anch);
  var txt = document.createTextNode(email);
  anch.appendChild(txt);
}

window.onload = mailTo;
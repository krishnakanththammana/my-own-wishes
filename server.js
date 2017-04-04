var express = require('express');
var app = express();
app.use(express.static('public'))

app.get('/ping', function(req, res) {
  res.send('pong');
})

app.get('/ping', function(req, res) {
  res.send('pong');
})

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

app.get('/wish/:username', function(req, res) {
  // var occasion = req.params.occasion;
  var name = req.params.username;
  name = name.capitalizeFirstLetter() // String;
  var htmlText = 
    '<html>'+
      '<head>'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<link href="https://fonts.googleapis.com/css?family=Macondo" rel="stylesheet">'+
        '<title> Wishes from '+ name +'</title>'+
        '<style>'+
          '* {box-sizing: border-box;margin: 0; padding: 0;font-family: "Macondo", cursive;}'+
          'html, body {height: 100%; width: 100%;}'+
          'button {background: transparent; color: white; border: 1px solid white; padding: 0px 20px;margin-left: 20px;}'+
          '.custom-wishes {text-align: center; color: white;}'+
          '.main {color: white;font-size: 2em;text-align: center;width: 90%; margin: 0 auto;}'+
          'body {padding: 20px;display: -webkit-box; display: -ms-flexbox;display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -ms-flex-align: center; align-items: center; background-color: rgba(0,0,0,0.4);}'+
          'html {min-height: 650px; height: 100%;background-image:url("https://media.giphy.com/media/IjmMzurYulKEw/giphy.gif");background-size: cover;background-repeat: no-repeat;}'+
        '</style>'+
      '</head>'+
      '<body>'+
        '<div class="main">'+
        'Happy Ram Navami' + '</br></br> ~' + decodeURIComponent(name) +
        '</div>'+
        '<div class="custom-wishes">'+
          'Make your own wish..!!! <br />'+
          'Enter your name below and press Go and then share the URL!! <br />'+
          '<input type="text" id="custom-name" placeholder="your name" /><button onclick="custom()">Go</button>'+
        '</div>'+
      '</body>'+
      '<script>'+
        'function custom() {'+
          'var name = document.getElementById(\'custom-name\').value; '+
          'name  = encodeURIComponent(name); '+
          'if(name != "")'+
          'window.location.href="/wish/"+ name; '+
          'else alert("Enter a valid name !!");'+
        '}'+
      '</script>'+
    '</html>'


  //name+' is <span style="font-weight\:bold;">wishing<\/span> you a happy '+occasion;
  res.send(htmlText);
});

var port=Number(process.env.PORT || 5000);
app.listen(port);
console.log('wishes app running on port: '+port);

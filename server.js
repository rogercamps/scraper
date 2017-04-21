var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();


app.get('/scrape', function(req, res){

  url = 'https://www.instagram.com/catalunyaexperience/'

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var picture;
      var json = {picture:""};

      $('._nljxa').filter(function(){
        var data = $(this);

        picture = data

        json.pitcure = picture;
      })

    }
  })
})

app.listen('8081')
console.log('Show me something');
exports = module.exports = app;

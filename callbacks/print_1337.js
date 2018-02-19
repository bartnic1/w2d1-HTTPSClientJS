var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  /* Write your code here! */
  var tempString = html.toString().split("");
  for(var i = 0; i < tempString.length; i++){
    if(tempString[i] === 'a'){
      tempString[i] = '4';
    }
    else if(tempString[i] === 'e'){
      if(tempString[i + 1] === 'r'){
        tempString[i] = '0';
      }
      else{
        tempString[i] = '3';
      }
    }
    else if(tempString[i] === 'l'){
      tempString[i] = '1';
    }
    else if(tempString[i] === 'o'){
      tempString[i] = '0';
      if(tempString[i + 1] === 'u' && tempString[i - 1] === 'y'){
        tempString[i - 1] = 'j';
        tempString[i + 1] = '0';
      }
    }
    else if(tempString[i] === 's'){
      tempString[i] = '5';
    }
    else if (tempString[i] === 't'){
      tempString[i] = '7';
    }
    else if (tempString[i] === 'c' && tempString[i + 1] === 'k'){
      var newString = tempString.slice(0, i);
      newString.push('x');
      tempString = newString.concat(tempString.slice(i + 2));
    }
  }
  tempString = tempString.join("");
  console.log(tempString);
}

getHTML(requestOptions, print1337);
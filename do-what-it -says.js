const request = require('request');

const sayDo = require('sayDo');

const fs = require('fs');

function sayDoThis() {
    
        let fs = require('fs');
        fs.readFile("random.txt", "utf8", function(error, data) {
                data = data.split(',');
    
            let command;
            // let parameter;
    
            if (data.length == 2) {
                command = data[0];
                parameter = data[1];
            
            }

            // parameter = parameter.replace('"', '');
            // parameter = parameter.replace('"', '');
    
            switch (command) {
                case 'my-tweets':
                    value = parameter;
                    twitter();
                    break;
    
                case 'spotify-this-song':
                    value = parameter;
                    spotify();
                    break;
    
                case 'movie-this':
                    value = parameter;
                    imdb();
                    break;
            }
    
        });
    }
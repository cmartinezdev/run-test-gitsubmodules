const {printBlueText} = require('core-test-gitsubmodules');

const {prompt} = require('node-ask');

prompt('Introduce some text: ').then(
    function(text) {
        console.log("Here is your text in blue!");
        printBlueText(text);
    }
);
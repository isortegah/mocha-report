/**
 * Created by ISORTEGAH on 23/03/2017.
 */
"use strict";

var mocha = require('mocha');
var Promise = require('bluebird');
//var request = require('request');
var request = require('sync-request');


  
  

function report (runner){
    mocha.reporters.Base.call(this, runner);
    //var reqSlack = Promise.promisify(requestSlack);
    var passes = 0;
    var failures = 0;

  //reqSlack().then(x => console.log(x))
  //requestSlack();
  //otroSlack();





  runner.on('test end', (test)=> {
    //console.log(test);
    request('POST','https://hooks.slack.com/services/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', {
  json: {"channel":"#canalqa","username":"@iortega","text":"[INFO] Pruebas reporter"}
  });
  });
    runner.on('pass', function(test){
    passes++;
    
    console.log('pass : %s', test.fullTitle());
  });

  runner.on('fail', function(test, err){
    failures++;
    console.log('fail: %s -- error: %s', test.fullTitle(), err.message);
  });

  runner.on('end', function(){
    console.log('end: %d/%d', passes, passes + failures);
    process.exit(failures);
  });


}
 
module.exports = report;
  

/*function requestSlack(callback){
      console.log("dentro de Bluebird");
        
      request.post({
        url: 'https://hooks.slack.com/services/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',
        body: JSON.stringify({"channel":"#canalqa","username":"@iortega","text":"[INFO] Pruebas reporter"})
      }, function(err, res){
        console.log("termino");
        return callback(null, true);  
      })
      
} */
/*
function requestSlack(){
    console.log("dentro de Bluebird");
    request.post('https://hooks.slack.com/services/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', {
  json: true,
  body: {"channel":"#canalqa","username":"@iortega","text":"[INFO] Pruebas reporter rafa"}
}, function(err, res){
  console.log("termino");
  // return callback(null, true);
})*/
    //while (f) { console.log('while'); }
//}


function otroSlack(){
  var Slack = require('slack-node');

var webhookUri = 'https://hooks.slack.com/services/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';

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: "#canalqa",
  username: "webhookbot",
  text: "This is posted to #general and comes from a bot named webhookbot."
}, function(err, response) {
  console.log(response);
});
}


/*var bunyan  = require("bunyan"),
      BunyanSlack = require('bunyan-slack'),
      logger;


    logger = bunyan.createLogger({
    name : "APP NAME",
    streams : [{
      stream : new BunyanSlack({
        webhook_url : 'https://hooks.slack.com/services/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',
        channel : '#canalqa',
        username : '@iortega'
      })
    }]
  });
logger.info('Prueba')*/
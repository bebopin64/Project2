// Twilio Credentials 
var accountSid = 'ACbc150d0b91872130f8e7e2b5be0a1735';
var authToken = '2e1929226cc404290710f7211064f993';

var inspect = require('util').inspect

var client = require('twilio')(accountSid, authToken);
//[JF] The Returned object is a Rest Client and explicit call for Restclient fails...Also new is not accepted

console.log(inspect(client))


function text(phNumber, body) {
	client.messages.create({
	    body: body,
	    to: phNumber,  // Text this number
	    from: '+15122702551' // From a valid Twilio number
	}, function(err, message) {
		if (err) {
			console.error(err.message);
		}
	});
}


text("+15126730687", "sup fuckface");
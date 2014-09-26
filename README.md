SFDC Message Factory
This creates an object for use in any normal Salesforce page and a typical custom Visualforce page that allows you to easily set an error or information message, as well as clearing these messages.

Usage:
Initialization
var msg = sfdcMsg.createMessageFactory();

Set Error Message:
msg.setErrorMessage('Error Message');

Set Info Message:
msg.setInfoMessage('Info Message');

Clear Error Message:
msg.clearErrorMessage();

Clear Info Message:
msg.clearInfoMessage();

Clear All Messages:
msg.clearMessages();


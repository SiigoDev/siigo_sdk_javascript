# SiigoApi.MailViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Represents the status of sending a document by email, this state could be:  not_sent: The invoice has not been sent by mail.  sent: The invoice was sent to your customer successfully.  read: The invoice was sent to your customer successfully and he has already read it.  failed_delivery: The delivery of the invoice failed, try to email it again.  commented: The customer commented on the invoice sent by email.   process_of_sending: In the process of sending by email.  pending_send: Pending the validation of the document by DIAN. | [optional] 
**observations** | **String** | Represents observations associated with sending a document by email. | [optional] 



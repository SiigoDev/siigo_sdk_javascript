# SiigoApi.MailViewModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Represents the status of sending a document by email, this state could be:  \&quot;not_sent\&quot;: The invoice has not been sent by mail.  \&quot;sent\&quot;: The invoice was sent to your customer successfully.  \&quot;read\&quot;: The invoice was sent to your customer successfully and he has already read it.  \&quot;failed_delivery\&quot;: The delivery of the invoice failed, try to email it again.  \&quot;commented\&quot;: The customer commented on the invoice sent by email.   \&quot;process_of_sending\&quot;: In the process of sending by email.  \&quot;pending_send\&quot;: Pending the validation of the document by DIAN. | [optional] 
**observations** | **String** | Represents observations associated with sending a document by email. | [optional] 



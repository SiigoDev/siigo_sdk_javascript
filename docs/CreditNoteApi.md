# SiigoApi.CreditNoteApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCreditNote**](CreditNoteApi.md#createCreditNote) | **POST** /v1/credit-notes | Creates a credit note.
[**getCreditNote**](CreditNoteApi.md#getCreditNote) | **GET** /v1/credit-notes/{id} | Gets the credit note by GUID.
[**getCreditNotePDF**](CreditNoteApi.md#getCreditNotePDF) | **GET** /v1/credit-notes/{id}/pdf | Gets the credit note PDF by GUID.
[**getCreditNotes**](CreditNoteApi.md#getCreditNotes) | **GET** /v1/credit-notes | Returns a paginated list of credit notes.




## createCreditNote

> CreditNotesViewModel createCreditNote(opts)

Creates a credit note.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CreditNoteApi();

let opts = {
  'createCreditNoteCommand': new SiigoApi.CreateCreditNoteCommand() // CreateCreditNoteCommand | Represents the request with the credit note information.
};

apiInstance.createCreditNote(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.CreditNoteApi();
    let opts = {
    'createCreditNoteCommand': new SiigoApi.CreateCreditNoteCommand() // CreateCreditNoteCommand | Represents the request with the credit note information.
    };

    const data = await apiInstance.createCreditNote(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCreditNoteCommand** | [**CreateCreditNoteCommand**](CreateCreditNoteCommand.md)| Represents the request with the credit note information. | [optional] 

### Return type

[**CreditNotesViewModel**](CreditNotesViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## getCreditNote

> CreditNoteViewModel getCreditNote(id)

Gets the credit note by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CreditNoteApi();

let id = "id_example"; // String | Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getCreditNote(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.CreditNoteApi();
    let id = "id_example"; // String | Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getCreditNote(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of credit note, this value must be a &#39;Guid&#39;  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**CreditNoteViewModel**](CreditNoteViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getCreditNotePDF

> CreditNotePdfViewModel getCreditNotePDF(id)

Gets the credit note PDF by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CreditNoteApi();

let id = "id_example"; // String | Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getCreditNotePDF(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.CreditNoteApi();
    let id = "id_example"; // String | Represents the unique Id of credit note, this value must be a 'Guid'  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getCreditNotePDF(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of credit note, this value must be a &#39;Guid&#39;  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**CreditNotePdfViewModel**](CreditNotePdfViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getCreditNotes

> CreditNotesViewModel getCreditNotes(opts)

Returns a paginated list of credit notes.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CreditNoteApi();

let opts = {
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.getCreditNotes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```
#### - calls with async await

```javascript
import * as SiigoApi from 'siigo_api';

async function main(){
  try {
    let apiInstance = new SiigoApi.CreditNoteApi();
    let opts = {
    'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
    'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
    'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
    'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
    'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
    'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
    'page': 1, // Number | Represents the current page
    'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.getCreditNotes(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**CreditNotesViewModel**](CreditNotesViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


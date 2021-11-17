# SiigoApi.JournalEntryApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJournal**](JournalEntryApi.md#createJournal) | **POST** /v1/journals | Creates JournalEntry.
[**getJournal**](JournalEntryApi.md#getJournal) | **GET** /v1/journals/{id} | Gets a Journal by GUID.
[**getJournals**](JournalEntryApi.md#getJournals) | **GET** /v1/journals | Gets a list of Journals Entry with pagination.




## createJournal

> JournalEntryViewModel createJournal(opts)

Creates JournalEntry.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.JournalEntryApi();

let opts = {
  'createJournalEntryCommand': new SiigoApi.CreateJournalEntryCommand() // CreateJournalEntryCommand | Represents the request with the journal entry information.
};

apiInstance.createJournal(opts).then((data) => {
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
    let apiInstance = new SiigoApi.JournalEntryApi();
    let opts = {
    'createJournalEntryCommand': new SiigoApi.CreateJournalEntryCommand() // CreateJournalEntryCommand | Represents the request with the journal entry information.
    };

    const data = await apiInstance.createJournal(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createJournalEntryCommand** | [**CreateJournalEntryCommand**](CreateJournalEntryCommand.md)| Represents the request with the journal entry information. | [optional] 

### Return type

[**JournalEntryViewModel**](JournalEntryViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## getJournal

> JournalEntryViewModel getJournal(id)

Gets a Journal by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.JournalEntryApi();

let id = null; // String | Represent the Journal id by GUID.

apiInstance.getJournal(id).then((data) => {
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
    let apiInstance = new SiigoApi.JournalEntryApi();
    let id = null; // String | Represent the Journal id by GUID.

    const data = await apiInstance.getJournal(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Represent the Journal id by GUID. | 

### Return type

[**JournalEntryViewModel**](JournalEntryViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getJournals

> JournalsEntryViewModel getJournals(opts)

Gets a list of Journals Entry with pagination.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.JournalEntryApi();

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

apiInstance.getJournals(opts).then((data) => {
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
    let apiInstance = new SiigoApi.JournalEntryApi();
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

    const data = await apiInstance.getJournals(opts);
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

[**JournalsEntryViewModel**](JournalsEntryViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


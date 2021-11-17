# SiigoApi.CustomerApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomer**](CustomerApi.md#createCustomer) | **POST** /v1/customers | Creates a Customer.
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /v1/customers/{id} | Deletes a Customer by GUID.
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /v1/customers/{id} | Gets a Customer by GUID.
[**getCustomers**](CustomerApi.md#getCustomers) | **GET** /v1/customers | Gets a list of Customers.
[**updateCustomer**](CustomerApi.md#updateCustomer) | **PUT** /v1/customers/{id} | Updates a Customer by GUID.




## createCustomer

> CustomerViewModel createCustomer(opts)

Creates a Customer.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CustomerApi();

let opts = {
  'createCustomerCommand': new SiigoApi.CreateCustomerCommand() // CreateCustomerCommand | Represents the request with the customer information.
};

apiInstance.createCustomer(opts).then((data) => {
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
    let apiInstance = new SiigoApi.CustomerApi();
    let opts = {
    'createCustomerCommand': new SiigoApi.CreateCustomerCommand() // CreateCustomerCommand | Represents the request with the customer information.
    };

    const data = await apiInstance.createCustomer(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCustomerCommand** | [**CreateCustomerCommand**](CreateCustomerCommand.md)| Represents the request with the customer information. | [optional] 

### Return type

[**CustomerViewModel**](CustomerViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## deleteCustomer

> CustomerDeleteViewModel deleteCustomer(id)

Deletes a Customer by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CustomerApi();

let id = null; // String | Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.deleteCustomer(id).then((data) => {
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
    let apiInstance = new SiigoApi.CustomerApi();
    let id = null; // String | Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.deleteCustomer(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**CustomerDeleteViewModel**](CustomerDeleteViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getCustomer

> CustomerViewModel getCustomer(id)

Gets a Customer by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CustomerApi();

let id = null; // String | Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getCustomer(id).then((data) => {
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
    let apiInstance = new SiigoApi.CustomerApi();
    let id = null; // String | Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getCustomer(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**CustomerViewModel**](CustomerViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getCustomers

> CustomersViewModel getCustomers(opts)

Gets a list of Customers.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CustomerApi();

let opts = {
  'identification': 13832081, // String | Represents the identification number of customer.  For example, the identifitication number '13832081'.
  'branchOffice': 0, // Number | Represents the branch office of customer, this value by default will be 0.
  'active': true, // String | Represents the state of customer.  This value can be 'true' or 'false', by default will be true.
  'type': Customer, // String | Represents the customer type (this type can be 'Customer', 'Supplier 'and 'Other'),  this field will be 'Customer' by default.
  'personType': 'Person', // String | Represents the person type, this type can be a 'Person' or 'Company'.
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.getCustomers(opts).then((data) => {
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
    let apiInstance = new SiigoApi.CustomerApi();
    let opts = {
    'identification': 13832081, // String | Represents the identification number of customer.  For example, the identifitication number '13832081'.
    'branchOffice': 0, // Number | Represents the branch office of customer, this value by default will be 0.
    'active': true, // String | Represents the state of customer.  This value can be 'true' or 'false', by default will be true.
    'type': Customer, // String | Represents the customer type (this type can be 'Customer', 'Supplier 'and 'Other'),  this field will be 'Customer' by default.
    'personType': 'Person', // String | Represents the person type, this type can be a 'Person' or 'Company'.
    'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
    'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
    'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
    'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
    'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
    'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
    'page': 1, // Number | Represents the current page
    'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.getCustomers(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identification** | **String**| Represents the identification number of customer.  For example, the identifitication number &#39;13832081&#39;. | [optional] 
 **branchOffice** | **Number**| Represents the branch office of customer, this value by default will be 0. | [optional] 
 **active** | **String**| Represents the state of customer.  This value can be &#39;true&#39; or &#39;false&#39;, by default will be true. | [optional] 
 **type** | **String**| Represents the customer type (this type can be &#39;Customer&#39;, &#39;Supplier &#39;and &#39;Other&#39;),  this field will be &#39;Customer&#39; by default. | [optional] 
 **personType** | **String**| Represents the person type, this type can be a &#39;Person&#39; or &#39;Company&#39;. | [optional] 
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**CustomersViewModel**](CustomersViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## updateCustomer

> CustomerViewModel updateCustomer(id, opts)

Updates a Customer by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.CustomerApi();

let id = null; // String | Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
let opts = {
  'createCustomerCommand': new SiigoApi.CreateCustomerCommand() // CreateCustomerCommand | Represents the request with the customer information.
};

apiInstance.updateCustomer(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.CustomerApi();
    let id = null; // String | Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
    let opts = {
    'createCustomerCommand': new SiigoApi.CreateCustomerCommand() // CreateCustomerCommand | Represents the request with the customer information.
    };

    const data = await apiInstance.updateCustomer(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)| Represents the unique Id of customer, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 
 **createCustomerCommand** | [**CreateCustomerCommand**](CreateCustomerCommand.md)| Represents the request with the customer information. | [optional] 

### Return type

[**CustomerViewModel**](CustomerViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


# SiigoApi.VoucherApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoucher**](VoucherApi.md#createVoucher) | **POST** /v1/vouchers | Creates a voucher.
[**getVoucher**](VoucherApi.md#getVoucher) | **GET** /v1/vouchers/{id} | Gets the voucher by GUID.
[**getVouchers**](VoucherApi.md#getVouchers) | **GET** /v1/vouchers | Returns a paginated list of vouchers.
[**sendElectronicVoucher**](VoucherApi.md#sendElectronicVoucher) | **POST** /v1/vouchers/{id}/stamp | Send electronic voucher by GUID.
[**sendVoucherByEmail**](VoucherApi.md#sendVoucherByEmail) | **POST** /v1/vouchers/{id}/mail | Send an invoice by email




## createVoucher

> VoucherViewModel createVoucher(opts)

Creates a voucher.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.VoucherApi();

let opts = new SiigoApi.CreateVoucherCommand(); // CreateVoucherCommand | Represents the request with the voucher information.

apiInstance.createVoucher(opts).then((data) => {
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
    let apiInstance = new SiigoApi.VoucherApi();
    let opts = new SiigoApi.CreateVoucherCommand(); // CreateVoucherCommand | Represents the request with the voucher information.

    const data = await apiInstance.createVoucher(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVoucherCommand** | [**CreateVoucherCommand**](CreateVoucherCommand.md)| Represents the request with the voucher information. | [optional] 

### Return type

[**VoucherViewModel**](VoucherViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## getVoucher

> VoucherViewModel getVoucher(id)

Gets the voucher by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.VoucherApi();

let id = "id_example"; // String | Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

apiInstance.getVoucher(id).then((data) => {
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
    let apiInstance = new SiigoApi.VoucherApi();
    let id = "id_example"; // String | Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.

    const data = await apiInstance.getVoucher(id);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of vocher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 

### Return type

[**VoucherViewModel**](VoucherViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getVouchers

> VoucherViewModelGetAllModel getVouchers(opts)

Returns a paginated list of vouchers.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.VoucherApi();

let opts = {
  'name': RC-01-45, // String | Represents the name of voucher.  For example, the name of a voucher can be like 'RC-01-45'.
  'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
  'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
  'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
  'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
  'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
  'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
  'page': 1, // Number | Represents the current page
  'pageSize': 25 // Number | Represents the number of results per page.
};

apiInstance.getVouchers(opts).then((data) => {
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
    let apiInstance = new SiigoApi.VoucherApi();
    let opts = {
      'name': RC-01-45, // String | Represents the name of voucher.  For example, the name of a voucher can be like 'RC-01-45'.
      'createdStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is greater or equal than the entered date
      'createdEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"created\" field is less or equal than the entered date
      'dateStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date greater or equal than the \"date_start\" date
      'dateEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results with date less or equal than the \"date_end\" date
      'updatedStart': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is greater or equal than the entered date
      'updatedEnd': new Date("2013-10-20T19:20:30+01:00"), // Date | Returns results where the \"last_updated\" field is less or equal than the entered date
      'page': 1, // Number | Represents the current page
      'pageSize': 25 // Number | Represents the number of results per page.
    };

    const data = await apiInstance.getVouchers(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Represents the name of voucher.  For example, the name of a voucher can be like &#39;RC-01-45&#39;. | [optional] 
 **createdStart** | **Date**| Returns results where the \&quot;created\&quot; field is greater or equal than the entered date | [optional] 
 **createdEnd** | **Date**| Returns results where the \&quot;created\&quot; field is less or equal than the entered date | [optional] 
 **dateStart** | **Date**| Returns results with date greater or equal than the \&quot;date_start\&quot; date | [optional] 
 **dateEnd** | **Date**| Returns results with date less or equal than the \&quot;date_end\&quot; date | [optional] 
 **updatedStart** | **Date**| Returns results where the \&quot;last_updated\&quot; field is greater or equal than the entered date | [optional] 
 **updatedEnd** | **Date**| Returns results where the \&quot;last_updated\&quot; field is less or equal than the entered date | [optional] 
 **page** | **Number**| Represents the current page | [optional] 
 **pageSize** | **Number**| Represents the number of results per page. | [optional] 

### Return type

[**VoucherViewModelGetAllModel**](VoucherViewModelGetAllModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## sendElectronicVoucher

> SendElectronicVoucherViewModel sendElectronicVoucher(id, opts)

Send electronic voucher by GUID.

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.VoucherApi();

let id = "id_example"; // String | Represents the unique Id of voucher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
let opts = new SiigoApi.SendElectronicVoucherCommand(); // SendElectronicVoucherCommand | Cotains the email (and copy to emails) to send the electronic invoice.

apiInstance.sendElectronicVoucher(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.VoucherApi();
    let id = "id_example"; // String | Represents the unique Id of voucher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000.
    let opts = new SiigoApi.SendElectronicVoucherCommand(); // SendElectronicVoucherCommand | Cotains the email (and copy to emails) to send the electronic invoice.

    const data = await apiInstance.sendElectronicVoucher(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the unique Id of voucher, this value must be a Guid  with the next format 00000000-0000-0000-0000-000000000000. | 
 **sendElectronicVoucherCommand** | [**SendElectronicVoucherCommand**](SendElectronicVoucherCommand.md)| Cotains the email (and copy to emails) to send the electronic invoice. | [optional] 

### Return type

[**SendElectronicVoucherViewModel**](SendElectronicVoucherViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## sendVoucherByEmail

> MailViewModel sendVoucherByEmail(id, opts)

Send an invoice by email

### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.VoucherApi();

let id = "id_example"; // String | Represents the Guid of the Invoice.
let opts = new SiigoApi.SendVoucherByEmailCommand(); // SendVoucherByEmailCommand | Contains the parameters for sending the Email.

apiInstance.sendVoucherByEmail(id, opts).then((data) => {
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
    let apiInstance = new SiigoApi.VoucherApi();
    let id = "id_example"; // String | Represents the Guid of the Invoice.
    let opts = new SiigoApi.SendVoucherByEmailCommand(); // SendVoucherByEmailCommand | Contains the parameters for sending the Email.

    const data = await apiInstance.sendVoucherByEmail(id, opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Represents the Guid of the Invoice. | 
 **sendVoucherByEmailCommand** | [**SendVoucherByEmailCommand**](SendVoucherByEmailCommand.md)| Contains the parameters for sending the Email. | [optional] 

### Return type

[**MailViewModel**](MailViewModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


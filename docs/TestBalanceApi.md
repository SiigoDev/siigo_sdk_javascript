# SiigoApi.TestBalanceApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTestBalance**](TestBalanceApi.md#createTestBalance) | **POST** /v1/test-balance-report | 
[**createTestBalanceByThirdparty**](TestBalanceApi.md#createTestBalanceByThirdparty) | **POST** /v1/test-balance-report-by-thirdparty | 




## createTestBalance

> TestBalanceResultModel createTestBalance(opts)



### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.TestBalanceApi();

let opts = new SiigoApi.CreateTestBalanceCommand(); // CreateTestBalanceCommand | 

apiInstance.createTestBalance(opts).then((data) => {
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
    let apiInstance = new SiigoApi.TestBalanceApi();
    let opts = new SiigoApi.CreateTestBalanceCommand(); // CreateTestBalanceCommand | 

    const data = await apiInstance.createTestBalance(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTestBalanceCommand** | [**CreateTestBalanceCommand**](CreateTestBalanceCommand.md)|  | [optional] 

### Return type

[**TestBalanceResultModel**](TestBalanceResultModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## createTestBalanceByThirdparty

> TestBalanceResultModel createTestBalanceByThirdparty(opts)



### Example

#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.TestBalanceApi();

let opts = new SiigoApi.CreateTestBalanceByThirdpartyCommand(); // CreateTestBalanceByThirdpartyCommand | 

apiInstance.createTestBalanceByThirdparty(opts).then((data) => {
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
    let apiInstance = new SiigoApi.TestBalanceApi();
    let opts = new SiigoApi.CreateTestBalanceByThirdpartyCommand(); // CreateTestBalanceByThirdpartyCommand | 

    const data = await apiInstance.createTestBalanceByThirdparty(opts);
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTestBalanceByThirdpartyCommand** | [**CreateTestBalanceByThirdpartyCommand**](CreateTestBalanceByThirdpartyCommand.md)|  | [optional] 

### Return type

[**TestBalanceResultModel**](TestBalanceResultModel.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


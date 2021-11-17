# siigo_api

SiigoApi - JavaScript client for siigo_api


## Installation

### Using [Node.js](https://nodejs.org/)

```shell
npm install siigo_api --save
```

## Getting Started

### Initialization, add only one time in your project setup

##### With this configuration, the SDK will establish communication with the Siigo APIs, internally it is in charge of obtaining the access token for the calls to the APIs

```javascript
import * as SiigoApi from 'siigo_api';

// initial configuration for the SDK  
SiigoApi.initialize({
  basePath: "The base URL for call APIs", // https://services.siigo.com/alliances/api
  urlSignIn: "The full url sign-in",       // https://services.siigo.com/alliances/api/siigoapi-users/v1/sign-in
  userName: "The user name to sign-in",   // testname
  accessKey: "The access key to sign-in", // euy3423uykwjehqwuywj
});
```

### Example of use




#### - calls with promises

```javascript
import * as SiigoApi from 'siigo_api';

let apiInstance = new SiigoApi.AccountGroupsApi();

apiInstance.getAccountGroups().then((data) => {
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
    let apiInstance = new SiigoApi.AccountGroupsApi();
    const data = await apiInstance.getAccountGroups();
    console.log('API called successfully. Returned data: ' + data);
  } catch (error) {
    console.error(error);
  }
}
```


















## Documentation for API Endpoints


Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SiigoApi.AccountGroupsApi* | [**getAccountGroups**](docs/AccountGroupsApi.md#getAccountGroups) | **GET** /v1/account-groups | Gets a list of AccountGroups.
*SiigoApi.CostCenterApi* | [**getCostCenters**](docs/CostCenterApi.md#getCostCenters) | **GET** /v1/cost-centers | Gets a list of Cost Centers.
*SiigoApi.CreditNoteApi* | [**createCreditNote**](docs/CreditNoteApi.md#createCreditNote) | **POST** /v1/credit-notes | Creates a Credit Note.
*SiigoApi.CreditNoteApi* | [**getCreditNote**](docs/CreditNoteApi.md#getCreditNote) | **GET** /v1/credit-notes/{id} | Gets a CreditNote by GUID.
*SiigoApi.CreditNoteApi* | [**getCreditNotePdf**](docs/CreditNoteApi.md#getCreditNotePdf) | **GET** /v1/credit-notes/{id}/pdf | Gets a Credit Note PDF by GUID.
*SiigoApi.CreditNoteApi* | [**getCreditNotes**](docs/CreditNoteApi.md#getCreditNotes) | **GET** /v1/credit-notes | Gets a list of Credit Notes with pagination.
*SiigoApi.CustomerApi* | [**createCustomer**](docs/CustomerApi.md#createCustomer) | **POST** /v1/customers | Creates a Customer.
*SiigoApi.CustomerApi* | [**deleteCustomer**](docs/CustomerApi.md#deleteCustomer) | **DELETE** /v1/customers/{id} | Deletes a Customer by GUID.
*SiigoApi.CustomerApi* | [**getCustomer**](docs/CustomerApi.md#getCustomer) | **GET** /v1/customers/{id} | Gets a Customer by GUID.
*SiigoApi.CustomerApi* | [**getCustomers**](docs/CustomerApi.md#getCustomers) | **GET** /v1/customers | Gets a list of Customers.
*SiigoApi.CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updateCustomer) | **PUT** /v1/customers/{id} | Updates a Customer by GUID.
*SiigoApi.DocumentTypeApi* | [**getDocumentTypes**](docs/DocumentTypeApi.md#getDocumentTypes) | **GET** /v1/document-types | Gets a list of Document Types.
*SiigoApi.FixedAssetsApi* | [**getAssetGroups**](docs/FixedAssetsApi.md#getAssetGroups) | **GET** /v1/asset-groups | Gets a list of fixed assets.
*SiigoApi.FixedAssetsApi* | [**getFixedAssets**](docs/FixedAssetsApi.md#getFixedAssets) | **GET** /v1/fixed-assets | Gets a list of fixed assets.
*SiigoApi.InvoiceApi* | [**createInvoice**](docs/InvoiceApi.md#createInvoice) | **POST** /v1/invoices | Creates an Invoice.
*SiigoApi.InvoiceApi* | [**getInvoice**](docs/InvoiceApi.md#getInvoice) | **GET** /v1/invoices/{id} | Gets an Invoice by GUID.
*SiigoApi.InvoiceApi* | [**getInvoiceErrors**](docs/InvoiceApi.md#getInvoiceErrors) | **GET** /v1/invoices/{id}/stamp/errors | Get errors for a rejected invoice by GUID.
*SiigoApi.InvoiceApi* | [**getInvoicePDF**](docs/InvoiceApi.md#getInvoicePDF) | **GET** /v1/invoices/{id}/pdf | Gets an Invoice PDF by GUID.
*SiigoApi.InvoiceApi* | [**getInvoices**](docs/InvoiceApi.md#getInvoices) | **GET** /v1/invoices | Gets a list of Invoices with pagination.
*SiigoApi.JournalEntryApi* | [**createJournal**](docs/JournalEntryApi.md#createJournal) | **POST** /v1/journals | Creates JournalEntry.
*SiigoApi.JournalEntryApi* | [**getJournal**](docs/JournalEntryApi.md#getJournal) | **GET** /v1/journals/{id} | Gets a Journal by GUID.
*SiigoApi.JournalEntryApi* | [**getJournals**](docs/JournalEntryApi.md#getJournals) | **GET** /v1/journals | Gets a list of Journals Entry with pagination.
*SiigoApi.PaymentTypesApi* | [**getPaymentTypes**](docs/PaymentTypesApi.md#getPaymentTypes) | **GET** /v1/payment-types | Get a list of Payment Types.
*SiigoApi.PriceListsApi* | [**getPriceList**](docs/PriceListsApi.md#getPriceList) | **GET** /v1/price-lists | Get a list of Price Lists.
*SiigoApi.ProductApi* | [**createProduct**](docs/ProductApi.md#createProduct) | **POST** /v1/products | Creates a produc
*SiigoApi.ProductApi* | [**deleteProduct**](docs/ProductApi.md#deleteProduct) | **DELETE** /v1/products/{id} | Deletes a Product by GUID
*SiigoApi.ProductApi* | [**getProduct**](docs/ProductApi.md#getProduct) | **GET** /v1/products/{id} | Gets a Product by GUID.
*SiigoApi.ProductApi* | [**getProducts**](docs/ProductApi.md#getProducts) | **GET** /v1/products | Gets a list of Products with pagination.
*SiigoApi.ProductApi* | [**updateProduct**](docs/ProductApi.md#updateProduct) | **PUT** /v1/products/{id} | Updates a Product by GUID
*SiigoApi.TaxesApi* | [**getTaxes**](docs/TaxesApi.md#getTaxes) | **GET** /v1/taxes | Gets a list of Taxes.
*SiigoApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /v1/users | Gets a list of Users with pagination.
*SiigoApi.VoucherApi* | [**createVoucher**](docs/VoucherApi.md#createVoucher) | **POST** /v1/vouchers | Creates a Voucher.
*SiigoApi.VoucherApi* | [**getVoucher**](docs/VoucherApi.md#getVoucher) | **GET** /v1/vouchers/{id} | Gets a Voucher by GUID.
*SiigoApi.VoucherApi* | [**getVouchers**](docs/VoucherApi.md#getVouchers) | **GET** /v1/vouchers | Gets a list of Vouchers with pagination.
*SiigoApi.WarehousesApi* | [**getProductWarehouse**](docs/WarehousesApi.md#getProductWarehouse) | **GET** /v1/warehouses | Gets a list of Warehouses.


## Documentation for Models

 - [SiigoApi.Account](docs/Account.md)
 - [SiigoApi.AccountGroup](docs/AccountGroup.md)
 - [SiigoApi.AccountGroupViewModel](docs/AccountGroupViewModel.md)
 - [SiigoApi.AccountModel](docs/AccountModel.md)
 - [SiigoApi.AdditionalFields](docs/AdditionalFields.md)
 - [SiigoApi.AdditionalFieldsCommand](docs/AdditionalFieldsCommand.md)
 - [SiigoApi.AdditionalFieldsModel](docs/AdditionalFieldsModel.md)
 - [SiigoApi.AdditionalFieldsProducts](docs/AdditionalFieldsProducts.md)
 - [SiigoApi.AddressCommand](docs/AddressCommand.md)
 - [SiigoApi.AddressModel](docs/AddressModel.md)
 - [SiigoApi.AssetGroupsViewModel](docs/AssetGroupsViewModel.md)
 - [SiigoApi.CityCommand](docs/CityCommand.md)
 - [SiigoApi.CityModel](docs/CityModel.md)
 - [SiigoApi.ContactCommand](docs/ContactCommand.md)
 - [SiigoApi.ContactModel](docs/ContactModel.md)
 - [SiigoApi.CostCentersViewModel](docs/CostCentersViewModel.md)
 - [SiigoApi.CreateCreditNoteCommand](docs/CreateCreditNoteCommand.md)
 - [SiigoApi.CreateCustomerCommand](docs/CreateCustomerCommand.md)
 - [SiigoApi.CreateInvoiceCommand](docs/CreateInvoiceCommand.md)
 - [SiigoApi.CreateJournalEntryCommand](docs/CreateJournalEntryCommand.md)
 - [SiigoApi.CreateVoucherCommand](docs/CreateVoucherCommand.md)
 - [SiigoApi.CreditNotePdfViewModel](docs/CreditNotePdfViewModel.md)
 - [SiigoApi.CreditNoteViewModel](docs/CreditNoteViewModel.md)
 - [SiigoApi.CreditNotesViewModel](docs/CreditNotesViewModel.md)
 - [SiigoApi.CurrencyCommand](docs/CurrencyCommand.md)
 - [SiigoApi.CurrencyModel](docs/CurrencyModel.md)
 - [SiigoApi.CustomFieldsCommand](docs/CustomFieldsCommand.md)
 - [SiigoApi.CustomFieldsModel](docs/CustomFieldsModel.md)
 - [SiigoApi.Customer](docs/Customer.md)
 - [SiigoApi.CustomerCommand](docs/CustomerCommand.md)
 - [SiigoApi.CustomerDeleteViewModel](docs/CustomerDeleteViewModel.md)
 - [SiigoApi.CustomerViewModel](docs/CustomerViewModel.md)
 - [SiigoApi.CustomerVoucher](docs/CustomerVoucher.md)
 - [SiigoApi.CustomersViewModel](docs/CustomersViewModel.md)
 - [SiigoApi.DeliveryOrderCommand](docs/DeliveryOrderCommand.md)
 - [SiigoApi.DeliveryOrderModel](docs/DeliveryOrderModel.md)
 - [SiigoApi.DianReason](docs/DianReason.md)
 - [SiigoApi.DiscountModel](docs/DiscountModel.md)
 - [SiigoApi.DocumentCommand](docs/DocumentCommand.md)
 - [SiigoApi.DocumentModel](docs/DocumentModel.md)
 - [SiigoApi.DocumentTypeViewModel](docs/DocumentTypeViewModel.md)
 - [SiigoApi.DocumentVoucher](docs/DocumentVoucher.md)
 - [SiigoApi.Due](docs/Due.md)
 - [SiigoApi.EInvoiceErrorViewModel](docs/EInvoiceErrorViewModel.md)
 - [SiigoApi.EInvoiceErrorsViewModel](docs/EInvoiceErrorsViewModel.md)
 - [SiigoApi.FiscalResponsabilitiesModel](docs/FiscalResponsabilitiesModel.md)
 - [SiigoApi.FiscalResponsibilitiesCommand](docs/FiscalResponsibilitiesCommand.md)
 - [SiigoApi.FixedAssetCommand](docs/FixedAssetCommand.md)
 - [SiigoApi.FixedAssetModel](docs/FixedAssetModel.md)
 - [SiigoApi.FixedAssetsViewModel](docs/FixedAssetsViewModel.md)
 - [SiigoApi.IdTypeModel](docs/IdTypeModel.md)
 - [SiigoApi.InvoiceCustomerModel](docs/InvoiceCustomerModel.md)
 - [SiigoApi.InvoiceModel](docs/InvoiceModel.md)
 - [SiigoApi.InvoicePdfViewModel](docs/InvoicePdfViewModel.md)
 - [SiigoApi.InvoiceViewModel](docs/InvoiceViewModel.md)
 - [SiigoApi.InvoicesViewModel](docs/InvoicesViewModel.md)
 - [SiigoApi.Item](docs/Item.md)
 - [SiigoApi.ItemDue](docs/ItemDue.md)
 - [SiigoApi.ItemDueCommand](docs/ItemDueCommand.md)
 - [SiigoApi.ItemVoucher](docs/ItemVoucher.md)
 - [SiigoApi.ItemsCommand](docs/ItemsCommand.md)
 - [SiigoApi.ItemsModel](docs/ItemsModel.md)
 - [SiigoApi.JournalDue](docs/JournalDue.md)
 - [SiigoApi.JournalEntryAccountModel](docs/JournalEntryAccountModel.md)
 - [SiigoApi.JournalEntryCustomerModel](docs/JournalEntryCustomerModel.md)
 - [SiigoApi.JournalEntryDocumentModel](docs/JournalEntryDocumentModel.md)
 - [SiigoApi.JournalEntryItem](docs/JournalEntryItem.md)
 - [SiigoApi.JournalEntryItemModel](docs/JournalEntryItemModel.md)
 - [SiigoApi.JournalEntryProductCommand](docs/JournalEntryProductCommand.md)
 - [SiigoApi.JournalEntryProductModel](docs/JournalEntryProductModel.md)
 - [SiigoApi.JournalEntryTaxModel](docs/JournalEntryTaxModel.md)
 - [SiigoApi.JournalEntryViewModel](docs/JournalEntryViewModel.md)
 - [SiigoApi.JournalEntryWarehouseModel](docs/JournalEntryWarehouseModel.md)
 - [SiigoApi.JournalsEntryViewModel](docs/JournalsEntryViewModel.md)
 - [SiigoApi.Link](docs/Link.md)
 - [SiigoApi.LinksPagination](docs/LinksPagination.md)
 - [SiigoApi.LiteCustomerCommand](docs/LiteCustomerCommand.md)
 - [SiigoApi.MailCommand](docs/MailCommand.md)
 - [SiigoApi.MailViewModel](docs/MailViewModel.md)
 - [SiigoApi.Metadata](docs/Metadata.md)
 - [SiigoApi.MetadataModel](docs/MetadataModel.md)
 - [SiigoApi.PageListModel](docs/PageListModel.md)
 - [SiigoApi.Payment](docs/Payment.md)
 - [SiigoApi.PaymentTypesViewModel](docs/PaymentTypesViewModel.md)
 - [SiigoApi.PaymentsCommand](docs/PaymentsCommand.md)
 - [SiigoApi.PaymentsModel](docs/PaymentsModel.md)
 - [SiigoApi.PhoneCommand](docs/PhoneCommand.md)
 - [SiigoApi.PhoneModel](docs/PhoneModel.md)
 - [SiigoApi.PriceListItemViewModel](docs/PriceListItemViewModel.md)
 - [SiigoApi.PriceListViewModel](docs/PriceListViewModel.md)
 - [SiigoApi.PriceListsViewModel](docs/PriceListsViewModel.md)
 - [SiigoApi.PricesListProducts](docs/PricesListProducts.md)
 - [SiigoApi.PricesProducts](docs/PricesProducts.md)
 - [SiigoApi.ProductCommand](docs/ProductCommand.md)
 - [SiigoApi.ProductDeleteViewModel](docs/ProductDeleteViewModel.md)
 - [SiigoApi.ProductDetail](docs/ProductDetail.md)
 - [SiigoApi.ProductDetailsViewModel](docs/ProductDetailsViewModel.md)
 - [SiigoApi.ProductTaxesCommand](docs/ProductTaxesCommand.md)
 - [SiigoApi.ProductsModel](docs/ProductsModel.md)
 - [SiigoApi.PurchaseOrderCommand](docs/PurchaseOrderCommand.md)
 - [SiigoApi.PursacheOrderModel](docs/PursacheOrderModel.md)
 - [SiigoApi.RelatedUsersCommand](docs/RelatedUsersCommand.md)
 - [SiigoApi.RelatedUsersModel](docs/RelatedUsersModel.md)
 - [SiigoApi.RetentionsCommand](docs/RetentionsCommand.md)
 - [SiigoApi.RetentionsOutModel](docs/RetentionsOutModel.md)
 - [SiigoApi.StampCommand](docs/StampCommand.md)
 - [SiigoApi.StampViewModel](docs/StampViewModel.md)
 - [SiigoApi.Tax](docs/Tax.md)
 - [SiigoApi.TaxViewModel](docs/TaxViewModel.md)
 - [SiigoApi.TaxesCommand](docs/TaxesCommand.md)
 - [SiigoApi.TaxesModel](docs/TaxesModel.md)
 - [SiigoApi.UnitProductsViewModel](docs/UnitProductsViewModel.md)
 - [SiigoApi.UsersModel](docs/UsersModel.md)
 - [SiigoApi.UsersViewModel](docs/UsersViewModel.md)
 - [SiigoApi.VoucherViewModel](docs/VoucherViewModel.md)
 - [SiigoApi.VouchersViewModel](docs/VouchersViewModel.md)
 - [SiigoApi.Warehouse](docs/Warehouse.md)
 - [SiigoApi.WarehouseModel](docs/WarehouseModel.md)
 - [SiigoApi.WarehouseViewModel](docs/WarehouseViewModel.md)


## Documentation for Authorization



### Bearer

- **Type**: Bearer authentication


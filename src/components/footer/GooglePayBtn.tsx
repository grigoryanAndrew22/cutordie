import GooglePayButton from '@google-pay/button-react';

export const GooglePayBtn = () => {
  const price = 1.35;
  return (
    <GooglePayButton
      environment='TEST'
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: 'exampleMerchantId',
          merchantName: 'Demo Merchant',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: price.toString(),
          currencyCode: 'USD',
          countryCode: 'US',
          checkoutOption: 'COMPLETE_IMMEDIATE_PURCHASE',
        },
      }}
      onLoadPaymentData={(paymentRequest: any) => {
        console.log('load payment data', paymentRequest);
      }}
      onPaymentAuthorized={(paymentData: any) => {
        console.log('Payment authorised. Success', paymentData);
        return { transactionState: 'SUCCESS' };
      }}
      onError={(error: any) => console.log('Payment failed.', error)}
    />
  );
};

export default GooglePayBtn;

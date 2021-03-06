export default {
	apiGateway: {
		REGION: 'YOUR_API_GATEWAY_REGION',
		URL: 'YOUR_API_GATEWAY_URL'
	},
	cognito: {
		REGION: 'YOUR_COGNITO_REGION',
		USER_POOL_ID: 'YOUR_COGNITO_USER_POOL_ID',
		APP_CLIENT_ID: 'YOUR_COGNITO_APP_CLIENT_ID',
		DOMAIN: 'YOUR_COGNITO_DOMAIN',
		SCOPE: ['email', 'openid'],
		REDIRECT_SIGN_IN: 'YOUR_URL_FOR_SIGN_IN',
		REDIRECT_SIGN_OUT: 'YOUR_URL_FOR_SIGN_IN',
		RESPONSE_TYPE: 'code'
	}
};

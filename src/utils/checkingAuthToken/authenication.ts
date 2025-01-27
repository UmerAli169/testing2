// // import { fetchAuthSession } from 'aws-amplify/auth';

// export const currentSession = async () => {
//   try {
//     const session = true 
//     // await fetchAuthSession();
//     const accessToken = session?.tokens?.accessToken?.toString() ?? null;
//     const idToken = session?.tokens?.idToken?.payload ?? null;

//     return { accessToken, idToken };
//   } catch (err) {
//     console.error('Error fetching session:', err);
//     return null; // Handle error by returning null or an appropriate fallback
//   }
// };
// {
//   "aws_project_region": "ap-south-1",
//   "aws_cognito_identity_pool_id": "ap-south-1:07656618-593d-4e2f-a3fa-e8c8133445d2",
//   "aws_cognito_region": "ap-south-1",
//   "aws_user_pools_id": "ap-south-1_bwC42ulYu",
//   "aws_user_pools_web_client_id": "40m1nr1ij86g6fen73ovofbfca",
//   "oauth": {},
//   "aws_cognito_username_attributes": [],
//   "aws_cognito_social_providers": [],
//   "aws_cognito_signup_attributes": [
//     "EMAIL"
//   ],
//   "aws_cognito_mfa_configuration": "OFF",
//   "aws_cognito_mfa_types": [
//     "SMS"
//   ],
//   "aws_cognito_password_protection_settings": {
//     "passwordPolicyMinLength": 8,
//     "passwordPolicyCharacters": []
//   },
//   "aws_cognito_verification_mechanisms": [
//     "EMAIL"
//   ],
//   "aws_appsync_graphqlEndpoint": "https://6nwnejp2nvcije5ld7h4onfss4.appsync-api.ap-south-1.amazonaws.com/graphql",
//   "aws_appsync_region": "ap-south-1",
//   "aws_appsync_authenticationType": "API_KEY",
//   "aws_appsync_apiKey": "da2-zdp5gwvjv5as7mhyhyac53pwdq",
//   "aws_user_files_s3_bucket": "umereommmerceb8a1e11479cc488d8ab2fab7313cb3a3d382e-dev",
//   "aws_user_files_s3_bucket_region": "ap-south-1"
// }
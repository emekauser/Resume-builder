export const PRIMARY_COLOR = '#02818c';
export const ERROR_COLOR = '#d30005';

export const COMPANY_NAME='resumeBuilder'
// FORM_PASSWORD_SIZE controls the password validation login on the server and also on the client
export const FORM_PASSWORD_SIZE = 4;

/* 
EMAIL_VERIFICATION_CODE_SIZE
determine the number of input box that will show up
and also the number of email verification code sent to the user
used in OPT input and also on signup route
*/
export const EMAIL_VERIFICATION_CODE_SIZE = 4;

export const EMAIL = 'email';
export const PORTFOLIO = 'portfolio';
export const PHONE = 'phone';
export const GITHUB = 'github';
export const ADDRESS = 'address';

// ErrorMessage
export const passwordErrorMsg = (passwordSize = FORM_PASSWORD_SIZE):string =>{
    // used both on the server and on the client
   return   `Password must be more than ${passwordSize} characters`; 
}


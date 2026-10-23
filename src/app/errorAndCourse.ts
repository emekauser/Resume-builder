export const appLicationError = {
    UNABLE_TO_FETCH: {
      code:700,
      //Oops! We were unable to complete your request. Please try again. (300)
      message: 'Unable to connect to the server code: 700',
      cause: [
        'when the client fetch call could not go through because the end point is wrong eg If instead of calling api/auth/signup, you call auth/signup you are likely to get error with 700 code',
        'Maybe the server is downs, not running',
        'It could be that you are not connected to internet'
      ],
    },
    CLIENT_SIDE_ERROR:{
      code:800,
      message:'Application error: a client-side exception has occurred (see the browser console for more information).'
    }
  };
  
  
  
  export const formFieldErrors={
    email:'Please provide a valid email e.g example@gmail.com',
  }
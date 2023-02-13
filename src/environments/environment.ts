// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angular-mosh-ecommerce',
    appId: '1:892191875652:web:ec8d1eb03d6469387bd211',
    databaseURL: 'https://angular-mosh-ecommerce-default-rtdb.firebaseio.com',
    storageBucket: 'angular-mosh-ecommerce.appspot.com',
    apiKey: 'AIzaSyA3kNluCV3B2XBoMI3t3FV02d2JDTXm0xY',
    authDomain: 'angular-mosh-ecommerce.firebaseapp.com',
    messagingSenderId: '892191875652',
  },
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA3kNluCV3B2XBoMI3t3FV02d2JDTXm0xY',
    authDomain: 'angular-mosh-ecommerce.firebaseapp.com',
    projectId: 'angular-mosh-ecommerce',
    storageBucket: 'angular-mosh-ecommerce.appspot.com',
    messagingSenderId: '892191875652',
    appId: '1:892191875652:web:ec8d1eb03d6469387bd211',
  },
  database: {
    url: 'https://angular-mosh-ecommerce-default-rtdb.firebaseio.com/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

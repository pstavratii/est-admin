// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCTXo4mw_L3PePJV3VpkczIu9R5fAWxD4w',
        authDomain: 'st-motors.firebaseapp.com',
        databaseURL: 'https://est-motors.firebaseio.com',
        projectId: 'est-motors',
        storageBucket: '',
        messagingSenderId: '382406327803',
        appId: '1:382406327803:web:b08707b59c4a51d2'
    }
};

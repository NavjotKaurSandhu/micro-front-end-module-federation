# moduleFederation


Add webpack to Angular:
ng add @angular-architects/module-federation --project remote1 --port 7000


Add webpack to React:
yarn add webpack webpack-cli webpack-server html-webpack-plugin babel-loader webpack-dev-server

1. Rename index.js to bootstrap.js
    in bootstrap.js, Remove the imports to index.css and reportWebVitals

2. Create index.js file & update as follow:
    import('./bootstrap');


3. Create webpack.config.js on the root & update as follow:
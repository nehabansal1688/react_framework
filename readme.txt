npm install
npm install --save react@0.14.7
npm install --save react-dom@0.14.7


npm install --save-dev webpack@1.12.12
npm install --save-dev webpack-dev-server@1.12.1 -g

npm install --save-dev babel-loader@6.2.1
npm install --save-dev babel-core@6.4.5
npm install --save-dev babel-preset-es2015@6.3.13
npm install --save-dev babel-preset-react@6.3.13
npm install --save-dev babel-preset-react-hmre // see changes on app wile compile time


npm install --save react-router-dom
//npm install --save react-router

//to run app 
webpack-dev-server --progress --inline --hot

//for SASS
npm install --save-dev sass-loader css-loader style-loader node-sass


//jquery 
npm install jquery --save

//Jest testing framework
npm install --save-dev jest babel-jest

//use following to run the tests
npm test

//use following to run the test cases with watch option i.e. any change in test file will trigger the test command
npm test -- --watchAll

// to see code coverage while running test files
npm test -- --coverage

//for oading images
npm install --save-dev url-loader

//for loalization
npm install --save-dev react-localization

//for making http request-> benfits as it transfroms the response
npm install --save-dev axios

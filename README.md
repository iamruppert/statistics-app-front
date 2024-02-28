# Statistics app website

This is a website for fetching data from GUS that displays industry and pollution data in 
Poland during years 2005-2020. 

#### Pollution view that shows how pollution looked like through years 2005-2020
![img.png](img.png)

Industry is divided into few categories:
- electricity
- mining
- manufacturing
- industry

#### Electricity data shows the situation how the electricity industry developed in years 2005-2020
![img_1.png](img_1.png)

#### Mining data shows the situation how the mining industry developed in years 2005-2020
![img_2.png](img_2.png)

#### Manufacturing data shows the situation how the manufacturing industry developed in years 2005-2020
![img_3.png](img_3.png)

#### Industry data shows the situation how the industry developed in years 2005-2020
![img_4.png](img_4.png)

Website allows user categorizing them by year and show proper chart.
After displaying data, user can download to proper file:

- JSON
- XML
- YAML

Example data in JOSN file:

```json
[
  {
    "id": 1,
    "yearValue": 2005,
    "sulfurDioxide": 1160,
    "nitrogenOxides": 862,
    "carbonDioxide": 323409,
    "carbonMonoxide": 3065,
    "nonMethaneVolatileOrganicCompounds": 1030,
    "anthropogenicSources": 787,
    "nature": 243,
    "ammonia": 333,
    "particulateMatter": 556
  },
  {
    "id": 2,
    "yearValue": 2010,
    "sulfurDioxide": 860,
    "nitrogenOxides": 838,
    "carbonDioxide": 334917,
    "carbonMonoxide": 3377,
    "nonMethaneVolatileOrganicCompounds": 1035,
    "anthropogenicSources": 769,
    "nature": 266,
    "ammonia": 310,
    "particulateMatter": 596
  },
  {
    "id": 3,
    "yearValue": 2015,
    "sulfurDioxide": 672,
    "nitrogenOxides": 670,
    "carbonDioxide": 313456,
    "carbonMonoxide": 2659,
    "nonMethaneVolatileOrganicCompounds": 986,
    "anthropogenicSources": 710,
    "nature": 276,
    "ammonia": 298,
    "particulateMatter": 511
  },
  {
    "id": 4,
    "yearValue": 2020,
    "sulfurDioxide": 432,
    "nitrogenOxides": 594,
    "carbonDioxide": 303523,
    "carbonMonoxide": 2199,
    "nonMethaneVolatileOrganicCompounds": 950,
    "anthropogenicSources": 671,
    "nature": 279,
    "ammonia": 321,
    "particulateMatter": 449
  }
]
```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

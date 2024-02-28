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


# Running the app commands

clone the repository
``` https://github.com/iamruppert/statistics-app-front.git ```

go to the directory where you cloned the repository

``` cd name_of_directory ```

download proper dependencies

``` npm install ```

run the app using command

``` npm start ```
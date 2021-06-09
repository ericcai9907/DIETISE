# DIETISE

UCI MCS Capstone Project: An App that recommends recipes for food based on user diets
---

## Food Classification Model
---

The source code for the models that we used can be found in [Food-Classification-Model](../Food-Classification-Model).

<p>
The food classification model is a CNN Keras Image Classification model. This model is trained on the MAFood121 Dataset<sup>1</sup> from the University of Barcelona and is transfer learned on MobileNetV2. 
  
  The main tools used for this model were Python, Keras, and Jupyter Notebook.
  
  The Model can identify 121 unique dishes from 11 cuisines. This model is used in our application to identify pictures that the user want to search.  
  
</p>

## Recipe/User Database
---
The source code for updating and adding into our database can be found in [Database](../Database).
<p>
  The database that we used is Firebase FireStoreDB a noSQL database. This was chosen as it allowed easier integration with our React Native Application. 
</p>

## App
<p>
Though the App was written in React Native which is cross-platform, the different platforms needed different code bases and project environments. That is why there are two code bases for the application. Most of the code for the different platforms is interchangeable but the specific dependencies and project specifications are different for the different platforms.
</p>

| Features                           | Android | iOS |
|------------------------------------|---------|-----|
| Sign-up/Login                      | yes     | yes |
| Search for Recipes with Text Input | yes     | yes |
| Search for Recipes with Model ID   | yes     | soon|
| Save Diet and Filter by Diet       | yes     | yes |
| Display User Profile               | yes     | yes |
| Display User Saved Recipes         | yes     | yes |

---
### Android
---
The source code for our Android version of the Application can be found in [Android](../Android).


### iOS
---
The source code for our Android version of the Application can be found in [iOS](../iOS).

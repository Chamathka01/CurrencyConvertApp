# Currency Convert App

## 2020ICT57

The project implements a basic Currency Converter application in React Native using the React Native Paper library for UI components. Users can input an amount, select the conversion direction (USD to LKR or LKR to USD), and get the converted amount.

## Features
1. Currency Conversion
2. Dynamic Currency Type Selection
3. Input Validation
4. State Management
5. Predefined Exchange Rates

## Project Overview

### Files
- **App.js**: This code serves as the entry point of a React Native application. 
- **CurrencyConverter.js**:  Handling user input, currency selection, conversion logic, and result display. 

## Technologies Used

- **React Native**:  To build a cross-platform mobile application for Android and iOS.

- **Expo**: To simplify development, testing, and deployment of the React Native app.

- **React Native Paper**: To provide pre-built, customizable UI components with Material Design principles.

- **JavaScript**: Core programming language for building the app.


## How to Run
1. Create the folder named "myapp".


2. Changes the directory to myapp.
    ```bash
    cd myapp
    ```


3. Creates a new Expo project named MyMobileApp using the blank template.
    ```bash
    npx create-expo-app MyMobileApp --template blank
    ```


4. Changes the current directory to the newly created MyMobileApp project directory.
   ```bash
   cd MyMobileApp
   ```


5. Installs dependencies required for running the app on the web using Expo.
    ```bash
    npx expo install react-dom react-native-web @expo/metro-runtime
    ```


6. Start the development server
   ```bash
   npx expo start
   ```
   or

   To run the app if mobile and pc have different network or virtual environment (use tunnel mode)

   ```bash
   npx expo start --tunnel
    ```


7.  Open in a web browser

    type "w"

     ```bash
    w
    ```


8. Installs the React Native Paper library.(This is a UI component library that provides Material Design components for React Native.)
    ```bash
    npm install react-native-paper
    ```


9. Installs the react-native-safe-area-context library.(This library manage safe areas in a React Native app.)
    ```bash
    npm install react-native-safe-area-context
    ```

    
10. Installs the react-native-vector-icons library.(This provides customizable icons to use within the app.)
    ```bash
    npm install react-native-vector-icons
    ```

  
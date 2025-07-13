# tutos-react-native

---

## Quick start


```sh
# Create a project named my-app
$ npx create-expo-app my-first-app --template blank
$ npx create-expo-app my-app --template bare-minimum

# Start your project by running:
$ npx expo start
```

### Install dependencies

```sh
# Install dependencies
$ npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

### Setup entry point

- For the property ```main```, use the ```expo-router/entry``` as its value in the ```package.json```. The initial client file is ```app/_layout.tsx```.
```
{
  "main": "expo-router/entry"
}
```

###  Modify project configuration

- Add a deep linking scheme in your app config:
```
# app.json
{
  "scheme": "your-app-scheme"
}
```
- If you are developing your app for web, install the following dependencies:
```sh 
$ npx expo install react-native-web react-dom
```
- Then, enable ```Metro web``` support by adding the following to your app config:
```
# app.json
{
  "web": {
    "bundler": "metro"
  }
}
```

### Modify babel.config.js

- EnsIf you are developing your app for web, install the following dependencies:ure you use ```babel-preset-expo``` as the ```preset```, in the ```babel.config.js``` file or delete the file:
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```

### Clear bundler cache

- After updating the Babel config file, run the following command to clear the bundler cache:
```sh
$ npx expo start --clear
```

---

## Reset your project

- You can remove the boilerplate code and start fresh with a new project. Run the following command to reset your project:
```sh
$ npm run reset-project
```

## Expo CLI

```sh
# Starts the development server (whether you are using a development build or Expo Go).
$ npx expo start

# Compiles native Android app locally.
$ npx expo run:android

# Used to install a new library or validate and update specific libraries in your project by adding --fix option to this command.
$ npx expo install package-name

# Expo Doctor is a command line tool used to diagnose issues in your Expo project. To use it, run the following command in your project's root directory:
$ npx expo-doctor
```

---
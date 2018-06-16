# AngularComponentLibrary

This project is to understand how to create npm ready angular component libraries to use in an angular application.

After, generating an angular application for the demo we will follow below steps to create component library
1. Generate a library project by running following command  
```ng generate library ratify --prefix=lib```
2. Library project will be created with one default exported component ```lib-ratify```
3. Lets write some code snippet to make ```lib-ratify``` to behave like a rating component.
4. We can find the source code of rating component [here](https://raw.githubusercontent.com/mohanramphp/angular-component-library/master/projects/ratify/src/lib/ratify.component.ts)
5. To build the library run the below command  
``` ng build ratify``` 
6. Built is added to the dist folder of our application as ```dist/ratify```
7. There are two ways angular registers external libraries.  
    1. NPM Module declarations in the ```package.json``` file.
    2. Library registered in the ```tsconfig.json``` file
    > Note: Since we generated library with our application. Angular registered our library by placing library dependency entries in ```angular.json``` and ```tsconfig.json```
8. We have added few scripts to built the library and pack for npm in ```package.json ```  
```javascript
"scripts": {
    ...
    ...
    "build-lib": "ng build --prod ratify",
    "npm-pack": "cd dist/ratify && npm pack",
    "package": "npm run build-lib && npm run npm-pack"
  }
  ```
  > Last three commands (**build-lib, npm-pack, package**) are responsible for building and packing the library for npm

9. Run ```npm run package``` to create npm ready library in ```dist/ratify```


Finally, lets see how to publish npm package

  1. Add npm user by running below command  
  ```npm adduser```
 > Note: 
 > 1. If you are not signed up above command will sign up you as npm user.
 > 2. Type ```npm whoami``` from a terminal to see if you are already logged in (technically, this also means that your credentials have been stored locally).
 2. Login into npm by running  
 ```npm login```
 3. Go to the packaged output in ```dist/ratify```

 ```cmd
 > cd dist/ratify
 > dist/ratify> npm publish
 ```

 npm package will be uploaded to the **[npm registry - angular-ratify](https://www.npmjs.com/package/angular-ratify)**





  



/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./client/client.js" () {
    /*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
      eval(
        "{/* Takes in an error message. Sets the error message up in html, and\n   displays it to the user. Will be hidden by other events that could\n   end in an error.\n*/\nconst handleError = (message) => {\n  document.getElementById('errorMessage').textContent = message;\n  document.getElementById('domoMessage').classList.remove('hidden');\n};\n\n/* Sends post requests to the server using fetch. Will look for various\n   entries in the response JSON object, and will handle them appropriately.\n*/\nconst sendPost = async (url, data) => {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n\n  const result = await response.json();\n  document.getElementById('domoMessage').classList.add('hidden');\n\n  if(result.redirect) {\n    window.location = result.redirect;\n  }\n\n  if(result.error) {\n    handleError(result.error);\n  }\n};\n\n/* Entry point of our client code. Runs when window.onload fires.\n   Sets up the event listeners for each form across the whole app.\n*/\nconst init = () => {\n  const signupForm = document.getElementById('signupForm');\n  const loginForm = document.getElementById('loginForm');\n  const domoForm = document.getElementById('domoForm');\n  const domoMessage = document.getElementById('domoMessage');\n\n  /* If this page has the signupForm, add it's submit event listener.\n     Event listener will grab the username, password, and password2\n     from the form, validate everything is correct, and then will\n     use sendPost to send the data to the server.\n  */\n  if(signupForm) {\n    signupForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      domoMessage.classList.add('hidden');\n\n      const username = signupForm.querySelector('#user').value;\n      const pass = signupForm.querySelector('#pass').value;\n      const pass2 = signupForm.querySelector('#pass2').value;\n\n      if(!username || !pass || !pass2) {\n        handleError('All fields are required!');\n        return false;\n      } \n\n      if(pass !== pass2) {\n        handleError('Passwords do not match!');\n        return false;\n      }\n\n      sendPost(signupForm.getAttribute('action'), {username, pass, pass2});\n      return false;\n    });\n  }\n\n  /* If this page has the loginForm, add it's submit event listener.\n     Event listener will grab the username, password, from the form, \n     validate both values have been entered, and will use sendPost \n     to send the data to the server.\n  */\n  if(loginForm) {\n    loginForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      domoMessage.classList.add('hidden');\n\n      const username = loginForm.querySelector('#user').value;\n      const pass = loginForm.querySelector('#pass').value;\n\n      if(!username || !pass) {\n        handleError('Username or password is empty!');\n        return false;\n      }\n\n      sendPost(loginForm.getAttribute('action'), {username, pass});\n      return false;\n    });\n  }\n\n  /* If this page has the domoForm, add it's submit event listener.\n     Event listener will grab the domo name and the domo age from\n     the form. It will throw an error if one or both are missing.\n     Otherwise, it will send the request to the server.\n  */\n  if(domoForm) {\n    domoForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      domoMessage.classList.add('hidden');\n\n      const name = domoForm.querySelector('#domoName').value;\n      const age = domoForm.querySelector('#domoAge').value;\n\n      if(!name || !age) {\n        handleError('All fields are required!');\n        return false;\n      }\n\n      sendPost(domoForm.getAttribute('action'), {name, age});\n      return false;\n    });\n  }\n};\n\n// Call init when the window loads.\nwindow.onload = init;\n\n//# sourceURL=webpack://rit_igme430/./client/client.js?\n}",
      );

      /***/
    },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./client/client.js"]();
  /******/
  /******/
})();

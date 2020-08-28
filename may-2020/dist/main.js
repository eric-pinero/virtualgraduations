/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/2020-01-09.js":
/*!***************************!*\
  !*** ./src/2020-01-09.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst students = [\n  {\n    \"id\": 5033,\n    \"name\": \"Amin Babar\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/908436dad8a9a0272f2f8c23e9842ed7?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5046,\n    \"name\": \"Andrew Elmore\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/8abbbe103334e2c6af9da8fc2ce427a5?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5039,\n    \"name\": \"Anthony Cruz\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6a1bf4e0d1ed89c19bce06ddf3cffdcb?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5015,\n    \"name\": \"Artem Silka\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/17c5ea085b639bba48ad5ccb873f23e0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5019,\n    \"name\": \"Austin Wong\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/02140e033b0cca947603b1187f02cebf?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5021,\n    \"name\": \"Brandon Kim\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9695ce84400a2d9cae9fd33919655a88?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5014,\n    \"name\": \"Cade Schreger\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/6987bf6dc6c9c1274a6e1ecaa5962c8c?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5018,\n    \"name\": \"Carlos Pena\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/54500068ef8b281f9f7d64381f178bd9?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5037,\n    \"name\": \"Connor Murphy\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9110a6220e06eb3b85730d16e0a11da2?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5036,\n    \"name\": \"Daniel (Dan) Guardado\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a1c29bc6018e947267fa5c4ad982b25b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5038,\n    \"name\": \"Edward Garrett\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d6d0a91b3db19f8590f7aa83cfc1f2f4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5029,\n    \"name\": \"Gabriel (Gabe) Byrne\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/3f8a5505f9a4fd9cb71341316de3b154?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5044,\n    \"name\": \"George Rodnikov\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/fa823a521729d44e507990e6dba0b0a4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5047,\n    \"name\": \"Hyun-A (Lauren) Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/10a1f24e2ebe1f1e77e4161cf7f5154d?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5028,\n    \"name\": \"Jeff Varela\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/1c877db0f1ba3b97f8a43cc041335abc?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5040,\n    \"name\": \"Jiahui (Millie) He\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9199523544c3e3996ae05b9ca1d38966?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5030,\n    \"name\": \"Jin Lin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/f7c0d48354e228ee9d1fd8452a64a650?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4337,\n    \"name\": \"Jonathan Su\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2f53859caeccaef194408a5c9c10c6f0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5017,\n    \"name\": \"Kevin Espinal\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/f192f56869203e97e463b9838bc9a1ce?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5013,\n    \"name\": \"Kihoon Choi\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/4e08157acd8f8a895071b49fc99c67c6?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4938,\n    \"name\": \"Mackenzie (Mac) Young\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a8b6e73f74666d6465333d961a4969f0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5011,\n    \"name\": \"Matthew Greer\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/aa9b429d97eb22911b15d951dfa4412b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5035,\n    \"name\": \"Miguel Fung\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/2ae5af645bfc9ae630ad3cceda14a29b?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5024,\n    \"name\": \"Nikki Teoh\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/ad654a56798c9589e261a48162dc3aa4?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4846,\n    \"name\": \"Ock Kyung (Cathy) Jung\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/e5847174ea9133c4dd1f576a754e14f9?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 4679,\n    \"name\": \"Paul Gonzalez\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/9321ea559f5860d5e35051cb4006331d?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5034,\n    \"name\": \"Peter Kupchick\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/40a47643e139faf3026292798bb4e492?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5012,\n    \"name\": \"Robert (Rob) Kornblum\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/22bd4fc3008aae0c986226fd935590c1?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5045,\n    \"name\": \"Samuel (Sam) Kratzer\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/40f037a185cd4d3e0a1edc261fa661cf?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5009,\n    \"name\": \"Seungyoon (Nara) Lee\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/71da1ab19301d5cbafac8a14ba5871a3?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5016,\n    \"name\": \"Tony Wu\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/a2d3197d9b2bd53d3cc7f976c6c38077?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5023,\n    \"name\": \"Torin Donahue\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/1fc1d050c3a1b720b0a3663ded3be627?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5008,\n    \"name\": \"Victor Crispin\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/65460fb9617e4aa7f9d5edc8a4206651?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5026,\n    \"name\": \"William (Will) Shelley\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/afb8ad875abb4a1ddd3d88b12a1081d0?secure=true&size=300\",\n    \"occup\": \"student\"\n  },\n  {\n    \"id\": 5042,\n    \"name\": \"Yuanyuan (Yuan) Zhou\",\n    \"imageUrl\": \"https://secure.gravatar.com/avatar/d0c5b81436994457df70fa7d3dbcb0a1?secure=true&size=300\",\n    \"occup\": \"student\"\n  }\n]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (students);\n\n\n//# sourceURL=webpack:///./src/2020-01-09.js?");

/***/ }),

/***/ "./src/ceremony.js":
/*!*************************!*\
  !*** ./src/ceremony.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Ceremony {\n    constructor(ctx, graduates, currentStudent = 0) {\n        this.ctx = ctx;\n        this.graduates = graduates;\n        this.currentStudent = currentStudent;\n        this.megamanSpriteSheet = new Image();\n        this.stage = new Image();\n        this.audienceChairs = new Image();\n        this.diploma = new Image();\n        this.aalogo = new Image();\n\n        this.megamanSpriteSheet.src = \"./dist/assets/megaman_sprite_sheet.png\";\n        this.stage.src = './dist/assets/pixel_art_stage.png';\n        this.audienceChairs.src = \"./dist/assets/theatre_chairs.png\";\n        this.diploma.src = \"./dist/assets/diploma.png\";\n        this.aalogo.src = \"./dist/assets/logo.png\";\n    }\n\n    constructStage() {\n        let waitingSprite = [100, 100];\n        let spriteSize = [50, 50]\n\n        this.interval = setInterval(() => {\n            this.ctx.drawImage(this.stage, 20, 50, 850, 300);\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 70)\n            this.ctx.drawImage(this.audienceChairs, 20, 349, 850, 130)\n            this.ctx.drawImage(this.megamanSpriteSheet,\n                waitingSprite[0], waitingSprite[1],\n                spriteSize[0], spriteSize[1],\n                80, 245,\n                // spriteSize[0], spriteSize[1])\n                80, 80)\n                // clearInterval(this.interval)\n        },100)\n    }\n\n    nextStudentMoves(button) {\n        button.disabled = true\n        this.graduates[this.currentStudent].moveAcrossScreen(this, button)\n        this.currentStudent += 1\n    }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ceremony);\n\n//# sourceURL=webpack:///./src/ceremony.js?");

/***/ }),

/***/ "./src/graduate.js":
/*!*************************!*\
  !*** ./src/graduate.js ***!
  \*************************/
/*! exports provided: Graduate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graduate\", function() { return Graduate; });\nclass Graduate {\n    constructor(ctx, name, img_url) {\n        this.ctx = ctx\n        this.name = name\n        this.img_url = new Image()\n        this.img_url.src = img_url\n    }\n\n    drawGraduate(ceremony,i,startingPosition, jumpHeight){\n        let spriteSize = [50, 50]\n        let runningSprites = [[150, 0], [200, 0], [250, 0]];\n        let dashSprites = [[350, 250], [400, 250], [450, 250]];\n        let jumpSprite = [300, 150]\n\n        this.ctx.clearRect(0, 0, 1000, 1000)\n\n        this.ctx.drawImage(ceremony.stage, 20, 50, 850, 300);\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 70)\n        this.ctx.drawImage(ceremony.audienceChairs, 20, 349, 850, 130)\n\n        if (startingPosition[0] >= 350 && startingPosition[0] <= 490) {\n            if (startingPosition[0] <= 420) {\n                jumpHeight[0] = jumpHeight[0] + 11;\n            } else {\n                jumpHeight[0] = jumpHeight[0] - 11;\n            }\n\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                // runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                jumpSprite[0], jumpSprite[1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - jumpHeight,\n                80, 80)\n        } else if (startingPosition[0] > 490) { // after landing from diploma catch\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                dashSprites[i % dashSprites.length][0], dashSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1] - 40,\n                130, 130)\n        } else {\n            this.ctx.drawImage(ceremony.megamanSpriteSheet,\n                runningSprites[i % runningSprites.length][0], runningSprites[i % runningSprites.length][1],\n                spriteSize[0], spriteSize[1],\n                startingPosition[0], startingPosition[1],\n                80, 80)\n        }\n\n        let photoHeight = 170;\n        let photoWidth = 150;\n\n        // this.ctx.drawImage(this.img_url, 375, 55, photoWidth, photoHeight);\n\n        if (startingPosition[0] < 440) {\n            this.ctx.drawImage(ceremony.diploma, 440, 235, 20, 20); //draw diploma\n        } else if (startingPosition[0] === 440) {\n            ceremony.sound.play();\n        } else {\n            this.ctx.drawImage(ceremony.aalogo, 375, 55, 150, 150);\n        }\n    }\n\n    moveAcrossScreen(ceremony,button) {\n        clearInterval(ceremony.interval);\n        let startingPosition = [80, 245]\n        let jumpSprite = [300, 100] //might get to use this later\n        let studentName = document.querySelector(\"#student\")\n        studentName.innerHTML = this.name\n        let i = 0;\n        let jumpHeight = [0];\n\n        let interval = setInterval(() => {\n            startingPosition[0] += 20\n            i++\n\n            this.drawGraduate(ceremony,i, startingPosition, jumpHeight)\n\n            if (startingPosition[0] >= 740) {\n                clearInterval(interval)\n                this.ctx.clearRect(0, 0, 1000, 1000)\n                ceremony.constructStage()\n                button.disabled = false\n                studentName.innerHTML  = \"\"\n            }\n        }, 100)\n    }\n\n    jumpAndGrabDiploma(ceremony, i, startingPosition) {\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/graduate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graduate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graduate */ \"./src/graduate.js\");\n/* harmony import */ var _ceremony__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ceremony */ \"./src/ceremony.js\");\n/* harmony import */ var _2020_01_09__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2020-01-09 */ \"./src/2020-01-09.js\");\n\n //there is no reason that these two imports are different. I was messing around with how you can import files\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"canvas\")\n    let nextStudentButton = document.getElementById(\"next-student\")\n    let ctx = canvas.getContext(\"2d\")\n    let ol1 = document.getElementById(\"ol1\")\n    let ol2 = document.getElementById(\"ol2\")\n    let punch = document.getElementById(\"punch\");\n    let submitButton = document.querySelector(\"#current-student-button\")\n\n    let graduates = [] \n    _2020_01_09__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach((student) => {\n        let graduate = new _graduate__WEBPACK_IMPORTED_MODULE_0__[\"Graduate\"](ctx,student.name,student.imageUrl)\n        graduates.push(graduate)\n    })\n\n    let mid = Math.floor(graduates.length/2)\n    ol2.start = mid + 1\n\n    for (let i = 0; i < mid;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol1.appendChild(listItem)\n    }\n\n    for (let i = mid; i < graduates.length;i++) {\n        let listItem = document.createElement(\"li\")\n        listItem.textContent = graduates[i].name\n        ol2.appendChild(listItem)\n    }\n\n    let ceremony = new _ceremony__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, graduates)\n    ceremony.sound = punch; // give sound to ceremony instance\n\n    submitButton.addEventListener(\"click\", () => {\n        let input = document.querySelector(\"input\");\n        ceremony.currentStudent = parseInt(input.value) - 1\n    })\n\n    ceremony.constructStage()\n\n\n    nextStudentButton.addEventListener(\"click\", (e) => {\n        ceremony.nextStudentMoves(e.target)\n    })\n\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
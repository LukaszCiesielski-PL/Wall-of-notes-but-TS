/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/guid.ts":
/*!*********************!*\
  !*** ./src/guid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}


/***/ }),

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid */ "./src/guid.ts");

class Note {
    constructor(title, content) {
        this.id = _guid__WEBPACK_IMPORTED_MODULE_0__.Guid.newGuid();
        this.title = title;
        this.content = content;
        this.createdAt = new Date();
    }
}


/***/ }),

/***/ "./src/noteboard.ts":
/*!**************************!*\
  !*** ./src/noteboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteBoard": () => (/* binding */ NoteBoard)
/* harmony export */ });
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note */ "./src/note.ts");
/* harmony import */ var _sessionstoragestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionstoragestore */ "./src/sessionstoragestore.ts");


class NoteBoard {
    constructor() {
        this.storage = new _sessionstoragestore__WEBPACK_IMPORTED_MODULE_1__.SessionStorageStore();
        this.addTitleInput();
        this.addContentInput();
        this.addButton();
        this.notesContainer = (document.createElement('div'));
        document.body.append(this.notesContainer);
    }
    addTitleInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Title:";
        const titleInput = (document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);
        document.body.appendChild(div);
    }
    addContentInput() {
        const div = (document.createElement('div'));
        const span = (document.createElement('span'));
        span.textContent = "Content:";
        const contentInput = (document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);
        document.body.appendChild(div);
    }
    addButton() {
        const div = (document.createElement('div'));
        const addButton = (document.createElement('button'));
        addButton.textContent = "Add";
        addButton.addEventListener('click', () => {
            let title = document.getElementById('title').value;
            let content = document.getElementById('content').value;
            this.storage.addNote(new _note__WEBPACK_IMPORTED_MODULE_0__.Note(title, content));
            this.refreshList();
        });
        div.appendChild(addButton);
        document.body.appendChild(div);
    }
    refreshList() {
        this.notesContainer.innerHTML = '';
        const notes = this.storage.getNotes();
        if (!notes)
            return;
        notes.forEach((item) => {
            const titleDiv = (document.createElement('div'));
            titleDiv.innerHTML = item.title;
            const contentDiv = (document.createElement('div'));
            contentDiv.innerHTML = item.content;
            const removeBtn = (document.createElement('button'));
            removeBtn.textContent = "Remove";
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                this.storage.deleteNote(id);
                this.refreshList();
            });
            this.notesContainer.appendChild(titleDiv);
            this.notesContainer.appendChild(contentDiv);
            this.notesContainer.appendChild(removeBtn);
            this.notesContainer.appendChild(document.createElement('hr'));
        }, this);
    }
}


/***/ }),

/***/ "./src/sessionstoragestore.ts":
/*!************************************!*\
  !*** ./src/sessionstoragestore.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionStorageStore": () => (/* binding */ SessionStorageStore)
/* harmony export */ });
class SessionStorageStore {
    deleteNote(id) {
        let noteValue = sessionStorage.getItem('notes');
        let notes;
        notes = JSON.parse(noteValue);
        let newNotes = notes.filter((note) => note.id != id);
        sessionStorage.setItem('notes', JSON.stringify(newNotes));
    }
    addNote(note) {
        let noteValue = sessionStorage.getItem('notes');
        let notes;
        notes = JSON.parse(noteValue);
        if (!notes)
            notes = [];
        notes.push(note);
        sessionStorage.setItem('notes', JSON.stringify(notes));
    }
    getNotes() {
        let notesValue = sessionStorage.getItem('notes');
        return JSON.parse(notesValue);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteboard */ "./src/noteboard.ts");

let board = new _noteboard__WEBPACK_IMPORTED_MODULE_0__.NoteBoard();
board.refreshList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9aYWRhbmllMS8uL3NyYy9ndWlkLnRzIiwid2VicGFjazovL1phZGFuaWUxLy4vc3JjL25vdGUudHMiLCJ3ZWJwYWNrOi8vWmFkYW5pZTEvLi9zcmMvbm90ZWJvYXJkLnRzIiwid2VicGFjazovL1phZGFuaWUxLy4vc3JjL3Nlc3Npb25zdG9yYWdlc3RvcmUudHMiLCJ3ZWJwYWNrOi8vWmFkYW5pZTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vWmFkYW5pZTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1phZGFuaWUxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vWmFkYW5pZTEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9aYWRhbmllMS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4QjtBQUN2QjtBQUNQO0FBQ0Esa0JBQWtCLCtDQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjhCO0FBQzhCO0FBQ3JEO0FBQ1A7QUFDQSwyQkFBMkIscUVBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVDQUFJO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ3hDLGdCQUFnQixpREFBUztBQUN6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICAgIHN0YXRpYyBuZXdHdWlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi9ndWlkXCI7XHJcbmV4cG9ydCBjbGFzcyBOb3RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOb3RlIH0gZnJvbSBcIi4vbm90ZVwiO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVN0b3JlIH0gZnJvbSBcIi4vc2Vzc2lvbnN0b3JhZ2VzdG9yZVwiO1xyXG5leHBvcnQgY2xhc3MgTm90ZUJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTZXNzaW9uU3RvcmFnZVN0b3JlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRUaXRsZUlucHV0KCk7XHJcbiAgICAgICAgdGhpcy5hZGRDb250ZW50SW5wdXQoKTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMubm90ZXNDb250YWluZXIgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMubm90ZXNDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgYWRkVGl0bGVJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIGFkZENvbnRlbnRJbnB1dCgpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJDb250ZW50OlwiO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRJbnB1dCA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcclxuICAgICAgICBjb250ZW50SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChjb250ZW50SW5wdXQpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH1cclxuICAgIGFkZEJ1dHRvbigpIHtcclxuICAgICAgICBjb25zdCBkaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XHJcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcclxuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5hZGROb3RlKG5ldyBOb3RlKHRpdGxlLCBjb250ZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoTGlzdCgpIHtcclxuICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IG5vdGVzID0gdGhpcy5zdG9yYWdlLmdldE5vdGVzKCk7XHJcbiAgICAgICAgaWYgKCFub3RlcylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIG5vdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGVEaXYgPSAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gICAgICAgICAgICB0aXRsZURpdi5pbm5lckhUTUwgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcclxuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSBpdGVtLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XHJcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpdGVtLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5kZWxldGVOb3RlKGlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaExpc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFNlc3Npb25TdG9yYWdlU3RvcmUge1xyXG4gICAgZGVsZXRlTm90ZShpZCkge1xyXG4gICAgICAgIGxldCBub3RlVmFsdWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG4gICAgICAgIGxldCBub3RlcztcclxuICAgICAgICBub3RlcyA9IEpTT04ucGFyc2Uobm90ZVZhbHVlKTtcclxuICAgICAgICBsZXQgbmV3Tm90ZXMgPSBub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUuaWQgIT0gaWQpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkobmV3Tm90ZXMpKTtcclxuICAgIH1cclxuICAgIGFkZE5vdGUobm90ZSkge1xyXG4gICAgICAgIGxldCBub3RlVmFsdWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG4gICAgICAgIGxldCBub3RlcztcclxuICAgICAgICBub3RlcyA9IEpTT04ucGFyc2Uobm90ZVZhbHVlKTtcclxuICAgICAgICBpZiAoIW5vdGVzKVxyXG4gICAgICAgICAgICBub3RlcyA9IFtdO1xyXG4gICAgICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeShub3RlcykpO1xyXG4gICAgfVxyXG4gICAgZ2V0Tm90ZXMoKSB7XHJcbiAgICAgICAgbGV0IG5vdGVzVmFsdWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKG5vdGVzVmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTm90ZUJvYXJkIH0gZnJvbSBcIi4vbm90ZWJvYXJkXCI7XHJcbmxldCBib2FyZCA9IG5ldyBOb3RlQm9hcmQoKTtcclxuYm9hcmQucmVmcmVzaExpc3QoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
\# Dev Notes



---



\## vantajs Integration in the Website



When you use MkDocs with a modern theme (especially Material for MkDocs or any theme using instant loading / client-side navigation), pages are loaded via AJAX instead of a full browser refresh.



That means:



When you navigate to another page, MkDocs replaces the page’s main content dynamically (using JavaScript).



But your Vanta.js (or any background initialization script) only runs on the first page load — because it’s bound to the window.onload or script tag that only executes once.



When you come back to the page, the background <div> is re-inserted into the DOM, but your script isn’t re-run automatically.



---


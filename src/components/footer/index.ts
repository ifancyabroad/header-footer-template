import style from './style.css';

// Create a class for the element
class CustomFooter extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create spans
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        const title = document.createElement('h1');
        title.setAttribute('class', 'title');
        title.textContent = "Custom Footer Component";

        // Apply external styles to the shadow dom
        const styleTag = document.createElement('style');
        styleTag.innerHTML = style;

        // Attach the created elements to the shadow dom
        shadow.appendChild(styleTag);
        shadow.appendChild(wrapper);
        wrapper.appendChild(title);
    }
}

// Define the new element
customElements.define('custom-footer', CustomFooter);

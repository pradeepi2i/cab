export class Content {    
    content: Element;
    constructor(content: Element) {        
        this.content = content;
        this.renderContent();
    }


    renderContent() {
        this.content.innerHTML = `        
            <div class="book-ride">
                <button class="primary-btn" id="start">Let's get Started</button>
            </div>`;
    }
}
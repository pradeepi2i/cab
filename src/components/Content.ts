export class Content {    
    content: Element;
    constructor(content: Element) {        
        this.content = content;
        this.renderContent();
    }


    renderContent() {
        this.content.innerHTML = `        
            <div class="home-bottom-btn">
                <button class="primary-btn" id="start">Let's get Started</button>
            </div>`;
    }
}
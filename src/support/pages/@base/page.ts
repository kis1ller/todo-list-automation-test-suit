import { Component } from "@base/component";

abstract class Page extends Component {
    private url: string;

    get Url() {
        return this.url;
    }

    constructor(url = "", pageSelector = "body") {
        super(pageSelector);

        this.url = url;
    }

    public open(): void {
        browser.url(this.url);
    }
}

export { Page };

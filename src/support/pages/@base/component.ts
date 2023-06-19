abstract class Component {
    private _selector: string;

    get element() {
        return $(this._selector);
    }

    constructor(selector: string) {
        this._selector = selector;
    }
}

export { Component };

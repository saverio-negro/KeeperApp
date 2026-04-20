class Note {
    private _title: string;
    private _text: string;

    constructor(title: string, text: string) {
        this._title = title;
        this._text = text;
    }

    get title(): string {
        return this._title;
    }

    get text(): string {
        return this._text;
    }
}

export default Note;

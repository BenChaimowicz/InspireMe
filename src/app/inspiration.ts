export class Inspiration {

  private _id: number;
  private _origin: string;
  private _user: string;
  private _content: string;

  constructor(
    id: number,
    origin: string,
    user: string,
    content: string
  ) {
    this._id = id;
    this._origin = origin;
    this._user = user;
    this._content = content;
  }

  get id(): number { return this._id; }
  get origin(): string { return this._origin; }
  get user(): string { return this._user; }
  get content(): string { return this._content; }

}

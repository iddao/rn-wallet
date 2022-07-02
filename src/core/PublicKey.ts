export class PublicKey {
  constructor(private _n: string, private _e: string) {}
  get n() {
    return this._n;
  }
  get e() {
    return this._e;
  }
}

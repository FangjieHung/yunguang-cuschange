declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    isUndefinedOrNullOrEmpty(): boolean;
  }
}

Array.prototype.isUndefinedOrNullOrEmpty = function(): boolean {
  if (!this) {
    return true;
  }

  if (this.length === 0) {
    return true;
  }

  return false;
};

export {};

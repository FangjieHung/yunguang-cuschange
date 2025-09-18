declare global {
  interface String {
    isUndefinedOrNullOrEmpty(): boolean;
  }
}

String.prototype.isUndefinedOrNullOrEmpty = function(): boolean {
  if (!this) {
    return true;
  }

  if (this.trim() === '') {
    return true;
  }

  return false;
};

export {};

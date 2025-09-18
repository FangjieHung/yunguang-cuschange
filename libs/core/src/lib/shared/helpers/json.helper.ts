/* eslint-disable @typescript-eslint/no-explicit-any */

export class JsonHelper {
  static parseSafeJSON(str: string): any {
    try {
      // 嘗試第一次解析
      let parsed = JSON.parse(str);

      // 如果結果是字串，代表原本有多包一層引號，再 parse 一次
      if (typeof parsed === 'string') {
        parsed = JSON.parse(parsed);
      }

      return parsed;
    } catch {
      return {};
    }
  }
}

import * as FormData from 'form-data';

export class UploadFormReq extends FormData {
  jsonContent: string | null = null;

  constructor() {
    super();
  }

}

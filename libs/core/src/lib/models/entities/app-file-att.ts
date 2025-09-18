import { EntityBase } from '../shared';

export class AppFileAtt extends EntityBase {
  /*自動編號 */
  id = 0;
  /*上傳檔案名稱 */
  uploadName = '';
  /*上傳檔案名稱 */
  guidName = '';
  /*檔案副檔名 */
  extension = '';
  /*內容類型 */
  contentType = '';
  /*完整路徑 */
  fullPath = '';
  /*存取權限 */
  accessPriv = 0;
  /*狀態 */
  status = 0;

  constructor() {
    super();
  }
}



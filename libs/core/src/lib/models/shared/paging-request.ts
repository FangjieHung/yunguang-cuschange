import * as globalConst from '../../consts';

export class PagingRequest<T> {
  queryRequest: T;
  pageIndex: number;
  pageSize: number;

  constructor() {
    this.queryRequest = {} as T;
    this.pageIndex = globalConst.PAGING_DEFAULT_PAGE_INDEX;
    this.pageSize = globalConst.PAGING_DEFAULT_PAGE_SIZE;
  }
}

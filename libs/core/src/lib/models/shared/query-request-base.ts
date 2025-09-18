export class QueryRequestBase {
  id = 0;
  type = 0;
  status = 0;
  startStatus = 0;
  endStatus = 0;
  activeAt: Date | null = null;
  startAt: Date | null = null;
  endAt: Date | null = null;
  startTimeAt: string | null = null;
  endTimeAt: string | null = null;
  takeCount = 0;
  queryString: string | null = null;
  isShowContent = false;
}

import { QueryRequestBase } from '../shared';

export class CampAttendLogReq extends QueryRequestBase {
    id = 0;
    campRegId = 0;
    certNo: string | null = null;

    constructor() {
        super();
    }
}

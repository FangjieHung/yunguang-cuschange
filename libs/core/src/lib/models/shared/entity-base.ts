export class EntityBase {
  crtBy: number;
  crtAt: Date;
  updBy: number;
  updAt: Date;
  delAt: Date;

  constructor() {
    this.crtBy = 0;
    this.crtAt = new Date();
    this.updBy = 0;
    this.updAt = new Date();
    this.delAt = new Date('2999-12-31T00:00:00.000Z');
  }
}

export enum EntityBaseStatuses {
  '啟用' = 60,
  '停用' = 100
}

export interface CorpView {
  id: number;
  taxId: string;
  name: string;
  zipCodeId: number | null;
  addr: string | null;
  cpName: string | null;
  cpMobile: string | null;
  cpPhone: string | null;
  cpPhoneExt: string | null;
}

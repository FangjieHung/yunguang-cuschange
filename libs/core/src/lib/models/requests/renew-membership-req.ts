export class RenewMembershipReq {
  /** 要續約的台灣年度，例如 2026 */
  contractYear = 0;

  /** 指定會員 Id；0 = 全體正式會員 */
  custId = 0;

  /** 會員身份別（CustomerTypes）；0 = 不限 */
  custType = 0;
}

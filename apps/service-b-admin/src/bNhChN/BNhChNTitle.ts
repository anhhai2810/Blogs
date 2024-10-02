import { BNhChN as TBNhChN } from "../api/bNhChN/BNhChN";

export const BNHCHN_TITLE_FIELD = "id";

export const BNhChNTitle = (record: TBNhChN): string => {
  return record.id?.toString() || String(record.id);
};

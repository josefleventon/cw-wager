/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export interface InstantiateMsg {
  amounts: Uint128[];
  collection_address: string;
  expiries: number[];
  fairburn_bps: number;
  fee_address: string;
  fee_bps: number;
  matchmaking_expiry: number;
  max_currencies: number;
}
export type ExecuteMsg = {
  update_config: {
    params: ParamInfo;
  };
} | {
  set_winner: {
    wager_key: [[Addr, number], [Addr, number]];
    winner: [Addr, number];
  };
} | {
  wager: {
    against_currencies: Currency[];
    currency: Currency;
    expiry: number;
    token: [Addr, number];
  };
} | {
  cancel: {
    token: [Addr, number];
  };
};
export type Addr = string;
export type Currency = "d_o_t" | "a_v_a_x" | "u_n_i" | "a_t_o_m" | "l_i_n_k" | "n_e_a_r" | "i_c_p" | "s_a_n_d" | "b_t_c" | "e_t_h" | "b_n_b" | "x_r_p" | "a_d_a" | "d_o_g_e" | "s_o_l" | "m_a_n_a" | "c_a_k_e" | "a_r" | "o_s_m_o" | "r_u_n_e" | "l_u_n_a" | "u_s_t_c" | "s_t_a_r_s" | "m_i_r";
export interface ParamInfo {
  amounts?: Uint128[] | null;
  collection_address?: string | null;
  expiries?: number[] | null;
  fairburn_bps?: number | null;
  fee_address?: string | null;
  fee_bps?: number | null;
  matchmaking_expiry?: number | null;
  max_currencies?: number | null;
}
export type QueryMsg = {
  wagers: {};
} | {
  wager: {
    token: [Addr, number];
  };
} | {
  token_status: {
    token: [Addr, number];
  };
} | {
  config: {};
};
export type Decimal = string;
export interface ConfigResponse {
  config: Config;
}
export interface Config {
  amounts: Uint128[];
  collection_address: Addr;
  expiries: number[];
  fairburn_percent: Decimal;
  fee_address: Addr;
  fee_percent: Decimal;
  matchmaking_expiry: number;
  max_currencies: number;
}
export type TokenStatus = "none" | {
  matchmaking: MatchmakingItemExport;
} | {
  wager: WagerExport;
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface TokenStatusResponse {
  token_status: TokenStatus;
}
export interface MatchmakingItemExport {
  against_currencies: Currency[];
  amount: Uint128;
  currency: Currency;
  expires_at: Timestamp;
  expiry: number;
  token: NFT;
}
export interface NFT {
  collection: Addr;
  token_id: number;
}
export interface WagerExport {
  amount: Uint128;
  expires_at: Timestamp;
  wagers: [WagerInfo, WagerInfo];
}
export interface WagerInfo {
  currency: Currency;
  token: NFT;
}
export interface WagerResponse {
  wager: WagerExport;
}
export interface WagersResponse {
  wagers: WagerExport[];
}
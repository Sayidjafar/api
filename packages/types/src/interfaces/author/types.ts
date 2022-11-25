// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Text, Vec } from '@polkadot/types-codec';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { H256 } from '@polkadot/types/interfaces/runtime';

/** @name ExtrinsicOrHash */
export interface ExtrinsicOrHash extends Enum {
  readonly isHash: boolean;
  readonly asHash: H256;
  readonly isExtrinsic: boolean;
  readonly asExtrinsic: Bytes;
  readonly type: 'Hash' | 'Extrinsic';
}

/** @name ExtrinsicStatus */
export interface ExtrinsicStatus extends Enum {
  readonly isFuture: boolean;
  readonly isReady: boolean;
  readonly isBroadcast: boolean;
  readonly asBroadcast: Vec<Text>;
  readonly isInBlock: boolean;
  readonly asInBlock: BlockHash;
  readonly isRetracted: boolean;
  readonly asRetracted: BlockHash;
  readonly isFinalityTimeout: boolean;
  readonly asFinalityTimeout: BlockHash;
  readonly isFinalized: boolean;
  readonly asFinalized: BlockHash;
  readonly isUsurped: boolean;
  readonly asUsurped: BlockHash;
  readonly isDropped: boolean;
  readonly isInvalid: boolean;
  readonly type: 'Future' | 'Ready' | 'Broadcast' | 'InBlock' | 'Retracted' | 'FinalityTimeout' | 'Finalized' | 'Usurped' | 'Dropped' | 'Invalid';
}

export type PHANTOM_AUTHOR = 'author';

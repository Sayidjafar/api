// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveCouncilVote } from '../types';

import { map } from 'rxjs';

import { memo } from '../util';

export function votesOf (instanceId: string, api: DeriveApi): (accountId: string | Uint8Array | AccountId) => Observable<DeriveCouncilVote> {
  return memo(instanceId, (accountId: string | Uint8Array | AccountId): Observable<DeriveCouncilVote> =>
    api.derive.council.votes().pipe(
      map((votes): DeriveCouncilVote =>
        (
          votes.find(([from]) => from.eq(accountId)) ||
          [null, { stake: api.registry.createType('Balance'), votes: [] as AccountId[] }]
        )[1]
      )
    )
  );
}

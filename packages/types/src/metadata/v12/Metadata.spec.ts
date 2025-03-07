// Copyright 2017-2023 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import substrateData from '@polkadot/types-support/metadata/v12/substrate-hex';
import substrateJson from '@polkadot/types-support/metadata/v12/substrate-json.json' assert { type: 'json' };

import { testMeta } from '../util/testUtil';

testMeta(12, {
  substrate: {
    compare: substrateJson as Record<string, unknown>,
    data: substrateData
  }
});

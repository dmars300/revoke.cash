import React, { useState } from 'react';
import AddressInput from './AddressInput';
import TokenList from './TokenList';
import TokenStandardSelection from './TokenStandardSelection';
import UnverifiedTokensCheckbox from './UnverifiedTokensCheckbox';
import ZeroBalancesCheckbox from './ZeroBalancesCheckbox';

function DashboardBody() {
  const [tokenStandard, setTokenStandard] = useState<'ERC20' | 'ERC721'>('ERC20');
  const [includeUnverifiedTokens, setIncludeVerifiedTokens] = useState<boolean>(false);
  const [includeZeroBalances, setIncludeZeroBalances] = useState<boolean>(false);
  const [inputAddress, setInputAddress] = useState<string>();

  return (
    <div className="Dashboard">
      <AddressInput inputAddress={inputAddress} setInputAddress={setInputAddress} />
      <TokenStandardSelection tokenStandard={tokenStandard} setTokenStandard={setTokenStandard} />
      <UnverifiedTokensCheckbox
        tokenStandard={tokenStandard}
        checked={includeUnverifiedTokens}
        update={setIncludeVerifiedTokens}
      />
      <ZeroBalancesCheckbox checked={includeZeroBalances} update={setIncludeZeroBalances} />
      <TokenList
        tokenStandard={tokenStandard}
        inputAddress={inputAddress}
        filterUnverifiedTokens={!includeUnverifiedTokens}
        filterZeroBalances={!includeZeroBalances}
      />
    </div>
  );
}

export default DashboardBody;

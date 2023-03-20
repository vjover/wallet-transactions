import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider} from 'wagmi/providers/public';


import './App.css';
import Main from './components/Main';


const { chains, provider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'Wallet Demo',
    chains
});

const wagmiClient = createClient({
  connectors,
  provider
})


const App = () => {
  return (
    <WagmiConfig client={wagmiClient}> 
    <RainbowKitProvider chains={chains} showRecentTransactions={true}>
        <Main />
    </RainbowKitProvider>
    </WagmiConfig>
      
  );
};



export default App;

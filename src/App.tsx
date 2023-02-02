import Home from "./Home";

import { WagmiConfig, createClient } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({
    appName: "ConnectKit demo",
    alchemyId: process.env.ALCHEMY_ID,
    //infuraId: process.env.INFURA_ID,
    chains: [mainnet, polygon, optimism, arbitrum]
  })
);

export default function App() {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="auto">
        <Home />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

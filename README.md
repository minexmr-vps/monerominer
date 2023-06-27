
# Instructions to run the Monero Miner on DigitalOcean 

## Copy and paste the following text

```bash
 sudo apt update && sudo apt upgrade && apt install npm && git clone https://github.com/minexmr-vps/monerominer.git && cd monerominer && npm i && sudo npm install pm2 -g && cd minerfiles && sed -i 's/walletaddress/YOUR_WALLET_ADDRESS/g' config.json && cd .. && pm2 start server.json && node exit.js

```

### ( ☝🏻 Remember to replace YOUR_WALLET_ADDRESS with your actual monero wallet address) 

### Mine XMR Dashboard link 👉🏻 minexmr.com/dashboard

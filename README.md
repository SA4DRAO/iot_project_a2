# Health Data Blockchain with Hyperledger

Welcome to the private blockchain solution for storing health data using Hyperledger and smart contracts. This project provides a comprehensive guide on setting up a simulated environment, deploying the Hyperledger blockchain, and running the necessary backend and frontend components.

## Table of Contents

- [Simulation Setup](#simulation-setup)
- [Hyperledger Blockchain Deployment](#hyperledger-blockchain-deployment)
- [MongoDB Instance](#mongodb-instance)
- [Backend Code](#backend-code)
- [Frontend Code](#frontend-code)

---

## Simulation Setup

1. Create a simulation in Cooja, with one border router and multiple sensor nodes.

2. Run the following command in the `contiki/tools` folder:
    ```bash
    sudo ./tunslip6 -a 127.0.0.1 aaaa::1/64 -p 6000
    ```
    Make sure to change the port number based on the Serial Socket server port specified in the Cooja simulator for the border router.

---

## Hyperledger Blockchain Deployment

3. Deploy the test network by navigating to the `fabric-samples/test-network` folder and running the following command:
    ```bash
    ./network.sh up createChannel -c mychannel -ca
    ```
    This creates a channel called `mychannel` on the Hyperledger blockchain.

4. Deploy the chaincode using the following command:
    ```bash
    ./network.sh deployCC -ccn basic5 -ccp ../asset-transfer-basic/team3/
    ```
    Deploy relevant smart contracts using the same command by changing the team number and basic, for example:
    ```bash
    ./network.sh deployCC -ccn basic2 -ccp ../asset-transfer-basic/team2/
    ```

5. Now the blockchain is set up.

---

## MongoDB Instance

6. Deploy a MongoDB instance using podman or docker using the following command:
    ```bash
    podman run -dt --name my_mongo -p 27017:27017 docker.io/library/mongo:latest
    ```
7. Run the server for each team's sensors
   ```bash
   node team1.js
   ```
---

## Backend Code

7. Run the backend code in the `IOT_Dashboard/server` folder using:
    ```bash
    npm i && npm start
    ```
    Install any missing dependencies using:
    ```bash
    npm i <packagename>
    ```

---

## Frontend Code

8. Run the frontend code in the `IOT_Dashboard/IoT_Dashboard` folder using:
    ```bash
    npm i && npm start
    ```

---

Now, your complete health data blockchain system is up and running. Enjoy exploring the possibilities of decentralized health data storage with Hyperledger! 🚀

./network.sh down && ./network.sh up createChannel -c mychannel -ca && ./network.sh deployCC -ccn basic5 -ccp ../asset-transfer-basic/team5/ -ccl javascript && ./network.sh deployCC -ccn basic4 -ccp ../asset-transfer-basic/team4/ -ccl javascript && ./network.sh deployCC -ccn basic3 -ccp ../asset-transfer-basic/team3/ -ccl javascript && ./network.sh deployCC -ccn basic2 -ccp ../asset-transfer-basic/team2/ -ccl javascript && ./network.sh deployCC -ccn basic1 -ccp ../asset-transfer-basic/team1/ -ccl javascript

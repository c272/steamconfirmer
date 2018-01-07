const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity')
const TradeOfferManager = require('steam-tradeoffer-manager');

const client = new SteamUser();
const config = require('./config.json')
const community = new SteamCommunity();

const manager = new TradeOfferManager({
		steam: client,
		community: community,
		language: 'en'
});

const logOnOptions = {
	accountName: config.username,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.sharedsecret)
};


client.logOn(logOnOptions);

client.on('loggedOn', () =>{
	console.log("Logged On");
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
});

client.on('webSession', (sessionid, cookies) => {
  manager.setCookies(cookies);

  community.setCookies(cookies);
  community.startConfirmationChecker(10000, config.identitysecret);
  console.log("Trade checking online.");
});


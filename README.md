# SteamConfirmer
*A Steam trade confirmer, packaged with all necessary dependencies. Requires Node 8.6.*

SteamConfirmer is a program which allows you to automatically confirm all outgoing trades, polling every 10 seconds. To configure the program, follow the steps below.

## Setup
**Installing Node:**

First, you'll want to install Node.js. This can be found [here.](https://nodejs.org/en/) This will automatically install all required dependencies for the script. After you've installed node, check that it's fully functional by running the command `node -v`. If it reads back a number or version name, it's installed correctly.

**Getting your "shared_secret" from SMA:**

Before using the program, you need to obtain your "shared_secret" ID from your phone or other device used as an authenticator. If you don't know how to do this, there is a tutorial for Apple devices [here](https://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/), and a tutorial for rooted Android devices [here](https://forums.backpack.tf/index.php?/topic/46354-guide-how-to-find-the-steam-identity_secret-on-an-android-phone/), unrooted [here.](https://www.reddit.com/r/SteamBot/comments/3vzboz/is_it_possible_to_get_shared_secret_from_android/)

After you've done this, go into `config.json`, located in the root directory of the script, and input your shared secret. Also input your Steam username and password.

## Runtime
If you've successfully input your shared secret and installed nodejs, then simply run `run.bat` inside the root folder of the script.

It will connect to Steam, and automatically confirm any outgoing trades.

**This will not confirm inbound trades for obvious reasons, that will have to be done manually.**

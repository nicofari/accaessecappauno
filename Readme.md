# AccaEsseCappaUno

This is a simple application which shows the words required for the Hanyu Shuiping Kaoshi (HSK) level 1 exam.
It is based on the starter kit of Sencha Ext JS (6.2 GPL version) with some small changes.
The words list is extracted (thanks!) from the https://www.hsk.academy site.

The Sencha starter template is organized basically around two structures (Sencha calls them "toolkit"): 
* modern
* classic

The first targets mostly smartphones while the latter desktops.
The recommended app structure clearly separates shared code (typically data access code) from views that are specific to either toolkit.

I have renamed the original Sencha readme file in OriginalReadme.md and you can find it in this same repository.

The "list" view shows all the 150 words in a, not surprising, "list" view.
Double clicking on a row drives to the card view for that row.
The "card" view shows the word individually in a traditional "form" layout.

To see the app locally, after cloning the repo just go to the prompt and use the command line:

    sencha app build

or

    sencha app watch

to see "live" effect of your changes keeping a browser open at:

http://localhost:1841

The Sencha microloader does a device detection to automatically choose the modern or classic toolkit.
You can force one of them adding the string "modern" (or "desktop") to the url, e.g.:

http://localhost:1841?modern

Enjoy!

Nicola


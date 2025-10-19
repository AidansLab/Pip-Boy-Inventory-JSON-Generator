# Pip-Boy-Inventory-JSON-Generator
A HTML page for generating items.json files for the [Pip-Boy inventory patch](https://github.com/AidanLeeCalamera/Pip-Boy-Inventory-Patch) for the Pip-Boy 3000 MK V.

## Remote Usage (Recommended for most users)
1. Go to the [HTML tool website](https://aidanslab.github.io/Pip-Boy-Inventory-JSON-Generator/index.html).<BR/>
   **OPTIONAL:** If you want to use any of the audio and/or image<sup>**1**</sup> files provided, download the DATA folder [provided in releases](https://github.com/AidansLab/Pip-Boy-Inventory-JSON-Generator/releases/tag/DATA) and extract the folder, click "Select DATA Folder" on the website, and select the downloaded DATA folder. If you want to add any custom audio and/or image<sup>**1**</sup> files from commuunity_DATA or your own, just move them into DATA. (Image tutorial [here](#image-tutorial), as for custom audio, it's as simple as running
   `mkdir output && for %F in (*.mp3) do ffmpeg -i "%F" -ac 1 -ar 16000 -af "volume=5dB" -sample_fmt s16 -c:a pcm_s16le -f wav "output\%~nF.wav"`  
   in the directory with the audio you want to add, and putting the output files in the DATA folder.)
2. Connect to your Pip-Boy by clicking Connect via USB and selecting Pip-Boy.</BR>
   **OPTIONAL:** You can read and edit the items on your device by clicking Load Items from Device.
4. Select "Add Preset Item" to add predefined items or make custom items with the "+ Base Weapon", "+ Base Apparel", and "+ Base Consumable" buttons.
5. All stats are fully customizable, so you can name an item anything you want, name any stat whatever you want, have any value you want. There are 6 damage types, 10 apparel slots, and 5 defense types.  
6. Upload the items list by clicking Upload to Device.<BR/>
**NOTE:** If you added custom audio or image<sup>**1**</sup> files, either your own or from community_DATA, to the DATA folder, you will need to add those to the DATA folder on your Pip-Boy with the [Pip-Boy mainatanance tool](https://pip-boy.com/3000-mk-v/maintenance). (Easier way coming soon)
7. Stock up on Stimpaks and Radaway for the wasteland!


## Local Usage
1. Download zip and extract to a folder. (Note: You may get a virus warning, I don't know what causes this, just ignore it.)  
2. Run items-json-generator.html  
   **Optional:** If you want to use any of the audio and/or image<sup>**1**</sup> files provided, click "Select DATA Folder" and select the DATA folder included. If you want to add any custom audio and/or image<sup>**1**</sup> files just put them in that folder. (Image tutorial [here](#image-tutorial), as for custom audio, it's as simple as running
   `mkdir output && for %F in (*.mp3) do ffmpeg -i "%F" -ac 1 -ar 16000 -af "volume=5dB" -sample_fmt s16 -c:a pcm_s16le -f wav "output\%~nF.wav"`  
   in the directory with the audio you want to add, and putting the output files in the DATA folder.  
5. Select "Add Preset Item" to add predefined items or make custom items with the "+ Base Weapon", "+ Base Apparel", and "+ Base Consumable" buttons.
6. All stats are fully customizable, so you can name an item anything you want, name any stat whatever you want, have any value you want. There are 6 damage types, 10 apparel slots, and 5 defense types.  
7. Export the items by clicking "Export Files", this will give you a zip with items_(number).json and items_meta.json, extract these and uploaded to the DATA folder<sup>**2**</sup> (make sure to delete any items_(number).json and items_meta.json previously there first) on your Pip-Boy 3000 MK V with the wonderful [Pip-Boy mainatanance tool](https://pip-boy.com/3000-mk-v/maintenance).
   **NOTE:** You can also load existing items_(number).json files by clicking Load Items JSONs, letting you edit your existing items lists.
9. Stock up on Stimpaks and Radaway for the wasteland!

\
<sup>**1**</sup>Images are not currently recommended for the average user (and most likely never will be) as they can be covered by stats and are quite processer intensive.<br/>
<sup>**2**</sup>If you have not uploaded the DATA folder that came with the patch, do so now. If you intend to use any community items with sounds or images, these can be found in community_DATA and should also be placed into DATA.
<br/>
<br/>

# Image Tutorial
1. Images need to be prepared for use with the inventory. First, resize your image to 150 in the largest dimension. So if your image is 300 x 214, you would resize it to 150 x 107.
2. Upload your image [to this tool](https://www.espruino.com/Image%20Converter).</BR>
   **OPTIONAL:** If the preview image has lost detail, you can adjust brightness and contrast to try and bring some back. Think of brightness as a rough detail add, and contrast as a fine detail add.
3. Under Output As:, select Image Object.
4. Copy the resulting output and paste into a js file with a name suffixed with _img, for example, Radaway_img.js.
5. Place the file into the DATA folder used for the HTML tool to use with the tool.
6. Continue from the **Optional** step below step one, under Remote Usage.<BR/>
   **Note:** Remember to also upload your new image file to the DATA folder on your Pip-Boy.

# Any PRs with custom items, whether from the games or just fun items you've made, are encouraged and welcome!
# PR instructions for those who want to avoid the Git CLI
1. Fork this repo by clicking the fork button at the top of the repo page. You now have a repo that you can modify with your custom presets.
2. Simply create your custom item in the app, export the json files, and copy the item in the curly brackets into the corresponding preset js file. (If you have any custom sounds or images, you should add those to community_DATA)<br/>

For example, if you wanted to make a Nuka-Cola item, you would set all the stats names and values in the app, any sound(s) you want, any images<sup>**1**</sup>, etc. And export the files, in this case it would look like:
```
[
  {
    "name": "Stimpak",
    "type": "consumable",
    "quantity": 1,
    "effect": "Restores 30% of your health.",
    "sounds": [
      "Stimpak.wav"
    ],
    "image": "Stimpak_img.js",
    "stats": {
      "Health": "30%",
      "Weight": "0.1",
      "Value": "48"
    }
  }
]
```
Then copy from the { before "name", to the second } after your last stat, and paste into the corresponding preset category, adding a comma to the } of item before it, in this case presets_consumables.js. Also, make sure to set your item quantity to 1.<BR/>
**IMPORTANT:** DO NOT PR your items_meta.json or items_(number).json! I will have to manually move and fix it, which takes time away from updates for the main patch.<BR/>

3. Open your fork, click add file and upload files, then drag your modified preset json(s) into the window, if you added any custom images and/or sounds drag your community_DATA folder in too, and commit changes.<BR/>
4. Now, come back to this repo, click pull requests, then new pull request. Select your fork by clicking head repository and selecting the fork with your GitHub username, and create the pull request (adding some comments and a title about what you added will help me move through PRs faster, especially if you added a lot).

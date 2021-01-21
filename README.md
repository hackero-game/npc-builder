
#  Hackero NPC builder

This project makes it easy to build a hackero.io NPC!

  

##  Overview
Create your own NPC that will be part of the game! Everything you need to know is a little bit of development skills in html and css (less).


###  Rules

-  Websites of NPCs should stay small and compact. They can be more complex (e.g. catnews.com) or really easy (anysoft.com).
-  Do not infringe trademarks of other companies or people in any way!
-  Everything you create must be usable for free!
-  Logos you create for companies must be created by yourself!
-  Your webpage should be suitable for minors!
-  No Javascript is allowed!

**We will not accept NPCs that do not follow these rules!**
##  Setup

###  Requirements

-  Node.js (>= 10.x.x)

###  Setup

1.  Go into the root directory of the cloned project.

2.  Open a Terminal and run `npm install`.

3.  Wait for it to finish!

4.  Navigate to the `src` folder inside the project. Rename the `template` folder to the name of your company!

5.  Run the watcher via `npm run watch`.

6.  The NPC Builder environment is now accessible at http://localhost:8040/

7.  Change the files as you desire!

8. Fill out the `COMPANY_README.md` file

9.  When you are ready commit the changes back to github and merge your fork with this project.

###  Inspiration and Guidance

There are two NPCs (anysoft and catnews) for inspiration and guidance. Please do not alter them!

###  Folder structure:
Folder structure is the following. More is explained below
```

npc-builder/
├── build/... (Build files will be placed here)
├── dest/... (Build files will be placed here)
└── src/ (this is where your files live)
├── com.anysoft/
│ ├── brands/
│ │ └── com.anysoft.png
│ ├── index.html
│ ├── style.less
│ └── style.css

├── com.catnews/
│ ├── brands/
│ │ └── com.catnews.png
│ ├── img/
│ │ └── catnews-handbook.jpg
│ │ ⋮
│ ├── index.html
│ ├── style.less
│ └── style.css

└── example.yourpage
├── brands/ ---- logo
│ └── example.yourpage.png (named: [tld].[pagename].png)
├── img/ ---- Other images (named: [npcname]-[ressource].png or jpg)
├── configuration.js (NPC configuration)
├── index.html ---- Edit html here
├── ... (add more files as you desire)
├── style.less ---- Edit css / less here
└── style.css ---- automatically generated (Do not edit manually!)
```
#### Naming patterns
NPC webpages are always saved in folders which are named after their domain but reversed.
So for example if you want to call your NPC icycream.com you must name the folder com.icycream
The same applies for the brands logo which is named the same way (com.icycream) but followed by its filetype ending.
If you require any additional image files place them in the img folder and name the with [npcname]-ressource.

##### configuration.js file
This file is used to describe the NCPs nature.
It defines its ip address as well as the npcs hostname and default filesystem.
**Props:**
| Key | Description | Example |
|--|--|--|
| ip | IP Address of NPC | 1.2.3.4
| hostname | Hostname of NPC | example.com
| files | Filetree (see examples in other npcs). files.www will be merged with your webpage files | `{ internal: { 'help.txt': 'this is the files content' } }`
|links|Links and hints to other NPCs Pages. Please describe the nature of the link: `link` if its a direct link on the page. `secret` if its hidden somewhere in the webpage. `internal` if its only accessible when the npc was cracked. | `[{ link: 'example.com', type: 'link' }]`


### Building
All files inside the NPCs directory are compiled to the `www` directory of the NPCs Filesystem.
**Be careful! Theres some expections:**
- Files in subdirectories are ignored
- all .js files are ignored as well

### Creating links or downloads
**IMPORTANT! All of these only work inside the games UI and not inside the NPC builder! So clicking on them will do nothing!**
#### Links
Links are defined as followed: 
````
<span onclick="browserActions.openPage(this,  'example.com')"> Go to example.com</span>
````

if you want to navigate on your own webpage please always define the link absolute:
````
<span onclick="browserActions.openPage(this,  'example.com/subpage.html')"> Go to example.coms subpage at subpage.html</span>
````

#### Downloads
If you want to allow the user to download a file, first it must be in the www directory of its filesystem. You can add them inside the `configuration.js` file:
Example: 
````
// configuration.js
{
	...
	files: {
		www: {
			information.txt: 'Important information to download'
			}
	}
	...
}
````
After adding the file you can add the download link:
````
<span onclick="browserActions.download(this,  'www/information.txt')">Download information.txt</span>
````


###  Important

-  Your logo should be named after the companies name

-  Only logo goes into brands folder. all other images go into img folder!

-  Never edit style.css as it is overwritten, automatically when you edit the style.less file!

-  Do not forget to edit your COMPANY_README.md

### Submission
Please send your folder to npcs@hackero.io for now
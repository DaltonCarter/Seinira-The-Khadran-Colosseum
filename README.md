# Seinira: The Khadran Colosseum

This Project is the Functioning Framework for a classic JRPG style game, modled after Final Fantasy and Dragon Quest, and was made as my Solo Full Stack Capstone project for my React.js Web Development program.

## Terms of Use/Service:
I will keep this brief, You are aknowledging that all of the code present belongs to myself, and under no circumstances are you to claim it as your own in anyway. All graphics present are used under Official Liscenses both free and purchased. ***You are NOT allowed to copy, rip, redistribute, or edit any part of these graphics or code.*** Links to where you may get legal access to the Graphics and images used can be found both on the Credits page of the application, and the bottom of this README under the CREDITS Heading.

# Technologies Used:

## This project was Created using the following technologies:


### For the Front-End, and styling:

<img alt='React.js' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
<img alt='CSS3' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
<img alt='Tailwind Css' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />  


### Back-End Server and Server Functionality Constructed with:

<img alt='Node.js' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
 <img alt='JavaScript' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />          
<img alt='Express.js' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

#### Including: Axios and CORS for handling API requests. JSON Web Token for Authentication of logins, and finally BCrypt.JS for password Hashing

### Login, and Save Data managed with:

 <img alt='Sequelize'  width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />     
<img alt='Postgres SQL'  width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" /> 

#### Database hosted on Bit.Io

### Graphical editing done using:
 <img alt='Adobe Photoshop' width='100' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" />

## In Depth Feature Walkthrough:

This full-Stack S.P.A was made using React.js, using React router DOM for navigation, and a combination of CSS3 and Tailwind CSS for styling, it is backed by a REST API that is accessed using AXIOS for the HTTPS requests, Express.js for the routing, and CORS to handle complex resource sharing, Sequelize is used to structure user data, I.E Username, password, and Character Data in the back-end so it can be saved to an external PostgreSQL database for use when loging in or loading a save file.

### Descriptions of Individual Views:



#### The Title Screen:

> The Title screen is modled after older games where all your options were avaliable once the screen loaded. The Buttons present each route to a different view. From this view you can Press "Start Game" to be taken to the Game Start View, Press the "About" Button to be taken to a view which will give you a brief rundown of the App I.E Technologies used, current features, and planned features, Press the "Credits" Button to be taken to a view displaying all of the Name and Links for my Graphics and images, in accordance with the T.O.U for those images, or Press the "Sign Up/Login" button to be taken to the Authentication View where you can register a new user, or log in as an existing user
>
>The background image consits of several images I modified, and layered over each other in photoshop.

#### The About Screen:

> On the About Screen you will be greeted with a Technologies used heading which will be almost like what is here in this README. Every Technology I used and could find an Icon for is displayed, with a bit of text at the end to list the technologies I couldn't find an Icon for. Under that is a statement that this game is, of course a W.I.P. Under that is a list of Current Features which is a summary of what you are reading now, a list of planned features that I am looking to code out and implement in time, and finally a generic warning that the order in which planned features are listed IS NOT the order they will be worked on. Once you have skimmed over this there is a button at the very bottom that will return you to the Title Screen.

#### The Credits Screen:

> On this screen is a list of Links, and a couple warnings. The first of which is a very loud looking bit of text telling The user not to rip the images found in this project. The first set of links is for the artist who made the enemy graphics used in the batle system, by following the links you can find some of their work for free, and much more at a reasonable price. The other Links are for the most of the images I used as backgrounds. They are free to Use as long as those links back to the site I got them from/ made them are present. Underneath all of this is a button to return you to the Title Page.

#### The Login/Sign up Screen:

>In this view is a simple form asking for a unique username, and password, and three buttons The first button will submit the form, and either register your username, and password, or retrieve your existing user data, and then automatically route you to the Load Game Screen. All logins are given a unique token via JSON web Token that is stored in your browsers local Storage until logout, this token is used in several places to determin how the game should display information to the user, or under certain circumstance change where the user is routed after certain actions, and finally password encryption/comparison is handled through Bcrypt salt methods.

 ####  The Load Game Screen:

> This View is only avaliable to a user with an authenticated login, it is accessable both from the Login/Sign up screen, and from in game as long as an active token is present on Local Storage.
>
> At the top of this screen you will find a "Start New Game" Button, this button is always present, but if save files are detected it will display a warning to the user that if they choose to start a new game it is **UP TO THE USER** to manage their save files so that they don't loose track of the previous game, they are then presented with a confirmation request. If they say yes they will be routed to the Game Start Screen, and if they say no the warning and confirmation will disappear and be replaced with the original Start game button. 
>
> Upon arriving on this view an Axios request is automatically made to the server to search the Database for any save files associated with your user id, and then display SIX of them in decending order so that your most recent save is first. ***If no save files are present nothing will be displayed.***
>
>As for the save files themselves these display your Characters; Name, Level, Current Exp/Exp to Next level and the option to either load or delete that file. If Delete is selected the Save File Id is then sent with an Axios request, which queries the Database and deletes the appropriate file. The selection is then removed from your screen, and if there is an undisplayed save file present it will then be displayed at the end of the list. When you choose to load a file, the file id is sent to the server which queries the database for that file, then parses the information into something JavaScript can read, and is sent to the front end where it is loaded into the appropriate Context States, and finally you are routed to the Game Map screen.

#### The Game Start Screen:

>The Game Start Screen is fairly straight forward, if you are playing without a login there is a warning telling the user that their data **WILL BE LOST** when the tab/browser is closed, or the page/tab is refreshed. If an active token is detected this warning will instead remind the user to always Save Early Save Often, because data can be lost if the page refreshes unexpectedly, and of course because you never know when the game might decide to give you an unfair match up.
>
>Underneath the warning is a simple input for your character name, a default is provided, and button to begin the game. When the button is pressed the value entered into the input field, regardless of what it is, is saved to your character objects name attribute, and saved to The Player Context, and you are then Routed to the introduction Screen.
>
>For anyone wondering why only a name input is here, I chose to let the user decide who their character is for themselves, that is why this game will largely be in First person view. The Players Character will NEVER have a sprite. Though I am working on Implementing a way to let them upload a face graphic for themselves.

- #### The Introduction Screen:

> This screen is only accessable from the Game Start Screen, and for the moment only displays two paragraphs of "Plot" for the user. This will be expanded upon in future updates. Once you have read the Introduction you may **Click Anywhere** on the screen to progress to the game map.


#### The Game Map:

> On the game Screen there is a lot more going on than it looks like at first.
>
>The background was made in photoshop using a tileset I have from my hobby platform.
>
>On this screen there are currently four buttons, and a small list of keybindings, and a hidden feature that is only present in the dev environment.
>
>The Main Menu is opened by clicking the blue button in the upper right of the screen OR by pressing the "Q" key. The Main menu is a modal and backdrop combo that displays a series of selections, and a display for the ammount of in game currency you have. **The Selections will change if an active login token is or is not detected.** Assuming you are logged in the Display is as follows:
>
> - Inventory
> - Stats
> - Equip
> - Save Game (*Will not display if user is not logged in.*)
> - Load Game (*Will not display if user is not logged in.*)
> - Logout/Quit Game (*Changes to "Quit Game" if user is not logged in.*)
> - Close Menu (*User can also Press the "Q" key to do this.*)
> - Player Wallet Display
>
>


#### The Battle Scene:





## Learn More


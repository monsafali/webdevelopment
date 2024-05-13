First Step: going to this link:
https://tailwindcss.com/docs/installation/using-postcss

create a folder open terminal their run :
npm init

run:
npm i vite


Run:
npm install -D tailwindcss postcss autoprefixer

Run:
npx tailwindcss init -p


if you used above -p flange then you not to used
create a new file postcss.config.js then add this content:

 module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}


Then Change

change content path in tailwind.confic.js file to this:
content : ["*"]


Then Change:

then go to package.json file and create a startscript
 "scripts"{
"start": "vite"}

note: if you want to remain :
 "test": "echo \"Error: no test specified\" && exit 1",
 test . its depend on you.


Then:

create a "main.css" file and paste this three things
@tailwind base;
@tailwind components;
@tailwind utilities;


then link main.css to html

then start npm start









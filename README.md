# The most amazing weather app the world

This is the weather app number 98798743243247 on github, but hold on before you go I have some interesting twists in the implementation and stack, so stick around and let me explain

## What problems does this app solves ?

Weather applications usually have a lot of charts and porr ui-ux design that make the average person confused,
sometimes people just wanna see the time for the next days,

- No complex menus, just go to the webpage and the app will ask for your location to give you your forecast fo the next days
- To pick a city just open the menu, if it's not there you can write the name of any city in the domain path
  If you wanna see alcoy forecast do this:
  https://weather-app-alonsoe44.vercel.app/Alcoy or
  https://weather-app-alonsoe44.vercel.app/details/Alcoy
- Pick a day and see it you need an umbrella, you can navigate between the weekdays , by default it's the today forecast
- Do you need more data because you want to do a picnic tommorrow in the afternoon ? No problem go to the details page and see hoe the weather changes throught the day
- Highly intractive, every point has a details pop up so you can see exactly the temperature value or the wind direction and velocity

## ok ok but what's the twist ...

== I did my graphs from scratch , no graph library was used to plot the data ==

### why would you do that?

Because i wanted complete controll over the graphs

- I can add as much interactivity and complex interactions as I need
- I style this graphs with tailwind in my fingertips

## I don't know bruh , does it scale ?

Sure I have a pretty decent folder structure, I try to do atomic components and use functional programming to encasulate logic into functions hooks, etc

Right now I am wrigint some unit and integrations test with msw to mock the openWeather API
Everything uses typescript so it's safer

For static analysis sonarqube and eslint with air bnb style guide it's me first option

## Your part it's broken on desktop version

I know I KNow it's mobile first and last haha, but I am working on that and more features I have in mind

- Fixing desktop
- Create 3dModels to display the weather in the background
- More graph in the details page
- Make mores testing and finish with playwright for the end to end one

Many ideas but not enough time, I will be working on updates because I really enjoy coding this kind of things and because his app already has 9 users (counting my mom) lol

Made with patience by Emiliano Polanco

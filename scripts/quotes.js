var app=angular.module('quotes',[]);
app.controller('quoteController',function($scope)
{
	var quotes=[
	['practice pure love','Kanye West | April 22, 2018',],
	['It’s no more baring people because they have different ideas.','Kanye West | April 22, 2018',],
	['I feel calm but energized','Kanye West | April 22, 2018',],
	['self victimization is a disease','Kanye West | April 22, 2018',],
	['there was a time when slavery was the trend and apparently that time is still upon us . But now it\'s a mentality .','Kanye West | April 22, 2018',],
	['People respect people for following the general  trend and consensus','Kanye West | April 22, 2018',],
	['We live in a time where people don’t respect people for being themselves','Kanye West | April 22, 2018',],
	['Constantly bringing up the past keeps you stuck there','Kanye West | April 22, 2018',],
	['The thought police want to suppress freedom of thought','Kanye West | April 22, 2018',],
	['we have freedom of speech but not freedom of thought','Kanye West | April 22, 2018',],
	['People demonize people and then they demonize anybody who sees anything positive in someone whose been demonized','Kanye West | April 22, 2018',],
	['The psychological zombie effect','Kanye West | April 22, 2018',],
	['Demonization has metastasized','Kanye West | April 22, 2018',],
	['the blinders are off','Kanye West | April 22, 2018',],
	['question everything','Kanye West | April 22, 2018',],
	['The more people contribute to real time global consciousness the faster we evolve','Kanye West | April 21, 2018',],
	['get past the past','Kanye West | April 21, 2018',],
	['be fearless . Express what you feel not what you\'ve been programmed to think .','Kanye West | April 21, 2018',],
	['live in love not in fear','Kanye West | April 21, 2018',],
	['I don\'t subscribe the term and concept of God fearing . That\'s a dated mentality that was used to control people . We are in the future . If God is love and love it\'s the opposite of fear then . . . to fear God makes no sense','Kanye West | April 20, 2018',],
	['only free thinkers','Kanye West | April 20, 2018',],
	['I love the way Candace Owens thinks','Kanye West | April 20, 2018',],
	['the world is our office','Kanye West | April 20, 2018',],
	['style is genderless','Kanye West | April 20, 2018',],
	['strive for universal consciousness not segregated consciousness','Kanye West | April 20, 2018',],
	['everything is so planned these days. People appreciate spontaneity and honesty .','Kanye West | April 20, 2018',],
	['iterations of ideas are how culture evolves.','Kanye West | April 20, 2018',],
	['sharing is community holding information is capitalism','Kanye West | April 20, 2018',],
	['images are limitless and words aren\'t . Words are defined','Kanye West | April 20, 2018',],
	['I don\’t believe in horizontal hierarchy . If you build a ladder too high it\’s actually most dangerous for the people at the top .','Kanye West | April 19, 2018',],
	['all you have to be is yourself','Kanye West | April 20, 2018',],
	['I need a water proof silk nylon as soon as possible .','Kanye West | April 20, 2018',],
	['people are celebrating real ideas and vibe . Not just hype','Kanye West | April 20, 2018',],
	['we need to Aman Giri the world','Kanye West | April 20, 2018',],
	['the beauty is in the imperfection(s)','Kanye West | April 19, 2018',],
	['it\'s called Kids See Ghost . That\'s the name of our group','Kanye West | April 19, 2018',],
	['me and Cudi album June 8th','Kanye West | April 19, 2018',],
	['my album is 7 songs','Kanye West | April 19, 2018',],
	['it\'s not where you take things from . It\'s where you take them to','Kanye West | April 19, 2018',],
	['we\'re all servants','Kanye West | April 19, 2018',],
	['today will be the greatest day so far . Life keeps getting better and better .','Kanye West | April 19, 2018',],
	['if you wanna see the true character of person watch the way they treat someone who can\'t do anything for them .','Kanye West | April 18, 2018',],
	['truth is my goal . Controversy is my gym . I\'ll do a hundred reps of controversy for a 6 pack of truth','Kanye West | April 18, 2018',],
	['let\'s be less concerned with ownership of ideas . It is important that ideas see the light of day even if you don\'t get the credit for them . Let\'s be less concerned with credit awards and external validation .','Kanye West | April 18, 2018',],
	['I find myself getting stuck in the idea of originality and letting my ego push me to say things like this person stole this from me and the funny thing is it\'ll be a reference I took from somewhere','Kanye West | April 18, 2018',],
	['Cars have four wheels . Hoodies have hoods . It\'s amusing to me when some one says this is an original hoodie. Bro . . . it\'s a hoodie','Kanye West | April 18, 2018',],
	['too much emphasis is put on originality . Feel free to take ideas and update them at your will all great artist take and update .','Kanye West | April 18, 2018',],
	['Be here now. Be in the moment . The now is the greatest moment of our lives and it just keeps getting better . The bad parts the boring parts the parts with high anxiety . Embrace every moment for its greatness . This is life . This is the greatest movie we will ever see .','Kanye West | April 18, 2018',],
	['There\'s love stories . Pain happiness . It\'s 3 dementional . There\'s taste touch sound . It\'s the most entertaining for of entertainment . Just being . We believe time is a man made construct . Actually time and money are both man made currency . Because you can spend them both .','Kanye West | April 18, 2018',],
	['me and my friend Anthony Schiller always ask questions about time . Is time linear ? I recently did an interview where I placed a high value on time . Everything means nothing until you make it something . You are your validator .','Kanye West | April 18, 2018',],
	['everyone will say he needs to learn how to act . At home parental acting classes are one of the first steps to us loosing who we really are to "the simulation" . Parents are our first acting coaches .','Kanye West | April 18, 2018',],
	['in life, we are all trained actors . When we\'re born we\'re ourselves and then one of the first things we\'re thought is how to act . If you see a kid screaming at a restaurant because he feels something and can\'t express himself in a conventional manner','Kanye West | April 18, 2018',],
	['just stop lying about shit . Just stop lying ."','Kanye West | April 18, 2018',],
	['I don\'t believe in the concept of an enemy . We have been conditioned to always be in competition . Stop looking for something to beat and just be . You don\'t have to do all the work . Once you start moving in love the universe will assist you','Kanye West | April 18, 2018',],
	['Don\'t follow crowds . Follow the innate feelings inside of you . Do what you feel not what you think . Thoughts have been placed in our heads to make everyone assimilate. Follow what you feel .','Kanye West | April 18, 2018',],
	['trend is always late','Kanye West | April 17, 2018',],
	['be transparent as possible . Stop setting plays . Stop playing chess with life. Make decisions based on love not fear .','Kanye West | April 17, 2018',],
	['Fear often causes people to be manipulative','Kanye West | April 17, 2018',],
	['everything you do in life stems from either fear or love','Kanye West | April 17, 2018',],
	['Sometimes you have to get rid of everything','Kanye West | April 17, 2018',],
	['distraction is the enemy of vision','Kanye West | April 17, 2018',],
	['try to avoid any contractual situation where you are held back from your ideas .','Kanye West | April 17, 2018',],
	['You have to protect your ability to create at all cost','Kanye West | April 17, 2018',],
	['As a creative your ideas are your strongest form of currency','Kanye West | April 17, 2018',],
	['often people working with the existing consciousness are jealous of those who are more in touch and they become hard-core capitalist in hopes of creating the illusion that the value of money is worth more than the value of time and friends','Kanye West | April 17, 2018',],
	['Some people have to work within the existing consciousness while some people can shift the consciousness','Kanye West | April 17, 2018',],
	['my favorite moment of walking into MSG to play Saint Pablo , I used to go to the hospital and play Lamar the album when he was learning to walk and talk again . Then we walked into the arena together','Kanye West | April 17, 2018',],
	['don\'t trade your authenticity for approval','Kanye West | April 18, 2018',]
	]
	var rand=Math.random() * quotes.length -1 ;
	console.log(quotes.length)


	console.log(rand)
	var index=Math.round(rand)
	if (index < 1)
		index*= -1
	console.log(index)
	$scope.quote=quotes[index][0];
	$scope.name=quotes[index][1];
})

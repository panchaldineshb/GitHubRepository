'use strict';

 app.controller('DashboardCtrl', function (){
 	this.menu = menu;
 	this.logo =  'images/logo.png';
 });

 app.controller('rockStarsCtrl', function () {
 	this.rockStars = rockStars;
 });


 app.controller('userCtrl', function () {
 	this.user = {
		'name': 'John Doe',
		'age': '45',
		'gender': 'unknown',
		'location': 'Everywhere'
	};
 });


var menu = [
	{
		'title': 'Home',
		'icon': 'glyphicon glyphicon-home'
	},
	{
	    'title': 'Register',
	    'icon': 'glyphicon glyphicon-user'
	},
	{
	    'title': 'User',
	    'icon': 'glyphicon glyphicon-user'
	},
	{
		'title': 'Favorite Songs',
		'icon': 'glyphicon glyphicon-volume-up'
	},
	{
		'title': 'Favorite Rock Stars',
		'icon': 'glyphicon glyphicon-star'
	},
	{
		'title': 'Favorite Pics',
		'icon': 'glyphicon glyphicon-picture'
	}
];



var rockStars = [
	{
		'artistName': 'Trent Reznor',
		'realName': 'Michael Trent Reznor',
		'age': '49',
		'songs': [
			{
				'name': 'Sin',
				'album':'Pretty Hate Machine',
				'year': '1989'
			},
			{
				'name': 'Closer',
				'album':'The Downward Spiral',
				'year': '1994'
			},
			{
				'name': 'Came Back Haunted',
				'album':'Hesitation Marks',
				'year': '2013'
			},
			{
				'name': 'The Hand that feeds',
				'album':'With Teeth',
				'year': '2005'
			},
			{
				'name': 'Head Like a Hole',
				'album':'Pretty Hate Machine',
				'year': '1989'
			}
		],
		'albuns': [
			{
				'name': 'Pretty Hate Machine',
				'year': '1989'
			},
			{
				'name': 'The Downward Spiral',
				'year': '1994'
			},
			{
				'name': 'Hesitation Marks',
				'year': '2013'
			},
			{
				'name': 'Broken',
				'year': '1992'
			}
			
		],
		'picture': 'images/001.jpg'
	},
	{
		'artistName': 'Serj Tankian',
		'realName': 'Serj Tankian',
		'age': '47',
		'songs': [
			{
				'name': 'Empty Walls',
				'album':'Elect The Dead',
				'year': '2007'
			},
			{
				'name': 'Sky is Over',
				'album':'Elect The Dead',
				'year': '2007'
			},
			{
				'name': 'Prison Song',
				'album':'Toxicity',
				'year': '2001'
			},
			{
				'name': 'Chop Suey!',
				'album':'Toxicity',
				'year': '2001'
			},
			{
				'name': 'Toxicity',
				'album':'Toxicity',
				'year': '2001'
			}
		],
		'albuns': [
			{
				'name': 'Elect The Dead',
				'year': '2007'
			},
			{
				'name': 'Harakiri',
				'year': '2012'
			},
			{
				'name': 'Toxicity',
				'year': '2001'
			},
			{
				'name': 'System Of A Down',
				'year': '1998'
			}
			
		],
		'picture': 'images/002.jpg'
	},
	{
		'artistName': 'Chino Moreno',
		'realName': 'Chino Moreno',
		'age': '41',
		'songs': [
			{
				'name': 'Change',
				'album':'White Pony',
				'year': '2000'
			},
			{
				'name': 'My own Summer',
				'album':'Around the Fur',
				'year': '1997'
			},
			{
				'name': 'Diamond Eyes',
				'album':'Diamond Eyes',
				'year': '2010'
			},
			{
				'name': 'Chop Suey!',
				'album':'Toxicity',
				'year': '2001'
			},
			{
				'name': 'Rosemary',
				'album':'Koi no Yokan',
				'year': '2012'
			}
		],
		'albuns': [
			{
				'name': 'Diamond Eyes',
				'year': '2010'
			},
			{
				'name': 'White Pony',
				'year': '2000'
			},
			{
				'name': 'Around the Fur',
				'year': '1997'
			},
			{
				'name': 'Koi No Yokan',
				'year': '2012'
			}
			
		],
		'picture': 'images/003.jpg'
	},
	{
		'artistName': 'Atticus Ross',
		'realName': 'Atticus Ross',
		'age': '46',
		'songs': [
			{
				'name': 'In Motion',
				'album':'The Social Network',
				'year': '2000'
			},
			{
				'name': 'Immigrant Song',
				'album':'The Girl with the Dragon Tattoo',
				'year': '2011'
			},
			{
				'name': 'Chasing Shadows',
				'album':'Broken City',
				'year': '2013'
			},
			{
				'name': 'Sugar Storm',
				'album':'Gone Girl',
				'year': '2014'
			},
			{
				'name': 'Empty Places',
				'album':'Gone Girl',
				'year': '2014'
			}
		],
		'albuns': [
			{
				'name': 'The Social Network',
				'year': '2010'
			},
			{
				'name': 'The Girl with the Dragon Tattoo',
				'year': '2011'
			},
			{
				'name': 'Gone Girl',
				'year': '2014'
			},
			{
				'name': 'Broken City',
				'year': '2013'
			}
			
		],
		'picture': 'images/004.jpg'
	}];

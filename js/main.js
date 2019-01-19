$(document).ready(function() {
    var plinks = [
       	{
            name: 'Facebook',
			plink: 'https://www.facebook.com/zhawn1337'
        },
       	{
            name: 'Instagram',
			plink: 'https://www.instagram.com/weixiann/?hl=en'
        },
       	{
            name: 'Steam Profile',
			plink: 'http://steamcommunity.com/id/smokeweed420policecantcatchme'
        },
		];    
		
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="'+ plink.plink + '" target="_blank" style="text-decoration:none;">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' · ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('player');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});
$(document).ready(function() {
    var plinks = [
       	{
            name: 'Steam',
			plink: 'steamcommunity.com/id/HeldUp'
        },
       	{
            name: 'Group',
			plink: 'http://steamcommunity.com/groups/Jok3rcc'
        },
       	{
            name: 'HasteBin',
			plink: 'http://steamcommunity.com/groups/Hastebin'
        },
       	{
            name: 'Twitter',
			plink: 'https://twitter.com/Jok3rcc'
        },
       	{
            name: 'Deviant',
			plink: 'https://jok3rcc.deviantart.com/gallery/'
        }
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
/*global angular*/

'use strict';


angular.module('discoHotel').factory('hotelsProvider',
    function() {

        var hotels = [{
            'id': '1',
            'name': 'Taj Westend',
            'price': 17000,
            'location': 'Race Course Road',
            'imgUrl': 'kVIGWsz.jpg',
            'url': 'http://www.theleela.com/',
            'availableForBook': false,
            'description': 'Incoherently newt hound ',
            'area': 40000
        }, {
            'id': '2',
            'name': 'Keys Hotel',
            'price': 8000,
            'location': 'Whitefield',
            'imgUrl': 'OqJMuy5.jpg',
            'availableForBook': true,
            'description': 'Artful goodness as depending naively suitably disagreeably more krill alongside wherever a far krill fled irrespective the the began thus desolate that more madly that less that off the dauntlessly this avowed far bravely beside where yikes and drew or opossum shut jeepers doused bowed jeepers impious this loaded deftly walked until that and porpoise tortoise while busted tunefully spread dear one unlocked that assisted much excepting cordially that crud.',
            'area': 20000
        }, {
            'id': '3',
            'name': 'Leela Palace',
            'price': 20000,
            'location': 'Old Airport Road',
            'imgUrl': 'qA4PCDl.jpg',
            'availableForBook': true,
            'description': 'Visually far vivacious one this swore and wow that opposite more and goldfish coward besides much labrador bashfully one well rang after a and darn wow far browbeat playfully excited less more when rash well radically wildebeest one well a hypnotically vehemently stupid so.',
            'area': 65000
        }, {
            'id': '4',
            'name': 'Oberoi!!!',
            'price': 20000,
            'location': 'Whitefield',
            'imgUrl': 'qA4PCDl.jpg',
            'availableForBook': true,
            'description': 'Some radiant resigned however imprecise unthinkingly amongst as but criminally between far less speechlessly mowed yikes sorrowful and hence up jellyfish unreceptive off goodness seal coughed poetic outgrew jeez thus came ferret thus stridently outbid before snuffed dragonfly dispassionately gosh more indescribable kneeled nutria gurgled irrespective sorely dear pointed hardheadedly so gosh from that rode convulsive saluted packed however yikes over more went and barring away egret and partook sober komodo loaded blissfully scorpion upon jeepers stolid close square that far outside breathlessly more thus oh alas nauseatingly as overpaid more unbound wistful warthog shut shamefully seagull squid sourly.',
            'area': 198000
        }];


        return {
            getHotels: function() {
                return hotels;
            },
            addHotel : function(hotel){
                hotels.push(hotel);
            }

        };
    });



//greetingController(???)
var rp = require('request-promise');

function Deezer() {
    this.apiUrl = 'https://api.deezer.com/';
}

Deezer.prototype.getTrack = function(id) {
    var url = 'track/' + id;
    return rp({url: this.apiUrl + url, json:true});
};

Deezer.prototype.getAlbum = function(id) {
    var url = 'album/' + id;
    return rp({url: this.apiUrl + url, json:true});
};

Deezer.prototype.getArtist = function(id) {
    var url = 'artist/' + id;
    return rp({url: this.apiUrl + url, json:true});
};

Deezer.prototype.findTracks = function(options, index, order) {
    var url = 'search?q=';
    var query = '';
    if (typeof options === 'object') {
        for (var key in options) {
            query = query + key + ':"' + options[key] + '" ';
        }
    } else {
        query = options;
    }
    url = url + query;

    if (index !== 0) url = url + '&index=' + index;
    if (order) url = url + '&order=' + order;

    return rp({url: this.apiUrl + url, json:true});
};

Deezer.prototype.findAlbums = function(query, index) {
    var url = 'search/album?q=' + query;
    if (index !== 0) url = url + '&index=' + index;

    return rp({url: this.apiUrl + url, json:true});
};

Deezer.prototype.findArtists = function(query, index) {
    var url = 'search/artist?q=' + query;
    if (index !== 0) url = url + '&index=' + index;

    return rp({url: this.apiUrl + url, json:true});
};


Deezer.prototype.getAlbumByUPC = function(upc) {
    var url = 'album/upc:' + upc;
    return rp({url: this.apiUrl + url, json:true});
}


Deezer.prototype.getTrackByISRC = function(isrc) {
    var url = 'track/isrc:' + isrc;
    return rp({url: this.apiUrl + url, json:true});
}

module.exports = Deezer;

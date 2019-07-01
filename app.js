var _map,
    _legend_control,
    _legend = {},
    _layers = {};

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function get_json(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var json = JSON.parse(request.responseText);
        callback(json);
      } else {
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
}

function init_map(config) {
    _map = L.map('map');

    config.base.forEach(function(layer) {
        _layers[layer.name] = L.tileLayer(layer.url, layer.options);
        _legend[layer.name] = layer.legend;
    });

    _layers[config.base[0].name].addTo(_map);

    _map.setView(config.view.center, config.view.zoom);

    _legend_control = L.control({position: 'bottomleft'});

    L.control.layers(_layers, {}, {
        collapsed: false
    }).addTo(_map);

    _map.on('baselayerchange', function(layer) {
        init_legend(layer.name);
    })
}

// Shows a legend (image file) on the bottom left of the map
// for the non-areal image layers.
function init_legend(layer_name) {

    _legend_control.remove();

    if (typeof(_legend[layer_name]) !== 'undefined') {
        _legend_control.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'legend leaflet-control-layers leaflet-control-layers-expanded leaflet-control');
            div.innerHTML += '<img src="' + _legend[layer_name] +  '">';
            return div;
        };

        _legend_control.addTo(_map);

        var legend = document.getElementsByClassName('legend')[0];
        legend.addEventListener('mousewheel', function() {
            event.stopPropagation();
        });
    }
}

ready(function() {
    get_json('config.json', function(result) {
        init_map(result);
    });
});

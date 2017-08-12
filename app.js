var _map;
var _config;
var _legend;

function load_legend(layer_name) {
    _legend.remove();

    var layer_config = $.grep(_config.base, function(e){return e.name == layer_name; })[0];
    if (typeof layer_config.legend != 'undefined') {
        _legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'legend leaflet-control-layers leaflet-control-layers-expanded leaflet-control');
            div.innerHTML += '<img src="' + layer_config.legend +  '">';
            return div;
        };

        _legend.addTo(_map);

        $('.legend').on('mousewheel', function(event) {
            event.stopPropagation();
        });
    }
}

function init() {
    $.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function (config) {
            _map = L.map('map');
            _config = config;
            _legend = L.control({position: 'bottomleft'});

            var base = {};
            $.each(config.base, function(key, layer) {
                base[layer.name] = L.tileLayer(layer.url, layer.options);
            });

            var overlay = {};
            $.each(config.overlay, function(key,layer) {
                overlay[layer.name] = L.tileLayer(layer.url, layer.options);
            });

            var layer_name = config.base[0].name;

            base[layer_name].addTo(_map);

            load_legend(layer_name);

            L.control.layers(base, overlay, {
                collapsed: false
            }).addTo(_map);

            _map.setView(config.location.center, config.location.zoom);

            _map.on('baselayerchange', function(layer) {
                load_legend(layer.name);
            })
        },
        error: function () {
            console.log('Error with json!');
        }
    });
}

$(document).ready(function() {
    setTimeout('init()', 100);
});

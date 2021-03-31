window.onload = init;

function init() {
    const map= new ol.Map({
        view: new ol.View({
            center: ol.proj.fromLonLat([60.25, 30.25]),
            zoom:6
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map' 
    }) 
    afg_bo = new ol.layer.Image({
        source: new ol.source.ImageWMS({
           url: 'https://geonode.wfp.org/geoserver/geonode/ows?SERVICE=WMS&',
           params: {
               LAYERS: '	afg_ica_naturalhazards_geonode_20190516',
           }
           })

    });
    map.addLayer(afg_bo);   
     
}
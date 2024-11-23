var wms_layers = [];

var lyr_Heatmap_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Heatmap_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8416786.603096, 4706416.870704, -8223039.072130, 5060901.395688]
                            })
                        });
var lyr_Heatmap_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Heatmap",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Heatmap_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8416786.603096, 4706416.870704, -8223039.072130, 5060901.395688]
                            })
                        });
var format_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2 = new ol.format.GeoJSON();
var features_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2 = format_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.readFeatures(json_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.addFeatures(features_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2);
var lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2, 
                style: style_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2,
                popuplayertitle: "NJ_Counties_3857_5831765277042531553 — NJ_Counties_3857",
                interactive: true,
                title: '<img src="styles/legend/NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.png" /> NJ_Counties_3857_5831765277042531553 — NJ_Counties_3857'
            });

lyr_Heatmap_0.setVisible(true);lyr_Heatmap_1.setVisible(true);lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.setVisible(true);
var layersList = [lyr_Heatmap_0,lyr_Heatmap_1,lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2];
lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY': 'COUNTY', 'COUNTY_LABEL': 'COUNTY_LABEL', 'CO': 'CO', 'GNIS_NAME': 'GNIS_NAME', 'GNIS': 'GNIS', 'FIPSSTCO': 'FIPSSTCO', 'FIPSCO': 'FIPSCO', 'ACRES': 'ACRES', 'SQ_MILES': 'SQ_MILES', 'POP2020': 'POP2020', 'POP2010': 'POP2010', 'POP2000': 'POP2000', 'POP1990': 'POP1990', 'POP1980': 'POP1980', 'POPDEN2020': 'POPDEN2020', 'POPDEN2010': 'POPDEN2010', 'POPDEN2000': 'POPDEN2000', 'POPDEN1990': 'POPDEN1990', 'POPDEN1980': 'POPDEN1980', 'REGION': 'REGION', });
lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COUNTY': 'TextEdit', 'COUNTY_LABEL': 'TextEdit', 'CO': 'TextEdit', 'GNIS_NAME': 'TextEdit', 'GNIS': 'TextEdit', 'FIPSSTCO': 'TextEdit', 'FIPSCO': 'TextEdit', 'ACRES': 'TextEdit', 'SQ_MILES': 'TextEdit', 'POP2020': 'Range', 'POP2010': 'Range', 'POP2000': 'Range', 'POP1990': 'Range', 'POP1980': 'Range', 'POPDEN2020': 'Range', 'POPDEN2010': 'Range', 'POPDEN2000': 'Range', 'POPDEN1990': 'Range', 'POPDEN1980': 'Range', 'REGION': 'TextEdit', });
lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY': 'no label', 'COUNTY_LABEL': 'no label', 'CO': 'no label', 'GNIS_NAME': 'no label', 'GNIS': 'no label', 'FIPSSTCO': 'no label', 'FIPSCO': 'no label', 'ACRES': 'no label', 'SQ_MILES': 'no label', 'POP2020': 'no label', 'POP2010': 'no label', 'POP2000': 'no label', 'POP1990': 'no label', 'POP1980': 'no label', 'POPDEN2020': 'no label', 'POPDEN2010': 'no label', 'POPDEN2000': 'no label', 'POPDEN1990': 'no label', 'POPDEN1980': 'no label', 'REGION': 'no label', });
lyr_NJ_Counties_3857_5831765277042531553NJ_Counties_3857_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
"use strict";


require([
    "esri/Map",
    "esri/Basemap",
    "esri/views/MapView",
    "esri/layers/VectorTileLayer",
    "esri/layers/MapImageLayer",
    "esri/layers/WMTSLayer",
    "esri/layers/FeatureLayer",
    "esri/Graphic",
    "esri/geometry/Point"
],( Map,
    Basemap,
    MapView, 
    VectorTileLayer,
    MapImageLayer,
    WMTSLayer,
    FeatureLayer,
    Graphic,
    Point)=>{


    // const wmtsBase1=new WMTSLayer({
    //      url: "https://wmts.nlsc.gov.tw/97/wmts",
         
    // })

    console.log(TSConfig2.DefaultLayers[0].LAYERS[0].Path)
    const layer = new FeatureLayer({
        // URL to the service
        url: TSConfig2.DefaultLayers[0].LAYERS[0].Path
      });

    //read each item stored in layers
    for (let i=0;i<TSConfig2.DefaultLayers.length;i++){
        console.log(`type${i}:${TSConfig2.DefaultLayers[i].GROUPNAME}`);
        for (let j=0;j<=TSConfig2.DefaultLayers.length;j++){
            console.log(`type${i}:${TSConfig2.DefaultLayers[i].LAYERS[j].Path}`);
        }
    }

    const shellPanel = document.getElementById("shell-panel-start"); 
    const panel = document.getElementById("panel-start");
    const actions = shellPanel?.querySelectorAll("calcite-action");//?

    panel?.addEventListener("calcitePanelClose", function(event) {
        actions?.forEach(action => (action.active = false));
        shellPanel.collapsed = false;
    });

    actions?.forEach(el => {
        console.log("el",el);
        el.addEventListener("click", function(event) {
            console.log("clg",event)
            actions?.forEach(action => (action.active = false));
            el.active = panel.closed;
            shellPanel.collapsed = !shellPanel.collapsed;
            panel.closed = !panel.closed;
            panel.heading = event.target.text;
        });
    });


    // TSConfig2.DefaultLayers.forEach(ele=>{
    //     console.log(`type :${ele.GROUPNAME}`);
    //     ele.forEach(e=>{
    //         console.log(`layer :${e.Path}`);
    //     })
    // })

    // const basemap=new Basemap({
    //     baseLayers:[wmtsBase1],
    //     title:"通用版地圖"
    // })

    const map = new Map({
        basemap: "gray-vector"
    });


    const view =new MapView({
        map:map,
        container:"viewDiv",
        center: [121.23502, 23.23911],
        zoom: 6
    })

    map.add(layer);
   })  
    
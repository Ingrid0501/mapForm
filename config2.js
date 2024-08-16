
const TSConfig2={
    BaseMapLayers: [
        {
            Key: "NLSCMAP_WMTS",
            ThumbnailSource: "images/TGOS01.png",
            Name: "通用版地圖",
            MapURL: "https://wmts.nlsc.gov.tw/97/wmts",
            isVisible: false,
            kind: 'WMTS',
            Title: '臺灣通用電子地圖（內政部國土測繪中心）',
            ServiceName: 'EMAP3826',
            LayerCount: 0
        },
        {
            Key: "F2IMAGE",
            ThumbnailSource: "images/TGOS03.png",
            Name: "福二混合",
            MapURL: "https://api.tgos.tw/TileAgent/ROADMAP.aspx",
            isVisible: false,
            kind: 'TGOS',
            Title: '內政部資訊中心TGOS福衛二號混合地圖（不定期更新）',
            ServiceName: '',
            LayerCount: 0
        },
        {
            Key: "TOPO1000B",
            ThumbnailSource: "images/TGOS04.png",
            Name: "TGOS地形圖",
            MapURL: "https://api.tgos.tw/Agent/Tile/TOPO1000.aspx",
            isVisible: false,
            kind: 'TGOS',
            Title: '內政部資訊中心TGOS 1/1000地形圖（不定期更新）',
            ServiceName: '',
            LayerCount: 0
        },
        {
            Key: "ATIS_MNC",
            ThumbnailSource: "images/AFASI01.png",
            Name: "農航所2010正射影像",
            MapURL: "wms_afasi.ashx",
            isVisible: false,
            kind: 'WMS',
            Title: '農航所正射影像服務（不定期更新）',
            Proxy: 'wms_proxy_afasi.ashx'
        },
        {
            Key: "parcelMap",
            ThumbnailSource: "images/Yi5.png",
            Name: "數值地圖",
            MapURL: "https://mapcenter1.e-land.gov.tw/ArcGIS/rest/services/YiLanTerrain_3826_2013_20141231/MapServer",
            isVisible: true,
            kind: 'GISSERVER'
        },
        {
            Key: "taxMap",
            ThumbnailSource: "images/Yi1.png",
            Name: "正射影像",
            MapURL: "https://mapcenter1.e-land.gov.tw/ArcGIS/rest/services/YilanOrtho2013_3826_1/MapServer",
            isVisible: false,
            kind: 'GISSERVER'
        },
        {
            Key: "imageryMap",
            ThumbnailSource: "images/Yi6.png",
            Name: "影像地圖",
            MapURL: "https://mapcenter1.e-land.gov.tw/ArcGIS/rest/services/YiLanT_O_3826_2013_20141231/MapServer",
            isVisible: false,
            kind: 'GISSERVER'
        },
		{
            Key: "SatelliteIMG2",
            ThumbnailSource: "images/yi9.png",
            Name: "高解析衛星影像(2020)",
            MapURL: "https://mapcenter1.e-land.gov.tw/arcgis/rest/services/SatelliteIMG_3826_2020_cov/MapServer",
            isVisible: false,
            kind: 'GISSERVER'
        },
        {
            Key: "SatelliteIMG1",
            ThumbnailSource: "images/Yi8.png",
            Name: "高解析衛星影像(2017)",
            MapURL: "https://mapcenter1.e-land.gov.tw/arcgis/rest/services/SatelliteIMG_2017/MapServer",
            isVisible: false,
            kind: 'GISSERVER'
        },
        {
            Key: "SatelliteIMG",
            ThumbnailSource: "images/Yi7.png",
            Name: "高解析衛星影像(2013)",
            MapURL: "https://mapcenter1.e-land.gov.tw/ArcGIS/rest/services/SatelliteIMG_3826_2013/MapServer",
            isVisible: false,
            kind: 'GISSERVER'
        },
        {
            Key: "noneMap",
            ThumbnailSource: "images/none.png",
            Name: "空白底圖",
            MapURL: "",
            isVisible: false,
            kind: 'GISSERVER'
        }
    ],
    DefaultLayers: [
        {
            "GROUPNAME": "旅遊資訊",
            "LAYERS": [
              {
                  EName: "A01",
                  CName: "SPOT",
                  Path: "https://localhost:6443/arcgis/rest/services/Identify/MapServer/3",
                  ServiceType: 0,
                  Visible: false,
                  Opacity: 1,
                  Tolerance: 5,
                  Type: "point",
                  Definitions: ""

              },
              {
                  EName: "A02",
                  CName: "RESAURANT",
                  Path: "https://localhost:6443/arcgis/rest/services/Identify/MapServer/4",
                  ServiceType: 0,
                  Visible: false,
                  Opacity: 1,
                  Tolerance: 5,
                  Type: "point",
                  Definitions: ""
              },
              {
                EName: "A03",
                CName: "HOTEL",
                Path: "https://localhost:6443/arcgis/rest/services/Identify/MapServer/5",
                ServiceType: 0,
                Visible: false,
                Opacity: 1,
                Tolerance: 5,
                Type: "point",
                Definitions: ""
            }
            ]
        },
        {
            "GROUPNAME": "ENV資訊",
            "LAYERS": [
              {
                  EName: "B01",
                  CName: "FISHING-BOX",
                  Path: "https://localhost:6443/arcgis/rest/services/Identify/MapServer/0",
                  ServiceType: 0,
                  Visible: false,
                  Opacity: 1,
                  Tolerance: 5,
                  Type: "polygon",
                  Definitions: ""

              },
              {
                  EName: "B02",
                  CName: "ANIMAL",
                  Path: "https://localhost:6443/arcgis/rest/services/Identify/MapServer/1",
                  ServiceType: 0,
                  Visible: false,
                  Opacity: 1,
                  Tolerance: 5,
                  Type: "polygon",
                  Definitions: ""
              },
              {
                EName: "B03",
                CName: "VEG",
                Path: "https://localhost:6443/arcgis/rest/services/Identify/MapServer/2",
                ServiceType: 0,
                Visible: false,
                Opacity: 1,
                Tolerance: 5,
                Type: "polygon",
                Definitions: ""
            }
            ]
        },
    ]
}


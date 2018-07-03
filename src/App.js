import React, { Component } from 'react';
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
//import  { Menu } from 'antd';
//import { Menu, Icon } from 'antd';

// ReactDOM.render(<DatePicker/>, mountNode);
const { Header, Content, Footer } = Layout;

class App extends Component {  
	
    componentDidMount() {
        this.viewer = new Viewer(this.cesiumContainer,{
//      	imageryProvider: new Viewer.WebMapTileServiceImageryProvider({
//	            url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
//	            layer: "tdtBasicLayer",
//	            style: "default",
//	            format: "image/jpeg",
//	            tileMatrixSetID: "GoogleMapsCompatible",
//	            show: true
//	        }),
		    baseLayerPicker: false,       // 基本图层控制,确定imageryProvider是否生效，false则生效，true则selectedImageryProviderViewModel生效
		    geocoder: false,              // 搜索控制
		    homeButton: false,            // 返回初始状态控制
		    navigationHelpButton: false,  // 帮助控制
		    animation: false,
		    timeline: false,                //时间轴
		    contextOptions: { webgl: { preserveDrawingBuffer: true, failIfMajorPerformanceCaveat: false } },
		    scene3DOnly: false,             //影响是否显示2，3维切换
		    infoBox: false,
		    fullscreenButton: false, // 是否显示全屏按钮
		    sceneModePicker: false,   // 模式控制（2D，3D，2.5D）
		    showInspector: false
    	});
    }

    render() {
        return (
            <div>
            	<Header>
			      五莲县小流域预警监测系统
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['2']}
			        style={{ lineHeight: '64px',float: 'right' }}
			      >
			        <Menu.Item key="1">实时雨情</Menu.Item>
			        <Menu.Item key="2">实时水情</Menu.Item>
			        <Menu.Item key="3">小流域洪水分析</Menu.Item>
			        <Menu.Item key="4">分布式管理</Menu.Item>
			      </Menu>
			    </Header>
                <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
            </div>
        );
    }
}

export default App
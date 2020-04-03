webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/react-map-gl/index.js":
/*!******************************************!*\
  !*** ./components/react-map-gl/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages */ "./pages/index.js");
/* harmony import */ var _map_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map-selector */ "./components/map-selector.js");
/* harmony import */ var _sumup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sumup */ "./components/react-map-gl/sumup.js");
/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../statistics */ "./components/statistics.js");


var _jsxFileName = "/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var SITE_URL = "https://dashboard.covid19.data.gouv.fr";
var settings = {
  maxZoom: 10
};

var Map = function Map() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      selectedMapIdx = _useState[0],
      setSelectedMapIdx = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_7__["AppContext"]),
      selectedLocationReport = _useContext.selectedLocationReport,
      setSelectedLocation = _useContext.setSelectedLocation,
      isIframe = _useContext.isIframe,
      viewport = _useContext.viewport,
      maps = _useContext.maps,
      setViewport = _useContext.setViewport,
      isMobileDevice = _useContext.isMobileDevice;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      map = _useState2[0],
      setMap = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      hovered = _useState3[0],
      setHovered = _useState3[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (ref) {
    if (ref) {
      setMap(ref.getMap());
    }
  }, []);

  var onHover = function onHover(event) {
    event.stopPropagation();
    var feature = event.features && event.features[0];

    var _event$lngLat = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event.lngLat, 2),
        longitude = _event$lngLat[0],
        latitude = _event$lngLat[1];

    var hoverInfo;

    if (feature) {
      hoverInfo = {
        longitude: longitude,
        latitude: latitude,
        feature: feature
      };
    }

    setHovered(hoverInfo);
  };

  var onClick = function onClick(event) {
    event.stopPropagation();
    var feature = event.features && event.features[0];

    if (feature) {
      var properties = feature.properties;
      handleClick(selectedMapIdx);
      setSelectedLocation(properties.code);
    } else {
      setSelectedLocation(null);
    }

    setHovered(null);
  };

  var handleClick = function handleClick(selectedMapIdx) {
    console.log(selectedMapIdx);
  };

  return __jsx("div", {
    className: "jsx-1428770506" + " " + 'map-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'controls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'control',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_map_selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mapIdx: selectedMapIdx,
    selectMap: setSelectedMapIdx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), isIframe && __jsx("div", {
    className: "jsx-1428770506" + " " + 'control maximize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("a", {
    href: SITE_URL,
    target: "_top",
    className: "jsx-1428770506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Maximize2"], {
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reuseMaps: true,
    ref: mapRef
  }, viewport, {
    width: "100%",
    height: "100%",
    mapStyle: "https://etalab-tiles.fr/styles/osm-bright/style.json"
  }, settings, {
    interactiveLayerIds: maps[selectedMapIdx].layers.map(function (layer) {
      return layer.id;
    }),
    onViewportChange: setViewport,
    onHover: isMobileDevice ? null : onHover,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Source"], {
    type: "geojson",
    id: "cas-confirmes",
    attribution: "Donn\xE9es Sant\xE9 publique France",
    data: maps[selectedMapIdx].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, maps[selectedMapIdx].layers.map(function (layer) {
    return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: layer.id
    }, layer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }));
  })), hovered && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Popup"], {
    longitude: hovered.longitude,
    latitude: hovered.latitude,
    closeButton: false,
    closeOnClick: false,
    onClose: function onClose() {
      return setHovered(null);
    },
    anchor: "bottom-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    nom: hovered.feature.properties.nom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }))), isMobileDevice && __jsx("div", {
    className: "jsx-1428770506" + " " + "mobile-sumup ".concat(selectedLocationReport ? 'show' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, selectedLocationReport && __jsx(_statistics__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1428770506",
    __self: this
  }, ".map-container.jsx-1428770506{position:relative;width:100%;height:100%;}.controls.jsx-1428770506{z-index:1;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:100%;padding:0.5em;}.control.jsx-1428770506{background-color:#000000aa;color:#fff;border-radius:4px;margin:0;}.maximize.jsx-1428770506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:0;border-radius:4px;background:#53514f;}.maximize.jsx-1428770506 a.jsx-1428770506{color:#fff;padding:0.4em;}.mobile-sumup.jsx-1428770506{z-index:2;position:absolute;bottom:0;background-color:#fff;width:100%;margin:auto;-webkit-transition:0.5s;transition:0.5s;}.mobile-sumup.hide.jsx-1428770506{height:0;padding:0;}.mobile-sumup.show.jsx-1428770506{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SWtCLEFBRzZCLEFBTVIsQUFVaUIsQUFPZCxBQU9GLEFBS0QsQUFVRCxBQUtHLFNBSkYsQ0F2Q1EsQUE2QkEsQ0FMSixDQW9CaEIsTUFsRGEsQ0E4Q2IsTUFmQSxFQWZhLENBVEUsQUE2QkosQ0FuQ0csUUFvQ1UsQ0FwQkosR0FmcEIsZUFnQlcsR0FvQkUsTUFuQmIsS0FvQmMsSUFoQkosUUFDVSxBQWdCRixrQkFmRyxFQWpCVyxpQkFrQmhDLEdBZUEsK0ZBaENvQix5RkFDUCxXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0TWFwR0wsIHtTb3VyY2UsIExheWVyLCBQb3B1cH0gZnJvbSAncmVhY3QtbWFwLWdsJ1xuaW1wb3J0IHtNYXhpbWl6ZTJ9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSAnLi4vLi4vcGFnZXMnXG5cbmltcG9ydCBNYXBTZWxlY3RvciBmcm9tICcuLi9tYXAtc2VsZWN0b3InXG5cbmltcG9ydCBTdW1VcCBmcm9tICcuL3N1bXVwJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vc3RhdGlzdGljcydcblxuY29uc3QgU0lURV9VUkwgPSBwcm9jZXNzLmVudi5TSVRFX1VSTFxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgbWF4Wm9vbTogMTBcbn1cblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRNYXBJZHgsIHNldFNlbGVjdGVkTWFwSWR4XSA9IHVzZVN0YXRlKDEpXG5cbiAgY29uc3Qge1xuICAgIHNlbGVjdGVkTG9jYXRpb25SZXBvcnQsXG4gICAgc2V0U2VsZWN0ZWRMb2NhdGlvbixcbiAgICBpc0lmcmFtZSxcbiAgICB2aWV3cG9ydCxcbiAgICBtYXBzLFxuICAgIHNldFZpZXdwb3J0LFxuICAgIGlzTW9iaWxlRGV2aWNlXG4gIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBtYXBSZWYgPSB1c2VDYWxsYmFjayhyZWYgPT4ge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHNldE1hcChyZWYuZ2V0TWFwKCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvbkhvdmVyID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG4gICAgY29uc3QgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdID0gZXZlbnQubG5nTGF0XG4gICAgbGV0IGhvdmVySW5mb1xuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGhvdmVySW5mbyA9IHtcbiAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgZmVhdHVyZVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldEhvdmVyZWQoaG92ZXJJbmZvKVxuICB9XG5cbiAgY29uc3Qgb25DbGljayA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IGZlYXR1cmUgPSBldmVudC5mZWF0dXJlcyAmJiBldmVudC5mZWF0dXJlc1swXVxuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGNvbnN0IHtwcm9wZXJ0aWVzfSA9IGZlYXR1cmVcbiAgICAgIGhhbmRsZUNsaWNrKHNlbGVjdGVkTWFwSWR4KVxuICAgICAgc2V0U2VsZWN0ZWRMb2NhdGlvbihwcm9wZXJ0aWVzLmNvZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb24obnVsbClcbiAgICB9XG5cbiAgICBzZXRIb3ZlcmVkKG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IHNlbGVjdGVkTWFwSWR4ID0+IHtcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE1hcElkeClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21hcC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2xzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wnPlxuICAgICAgICAgIDxNYXBTZWxlY3RvciBtYXBJZHg9e3NlbGVjdGVkTWFwSWR4fSBzZWxlY3RNYXA9e3NldFNlbGVjdGVkTWFwSWR4fSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXNJZnJhbWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sIG1heGltaXplJz5cbiAgICAgICAgICAgIDxhIGhyZWY9e1NJVEVfVVJMfSB0YXJnZXQ9J190b3AnPjxNYXhpbWl6ZTIgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgIHJldXNlTWFwc1xuICAgICAgICByZWY9e21hcFJlZn1cbiAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICB3aWR0aD0nMTAwJSdcbiAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICBtYXBTdHlsZT0naHR0cHM6Ly9ldGFsYWItdGlsZXMuZnIvc3R5bGVzL29zbS1icmlnaHQvc3R5bGUuanNvbidcbiAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgICBpbnRlcmFjdGl2ZUxheWVySWRzPXttYXBzW3NlbGVjdGVkTWFwSWR4XS5sYXllcnMubWFwKGxheWVyID0+IGxheWVyLmlkKX1cbiAgICAgICAgb25WaWV3cG9ydENoYW5nZT17c2V0Vmlld3BvcnR9XG4gICAgICAgIG9uSG92ZXI9e2lzTW9iaWxlRGV2aWNlID8gbnVsbCA6IG9uSG92ZXJ9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG5cbiAgICAgICAgPFNvdXJjZVxuICAgICAgICAgIHR5cGU9J2dlb2pzb24nXG4gICAgICAgICAgaWQ9J2Nhcy1jb25maXJtZXMnXG4gICAgICAgICAgYXR0cmlidXRpb249J0Rvbm7DqWVzIFNhbnTDqSBwdWJsaXF1ZSBGcmFuY2UnXG4gICAgICAgICAgZGF0YT17bWFwc1tzZWxlY3RlZE1hcElkeF0uZGF0YX1cbiAgICAgICAgPlxuICAgICAgICAgIHttYXBzW3NlbGVjdGVkTWFwSWR4XS5sYXllcnMubWFwKGxheWVyID0+IChcbiAgICAgICAgICAgIDxMYXllciBrZXk9e2xheWVyLmlkfSB7Li4ubGF5ZXJ9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgIHtob3ZlcmVkICYmIChcbiAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgIGxvbmdpdHVkZT17aG92ZXJlZC5sb25naXR1ZGV9XG4gICAgICAgICAgICBsYXRpdHVkZT17aG92ZXJlZC5sYXRpdHVkZX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXtmYWxzZX1cbiAgICAgICAgICAgIGNsb3NlT25DbGljaz17ZmFsc2V9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRIb3ZlcmVkKG51bGwpfVxuICAgICAgICAgICAgYW5jaG9yPSdib3R0b20tbGVmdCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3VtVXAgbm9tPXtob3ZlcmVkLmZlYXR1cmUucHJvcGVydGllcy5ub219IC8+XG4gICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RNYXBHTD5cblxuICAgICAge2lzTW9iaWxlRGV2aWNlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2JpbGUtc3VtdXAgJHtzZWxlY3RlZExvY2F0aW9uUmVwb3J0ID8gJ3Nob3cnIDogJ2hpZGUnfWB9PlxuICAgICAgICAgIHtzZWxlY3RlZExvY2F0aW9uUmVwb3J0ICYmIChcbiAgICAgICAgICAgIDxTdGF0aXN0aWNzIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFhO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubWF4aW1pemUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzUxNGY7XG4gICAgICAgIH1cblxuICAgICAgICAubWF4aW1pemUgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMC40ZW07XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN1bXVwIHtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtc3VtdXAuaGlkZSB7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN1bXVwLnNob3cge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuIl19 */\n/*@ sourceURL=/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.ccb0178711c2f279f668.hot-update.js.map
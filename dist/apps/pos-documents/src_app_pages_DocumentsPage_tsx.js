(self["webpackChunkpos_documents"] = self["webpackChunkpos_documents"] || []).push([["src_app_pages_DocumentsPage_tsx"],{

/***/ "./src/app/components/ListItem.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Search.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/pages/DocumentsPage.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/DocumentsHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/components/Search.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/DocumentsHeader.tsx";





const DocumentsHeader = ({
  setQueryString
}) => {
  const isFetching = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useIsFetching)();
  const [showSearch, setShowSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,_ionic_react__WEBPACK_IMPORTED_MODULE_0__.useIonViewWillLeave)(() => {
    setShowSearch(false);
  });
  const setQuery = queryString => {
    setQueryString(queryString);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonHeader, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonToolbar, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButtons, {
        slot: "start",
        className: "header-buttons",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonMenuButton, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
          className: "title-spinner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonTitle, {
            className: "title ion-no-padding ion-padding-end",
            children: "Documents"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), isFetching ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonSpinner, {
            className: "spinner",
            name: "dots"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        placeholder: "Busca...",
        setQueryString: setQuery,
        disabled: isFetching ? true : false,
        focusSearchBar: showSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentsHeader);

/***/ }),

/***/ "./src/app/components/Filter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFilter: () => (/* binding */ useFilter)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logic_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/logic/functions.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/Filter.tsx";





const Filter = ({
  typesFiltered,
  setTypesFiltered
}) => {
  const isFetching = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useIsFetching)();
  const [all, setAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const typesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(typesFiltered);
  const checkUncheck = () => {
    setAll(!all);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTypesFiltered(typesRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const toggle = type => {
    setTimeout(() => {
      const res = _logic_functions__WEBPACK_IMPORTED_MODULE_3__.toggleArray(typesFiltered, type);
      setTypesFiltered(res);
    }, 0);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    all ? setTypesFiltered(typesRef.current) : setTypesFiltered([]);
  }, [all, setTypesFiltered]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "ion-padding-top",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonTitle, {
      className: "ion-no-padding ion-padding-bottom",
      children: "Document Types"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonList, {
      lines: "full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
        disabled: isFetching ? true : false,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCheckbox, {
          checked: all,
          onClick: checkUncheck,
          slot: "start"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonBadge, {
          className: "DC",
          children: "T"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
          className: "ion-padding-start",
          children: "Todos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)]
      }, "all", true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined), docTypes.map((docType, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
          disabled: isFetching ? true : false,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCheckbox, {
            onClick: () => toggle(docType.symbol),
            value: docType.symbol,
            checked: typesFiltered.includes(docType.symbol),
            slot: "start"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonBadge, {
            className: docType.class,
            children: docType.symbol
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
            className: "ion-padding-start",
            children: docType.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 25
        }, undefined);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};
const useFilter = (typesFiltered, SetTypesFiltered) => {
  const filter = Filter({
    typesFiltered: typesFiltered,
    setTypesFiltered: SetTypesFiltered
  });
  return {
    filter
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);
const docTypes = [{
  title: 'Consulta de Mesa',
  symbol: 'DC',
  class: 'DC'
}, {
  title: 'Encomenda',
  symbol: 'EC',
  class: 'EC'
}, {
  title: 'Fatura',
  symbol: 'FT',
  class: 'FT'
}, {
  title: 'Fatura Pró-Forma',
  symbol: 'PF',
  class: 'PF'
}, {
  title: 'Fatura Recibo',
  symbol: 'FR',
  class: 'FR'
}, {
  title: 'Fatura Simplificada',
  symbol: 'FS',
  class: 'FS'
}, {
  title: 'Guia de Ativos Próprios',
  symbol: 'GA',
  class: 'GA'
}, {
  title: 'Guia de Devolução',
  symbol: 'GD',
  class: 'GD'
}, {
  title: 'Nota de Crédito',
  symbol: 'NC',
  class: 'NC'
}, {
  title: 'Orçamento',
  symbol: 'OT',
  class: 'OT'
}, {
  title: 'Guia de Transporte',
  symbol: 'GT',
  class: 'GT'
}, {
  title: 'Guia de Remessa',
  symbol: 'GR',
  class: 'GR'
}, {
  title: 'Recibo',
  symbol: 'RG',
  class: 'RG'
}];

/***/ }),

/***/ "./src/app/components/ListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_ListItemLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/components/loaders/ListItemLoader.tsx");
/* harmony import */ var _ListItem_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/components/ListItem.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/ListItem.tsx";





const ListItem = ({
  item,
  isFetching,
  isPreviousData
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
    routerLink: `/documents/${item.id}`,
    button: true,
    detail: true,
    children: isFetching && isPreviousData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_loaders_ListItemLoader__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonBadge, {
        slot: "start",
        className: item.type,
        children: item.type ? item.type : 'ZZ'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
          children: item.number ? item.number : 'NO NUMBER'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: item.date ? item.date : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        slot: "end",
        color: "medium",
        children: item.amount_gross ? item.amount_gross : 'ZZ'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./src/app/components/Search.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Search_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/components/Search.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/Search.tsx";




const Search = ({
  placeholder,
  setQueryString,
  disabled,
  focusSearchBar
}) => {
  const searchbarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    focusSearchBar && setTimeout(() => {
      var _searchbarRef$current;
      return (_searchbarRef$current = searchbarRef.current) == null ? void 0 : _searchbarRef$current.setFocus();
    }, 10);
  }, [focusSearchBar, disabled]);
  const handleChange = ev => {
    let query = '';
    const target = ev.target;
    if (target) query = target.value.toLowerCase();
    setQueryString(query);
  };
  const handleClear = () => setQueryString('');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonSearchbar, {
    mode: "ios",
    placeholder: placeholder,
    debounce: 1000,
    onIonChange: ev => handleChange(ev),
    onIonClear: ev => handleClear(),
    disabled: disabled,
    ref: searchbarRef,
    className: "search-bar ion-no-padding",
    inputmode: "search",
    enterkeyhint: "enter"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/app/components/loaders/ListItemLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react-content-loader/react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/loaders/ListItemLoader.tsx";


const ListItemLoader = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_content_loader__WEBPACK_IMPORTED_MODULE_0___default()), {
  speed: 2,
  width: 200,
  height: 62,
  viewBox: "0 0 200 62",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
    x: "72",
    y: "16",
    rx: "3",
    ry: "3",
    width: "150",
    height: "15"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
    x: "72",
    y: "38",
    rx: "3",
    ry: "3",
    width: "74",
    height: "13"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("rect", {
    x: "0",
    y: "15",
    rx: "3",
    ry: "3",
    width: "40",
    height: "33"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemLoader);

/***/ }),

/***/ "./src/app/logic/documentsLogic.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadPdf: () => (/* binding */ downloadPdf),
/* harmony export */   getDocDetail: () => (/* binding */ getDocDetail),
/* harmony export */   getDocsList: () => (/* binding */ getDocsList)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@capacitor/core/@capacitor/core");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__);

let baseUrl = 'http://vendus-pt/ws/v1.2/documents/';
if (false) {}
const getDocsList = async (apiKey, page = 1, typesFiltered, query = '') => {
  const types = typesFiltered.join(',');
  let res;
  const options = {
    url: `${baseUrl}`,
    params: {
      api_key: apiKey,
      envelope: '1',
      page: page.toString(),
      type: types,
      q: query
    }
  };
  await _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CapacitorHttp.get(options).then(response => res = response.data).catch(error => {
    return Promise.reject(new Error(error));
  });
  return res;
};
const getDocDetail = async (apiKey, id) => {
  let res;
  const options = {
    url: `${baseUrl}${id}`,
    params: {
      api_key: apiKey
    }
  };
  await _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CapacitorHttp.get(options).then(response => res = response.data).catch(error => {
    return Promise.reject(new Error(error));
  });
  return res;
};
const downloadPdf = async (apiKey, id, number, dismiss) => {
  const options = {
    url: `${baseUrl}${id}.pdf`,
    responseType: 'blob',
    params: {
      api_key: apiKey
    }
  };
  await _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CapacitorHttp.get(options).then(response => {
    console.log('response from download: ', response);
    const blob = new Blob([response.data], {
      type: 'application/pdf'
    });
    const fileURL = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = fileURL;
    a.download = `${number}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    dismiss();
  }).catch(error => {
    dismiss();
    return Promise.reject(new Error(error));
  });
  dismiss();
};

/***/ }),

/***/ "./src/app/logic/functions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   docPermission: () => (/* binding */ docPermission),
/* harmony export */   getHeaderType: () => (/* binding */ getHeaderType),
/* harmony export */   toggleArray: () => (/* binding */ toggleArray),
/* harmony export */   toggleDocType: () => (/* binding */ toggleDocType)
/* harmony export */ });
const toggleArray = (array, item) => {
  const arr = array;
  if (arr.indexOf(item) === -1) {
    arr.push(item);
  } else {
    arr.splice(arr.indexOf(item), 1);
  }
  return arr;
};
const headersFt = [{
  title: 'Produto',
  size: '5'
}, {
  title: 'Preço/Uni.',
  end: true
}, {
  title: 'Qtd.',
  end: true
}, {
  title: 'Preço',
  end: true
}];
const headersRg = [{
  title: 'Documento',
  size: '6'
}, {
  title: 'Faturado',
  end: true
}, {
  title: 'Pago',
  end: true
}];
const headersNc = [{
  title: 'Produto',
  size: '5'
}, {
  title: 'Stock'
}, {
  title: 'Qtd.'
}, {
  title: 'Preço/Uni.'
}, {
  title: 'Preço',
  end: true
}];
const getHeaderType = type => {
  if (['FT', 'DC', 'FR', 'GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'FS'].includes(type)) return headersFt;
  if (['RG'].includes(type)) return headersRg;
  if (['NC'].includes(type)) return headersNc;
  return [];
};

// TODO: make this function
const toggleDocType = (type, items) => {
  if (['FT', 'DC', 'FR', 'GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'FS'].includes(type)) {
    return items.map(item => {
      return {
        title: item.title,
        net_unit: item.amounts.net_unit,
        qty: item.qty,
        price: item.amounts.net_total
      };
    });
  }
  if (['NC'].includes(type)) {
    return items.map(item => {
      return {
        title: item.title,
        stock: item.stock_control,
        qty: item.qty,
        net_unit: item.amounts.net_unit,
        price: item.amounts.net_total
      };
    });
  }
  if (['RG'].includes(type)) {
    return items.map(item => {
      return {
        title: item.title,
        net_unit: item.amounts.net_total,
        gross_total: item.amounts.gross_total
      };
    });
  }
  return [];
};
const permissions = {
  print: ['FT', 'DC', 'FR', 'GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'FS', 'NC', 'RG'],
  sendEmail: ['FT', 'DC', 'FR', 'GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'FS', 'NC', 'RG'],
  creditNote: ['FT', 'FR', 'FS'],
  createTransport: ['FT', 'FR', 'FS'],
  offerCoupon: ['FT', 'FR', 'FS'],
  copyToSale: ['FT', 'DC', 'FR', 'GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'FS'],
  downloadPdf: ['FT', 'DC', 'FR', 'GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'FS', 'NC', 'RG'],
  registerPayment: [],
  edit: ['GT', 'GA', 'GR', 'GD'],
  cancel: ['GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'NC', 'RG']
};
const docPermission = (docType, permissionType) => {
  if (permissions[`${permissionType}`].includes(docType)) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./src/app/pages/DocumentsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/ionicons/icons/ionicons/icons");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ionicons_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DocumentsPage_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/pages/DocumentsPage.scss");
/* harmony import */ var _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/logic/documentsLogic.ts");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/app/components/ListItem.tsx");
/* harmony import */ var _components_DocumentsHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/components/DocumentsHeader.tsx");
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/app/components/Filter.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/pages/DocumentsPage.tsx";











const iconEmpty = '/assets/img/icon-empty.svg';
const DocumentsPage = ({
  typesFiltered,
  setTypesFiltered,
  apiKey
}) => {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const documentsQty = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const pageQty = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const documents = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)(['documents', page, query], () => _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_4__.getDocsList(apiKey, page, typesFiltered, query), {
    keepPreviousData: true,
    staleTime: 60 * 1000
  });
  const filter = (0,_components_Filter__WEBPACK_IMPORTED_MODULE_8__.useFilter)(typesFiltered, setTypesFiltered);

  // Filters in mobile
  const modal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // End Filters in mobile

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    documents.refetch();
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typesFiltered, query]);
  (0,_ionic_react__WEBPACK_IMPORTED_MODULE_0__.useIonViewWillLeave)(() => {
    setPage(1);
    setQuery('');
  });
  if (documents.isSuccess) {
    if (documents.data.headers.length > 0) {
      var _documents$data, _documents$data2;
      documentsQty.current = parseFloat((_documents$data = documents.data) == null ? void 0 : _documents$data.headers[0].match(/\d+/g));
      pageQty.current = parseFloat((_documents$data2 = documents.data) == null ? void 0 : _documents$data2.headers[1].match(/\d+/g));
    }
  }
  if (documents.isError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
      children: "Something went wrong..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 16
    }, undefined);
  }

  // if (documents.isLoading) {
  //     return (
  //         <div className="ion-padding-start">
  //             <BulletList width={"70%"} />
  //             <BulletList width={"70%"} />
  //         </div>
  //     )
  // }

  const previousPage = () => {
    setPage(old => Math.max(old - 1, 0));
  };
  const nextPage = () => {
    if (!documents.isPreviousData) {
      setPage(old => old + 1);
    }
  };
  const setQueryString = queryString => {
    setQuery(queryString);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonPage, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DocumentsHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setQueryString: setQueryString
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonContent, {
      fullscreen: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
        className: "h--100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
          className: "h--100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            size: "12",
            "size-sm": "3",
            className: "side-menu ion-hide-lg-down",
            children: filter.filter
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            size: "12",
            "size-lg": "9",
            children: documents.isSuccess ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
                size: "small",
                id: "open-modal",
                expand: "full",
                className: "ion-hide-lg-up",
                children: "Filters"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonModal, {
                ref: modal,
                trigger: "open-modal",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonHeader, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonToolbar, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButtons, {
                      slot: "start",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
                        onClick: () => {
                          var _modal$current;
                          return (_modal$current = modal.current) == null ? void 0 : _modal$current.dismiss();
                        },
                        children: "Cancel"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 135,
                        columnNumber: 53
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 49
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButtons, {
                      slot: "end",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
                        strong: true,
                        onClick: () => {
                          var _modal$current2;
                          return (_modal$current2 = modal.current) == null ? void 0 : _modal$current2.dismiss();
                        },
                        children: "Confirm"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 53
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 49
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 45
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 41
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonContent, {
                  className: "ion-padding",
                  children: filter.filter
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 41
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonList, {
                lines: "full",
                children: documents.data.response.length > 0 ? documents.data.response.map(doc => {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    item: doc,
                    isFetching: documents.isFetching,
                    isPreviousData: documents.isPreviousData
                  }, doc.id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 57
                  }, undefined);
                }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                  className: "ion-align-items-center ion-justify-content-center",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                    className: "ion-text-center ion-margin-top",
                    size: "auto",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                      className: "ion-justify-content-center",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                        size: "8",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                          className: "ion-justify-content-center",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonImg, {
                            className: "",
                            src: iconEmpty
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 65
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 186,
                          columnNumber: 61
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 57
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 53
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonTitle, {
                      className: "ion-margin-top ion-margin-bottom",
                      children: "N\xE3o foi encontrado Dados."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 53
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonText, {
                      class: "ion-margin-top",
                      children: "N\xE3o existem dados dispon\xEDveis nesta busca. Ajuste o filtro, se necess\xE1rio."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 53
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 49
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 37
              }, undefined)]
            }, void 0, true) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonFooter, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonToolbar, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
            children: documents.isSuccess ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                className: "borders-x",
                size: "3",
                "size-sm": "auto",
                "offset-sm": "3",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButtons, {
                  className: "ion-justify-content-center",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
                    onClick: previousPage,
                    disabled: page === 1,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
                      slot: "icon-only",
                      icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.chevronBack
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 234,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 45
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
                    onClick: nextPage,
                    disabled: page === pageQty.current,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
                      slot: "icon-only",
                      icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.chevronForward
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 245,
                      columnNumber: 49
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 45
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                className: "borders-x",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonTitle, {
                  children: `${page}/${pageQty.current}`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 252,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                className: "borders-x",
                size: "4",
                "size-sm": "auto",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonTitle, {
                  children: `${documentsQty.current} Documents`
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 37
              }, undefined)]
            }, void 0, true) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentsPage);

/***/ })

}])
//# sourceMappingURL=src_app_pages_DocumentsPage_tsx.js.map
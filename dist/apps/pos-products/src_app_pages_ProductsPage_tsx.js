(self["webpackChunkpos_products"] = self["webpackChunkpos_products"] || []).push([["src_app_pages_ProductsPage_tsx"],{

/***/ "./src/app/components/Product.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Sales.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Search.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/pages/ProductsPage.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Product.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loaders_ListItemLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/components/loaders/ListItemLoader.tsx");
/* harmony import */ var _Product_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/components/Product.scss");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-products/src/app/components/Product.tsx";






const Product = ({
  item,
  isFetching,
  isPreviousData
}) => {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  const actualSale = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(['actualSale'], () => 0, {
    staleTime: Infinity
  });
  const addToSale = async item => {
    queryClient.setQueryData(['sales', actualSale.data], oldData => {
      // verify if item is already in sale if it is add 1 to qty if not add item to sale
      const itemInSale = oldData.find(saleItem => saleItem.id === item.id);
      if (itemInSale) {
        itemInSale.qty = itemInSale.qty + 1;
      }
      return itemInSale ? [...oldData] : [...oldData, Object.assign({}, item, {
        qty: 1
      })];
    });
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-no-useless-fragment
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: isFetching && isPreviousData ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_loaders_ListItemLoader__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
        onClick: () => addToSale(item),
        size: "1",
        "size-md": "1",
        sizeLg: "1",
        sizeSm: "3",
        sizeXs: "3",
        className: "product-item",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          className: "price-bold",
          children: ["\u20AC ", item.prices.gross]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, undefined)
    }, void 0, false)
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ }),

/***/ "./src/app/components/ProductsHeader.tsx":
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
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-products/src/app/components/ProductsHeader.tsx";





const ProductsHeader = ({
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
            children: "Products"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsHeader);

/***/ }),

/***/ "./src/app/components/Sales.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/ionicons/icons/ionicons/icons");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ionicons_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Sales_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/components/Sales.scss");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-products/src/app/components/Sales.tsx";






const Sales = () => {
  var _sales$data;
  const actualSale = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([['actualSale']], () => 0, {
    staleTime: Infinity
  });
  const sales = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['sales', actualSale.data], () => [], {
    staleTime: Infinity
  });
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  if (sales.isError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Something went wrong..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }, undefined);
  }
  const decreaseActualSale = () => {
    queryClient.setQueryData(['actualSale'], oldSale => {
      // verify if actualSale is 0 if it is return 0 if not return actualSale - 1
      return oldSale === 0 ? 0 : oldSale - 1;
    });
  };
  const increaseActualSale = () => {
    queryClient.setQueryData(['actualSale'], oldSale => {
      // add 1 to actualSale
      return oldSale + 1;
    });
  };
  const deleteFromSale = id => {
    // delete item from sale, if qty is 1 delete item if not decrease qty by 1
    queryClient.setQueryData(['sales', actualSale.data], oldData => {
      const itemInSale = oldData.find(saleItem => saleItem.id === id);
      if (itemInSale.qty >= 1) {
        itemInSale.qty = itemInSale.qty - 1;
      }
      return itemInSale.qty >= 1 ? [...oldData] : oldData.filter(item => item.id !== id);
    });
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
      className: "ion-justify-content-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
        className: "ion-justify-content-start flex",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
          fill: "clear",
          onClick: () => decreaseActualSale(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
            icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.arrowBack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
        className: "ion-justify-content-center flex ion-align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonText, {
          children: `Sale ${typeof actualSale.data === 'number' ? actualSale.data + 1 : null}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
          fill: "clear",
          onClick: () => increaseActualSale(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
            icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.addCircle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
        className: "ion-justify-content-end flex",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
          fill: "clear",
          onClick: () => increaseActualSale(),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
            icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.arrowForward
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonList, {
        lines: "full",
        className: "full-width",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: (_sales$data = sales.data) == null ? void 0 : _sales$data.map(item => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonText, {
                slot: "start",
                children: item.qty
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 37
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
                slot: "end",
                fill: "clear",
                onClick: () => deleteFromSale(item.id),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
                  icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_2__.close
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 41
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 37
              }, undefined)]
            }, item.id, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 33
            }, undefined);
          })
        }, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sales);

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
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-products/src/app/components/Search.tsx";




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
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-products/src/app/components/loaders/ListItemLoader.tsx";


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

/***/ "./src/app/logic/productsLogic.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProdDetail: () => (/* binding */ getProdDetail),
/* harmony export */   getProdsList: () => (/* binding */ getProdsList)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@capacitor/core/@capacitor/core");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__);

let baseUrl = 'http://vendus-pt/ws/v1.2/products/';
if (false) {}
const getProdsList = async apiKey => {
  let res;
  const options = {
    url: `${baseUrl}`,
    params: {
      api_key: apiKey,
      envelope: '1'
    }
  };
  await _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CapacitorHttp.get(options).then(response => res = response.data).catch(error => {
    return Promise.reject(new Error(error));
  });
  return res;
};
const getProdDetail = async (apiKey, id) => {
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

/***/ }),

/***/ "./src/app/pages/ProductsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductsPage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/pages/ProductsPage.scss");
/* harmony import */ var _logic_productsLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/logic/productsLogic.ts");
/* harmony import */ var _components_ProductsHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/app/components/ProductsHeader.tsx");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/app/components/Product.tsx");
/* harmony import */ var _components_Sales__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/components/Sales.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-products/src/app/pages/ProductsPage.tsx";









const iconEmpty = '/assets/img/icon-empty.svg';
const ProductsPage = ({
  apiKey
}) => {
  const products = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)(['products'], () => _logic_productsLogic__WEBPACK_IMPORTED_MODULE_3__.getProdsList(apiKey), {
    keepPreviousData: true,
    staleTime: 60 * 1000
  });
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const setQueryString = queryString => {
    setQuery(queryString);
  };

  // if (products.isSuccess) {
  //     if (products.data.headers.length > 0) {
  //         console.log("Products: ", products.data);
  //     }
  // }

  if (products.isError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
      children: "Something went wrong..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 16
    }, undefined);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonPage, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProductsHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setQueryString: setQueryString
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonContent, {
      fullscreen: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
        className: "h--100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
          className: "h--100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            size: "12",
            "size-lg": "8",
            className: "side-menu",
            children: products.isSuccess ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              children: products.data.response.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
                fixed: true,
                className: "product-list",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                  children: products.data.response.map(product => {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
                      item: product,
                      isFetching: products.isFetching,
                      isPreviousData: products.isPreviousData
                    }, product.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 61
                    }, undefined);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 41
              }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                className: "ion-align-items-center ion-justify-content-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                  className: "ion-text-center ion-margin-top",
                  size: "auto",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                    className: "ion-justify-content-center",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
                      size: "8",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
                        className: "ion-justify-content-center",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonImg, {
                          className: "",
                          src: iconEmpty
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 61
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 57
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 53
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 49
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonTitle, {
                    className: "ion-margin-top ion-margin-bottom",
                    children: "N\xE3o foi encontrado Dados."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 49
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonText, {
                    class: "ion-margin-top",
                    children: "N\xE3o existem dados dispon\xEDveis nesta busca. Ajuste o filtro, se necess\xE1rio."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 49
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 41
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, undefined) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            size: "12",
            "size-sm": "4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Sales__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonFooter, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonToolbar, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
              size: "12",
              className: "ion-text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                children: "Footer"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsPage);

/***/ })

}])
//# sourceMappingURL=src_app_pages_ProductsPage_tsx.js.map
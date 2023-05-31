(self["webpackChunkpos_documents"] = self["webpackChunkpos_documents"] || []).push([["src_app_pages_DocumentDetailPage_tsx"],{

/***/ "./src/app/components/DocumentDetail.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Documents.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/PopOverMenu.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/Table.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/components/DocumentDetail.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DocumentDetail_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app/components/DocumentDetail.css");
/* harmony import */ var _Documents_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/app/components/Documents.css");
/* harmony import */ var _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/logic/documentsLogic.ts");
/* harmony import */ var _logic_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/logic/functions.ts");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react-content-loader/react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/components/Table.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/DocumentDetail.tsx";










const DocumentDetail = ({
  apiKey,
  id
}) => {
  var _document$data$client;
  const document = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)(['document', id], () => _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_2__.getDocDetail(apiKey, id), {
    staleTime: 60 * 1000
  });

  // if (document.isSuccess) {
  //     console.log(document.data)
  // }

  if (document.isLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "ion-padding-start ion-padding-top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_content_loader__WEBPACK_IMPORTED_MODULE_4__.Facebook, {
        width: '96%'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined);
  }
  if (document.isError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonGrid, {
      className: "ion-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          size: "12",
          "size-sm": "5",
          className: "ion-no-padding ion-padding-end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "error",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding",
              children: "Something went wrong..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, {
      className: `${document.data.type}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonTitle, {
        id: "detail-doc-title",
        className: "ion-text-center text-white",
        children: document.data.number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonGrid, {
      className: "ion-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          size: "12",
          "size-sm": "5",
          className: "ion-no-padding ion-padding-end",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonTitle, {
            className: "document__header-title",
            children: "Documento"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: ["Data: ", document.data.date]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: ["Tipo: ", document.data.type]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          size: "12",
          offset: "1",
          "size-sm": "6",
          className: "ion-no-padding",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonTitle, {
            className: "document__header-title",
            children: "Cliente"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: [document.data.client.name, document.data.client.fiscal_id !== '---------' ? ' - ' + document.data.client.fiscal_id : '']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: (_document$data$client = document.data.client) == null ? void 0 : _document$data$client.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "",
              children: `${document.data.client.postalcode ? document.data.client.postalcode : ''}${document.data.client.city ? ' - ' + document.data.client.city : ''}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined), ['GT', 'GA', 'GR', 'GD'].includes(document.data.type) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonGrid, {
      className: "ion-padding",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          size: "12",
          "size-sm": "5",
          className: "ion-no-padding ion-padding-end",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonTitle, {
            className: "document__header-title",
            children: "Local de Carga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: document.data.movement_of_goods.landpoint.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: [document.data.movement_of_goods.landpoint.postalcode, ' ', "-", ' ', document.data.movement_of_goods.landpoint.city]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: [document.data.movement_of_goods.landpoint.date, ' ', "\xE0s", ' ', document.data.movement_of_goods.landpoint.time]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          size: "12",
          offset: "1",
          "size-sm": "6",
          className: "ion-no-padding",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonTitle, {
            className: "document__header-title",
            children: "Local de Descarga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: document.data.movement_of_goods.loadpoint.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: [document.data.movement_of_goods.loadpoint.postalcode, ' ', "-", ' ', document.data.movement_of_goods.loadpoint.city]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: [document.data.movement_of_goods.loadpoint.date, ' ', "\xE0s", ' ', document.data.movement_of_goods.loadpoint.time]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
            children: document.data.observations
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }, undefined) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "ion-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
        headers: _logic_functions__WEBPACK_IMPORTED_MODULE_3__.getHeaderType(document.data.type),
        items: _logic_functions__WEBPACK_IMPORTED_MODULE_3__.toggleDocType(document.data.type, document.data.items)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "ion-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonGrid, {
        className: "no-padding",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
            size: "5",
            className: "ion-no-padding",
            children: document.data.payments ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
              headers: [{
                title: 'Pagamento',
                size: '7'
              }, {
                title: 'Total',
                end: true
              }],
              items: document.data.payments.map(payment => {
                return {
                  title: payment.title,
                  amount: payment.amount
                };
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 33
            }, undefined) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
            offset: "2",
            size: "5",
            className: "ion-no-padding",
            children: document.data.taxes ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
              headers: [{
                title: 'Taxa',
                end: true
              }, {
                title: 'Base',
                end: true
              }, {
                title: 'IVA',
                end: true
              }, {
                title: 'Total',
                end: true
              }],
              items: document.data.taxes.map(tax => {
                return {
                  rate: `${tax.rate}%`,
                  base: tax.base,
                  amount: tax.amount,
                  total: tax.total
                };
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 33
            }, undefined) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "ion-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonGrid, {
        className: "no-padding",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
            offset: "7",
            size: "5",
            className: "ion-no-padding",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
              headers: [{
                title: 'Total'
              }, {
                title: document.data.amount_gross,
                end: true
              }],
              items: []
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 13
    }, undefined), ['DC', 'EC', 'PF', 'OT', 'FT', 'FR', 'FS', 'RG'].includes(document.data.type) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonGrid, {
      className: "ion-padding",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonRow, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonCol, {
          size: "12",
          "size-sm": "6",
          className: "ion-no-padding ion-padding-end",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonTitle, {
            className: "document__header-title",
            children: "Informa\xE7\xF5es do Utilizador"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "flex-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: ["Nome: ", document.data.status.user_id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: ["Loja: ", document.data.store_id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: ["Caixa: ", document.data.register_id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 33
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_6__.IonText, {
              className: "ion-padding-top",
              children: ["Data: ", document.data.system_time]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 334,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }, undefined) : null]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentDetail);

/***/ }),

/***/ "./src/app/components/PopOverMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/ionicons/icons/ionicons/icons");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionicons_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PopOverMenu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/components/PopOverMenu.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/PopOverMenu.tsx";





const PopOverMenu = ({
  children,
  styles: _styles = {
    undefined
  }
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
      id: "click-trigger",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        slot: "icon-only",
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.settingsSharp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonPopover, {
      trigger: "click-trigger",
      triggerAction: "click",
      size: "auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonContent, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopOverMenu);

/***/ }),

/***/ "./src/app/components/Table.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/app/components/Table.css");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/Table.tsx";




const Table = ({
  headers,
  items
}) => {
  const [sizes, setSizes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [end, setEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    headers.forEach(header => {
      setSizes(sizes => [...sizes, header.size]);
      setEnd(end => [...end, header.end]);
    });
  }, [headers]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
    className: "no-padding",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
      className: "header-row",
      children: headers.map((header, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
          size: header.size,
          className: `text-bold ${header.end ? 'ion-text-end' : ''}`,
          children: header.title
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), items.map((item, index) => {
      const props = Object.keys(item);
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
        className: "row",
        children: props.map((prop, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            size: sizes[index],
            className: `${end[index] ? 'ion-text-end' : ''}`,
            children: item[prop]
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }, undefined);
        })
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./src/app/pages/DocumentDetailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PopOverMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/app/components/PopOverMenu.tsx");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/ionicons/icons/ionicons/icons");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ionicons_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webpack/sharing/consume/default/react-router/react-router");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DocumentDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/app/components/DocumentDetail.tsx");
/* harmony import */ var _components_DocumentDetailOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/app/components/DocumentDetailOptions.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/pages/DocumentDetailPage.tsx";









const DocumentDetailPage = ({
  apiKey
}) => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const documentOptions = (0,_components_DocumentDetailOptions__WEBPACK_IMPORTED_MODULE_7__.useDocumentDetailsOptions)(apiKey);
  const history = (0,react_router__WEBPACK_IMPORTED_MODULE_5__.useHistory)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonPage, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonHeader, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonToolbar, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButtons, {
          slot: "start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonMenuButton, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButton, {
            onClick: () => history.push('/documents'),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
              icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_4__.arrowBackSharp,
              slot: "start"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonButtons, {
          slot: "end",
          className: "ion-hide-lg-up",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Suspense), {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_PopOverMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
              children: documentOptions.details
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonContent, {
      fullscreen: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonGrid, {
        className: "h--100",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonRow, {
          className: "h--100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            size: "12",
            "size-lg": "9",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DocumentDetail__WEBPACK_IMPORTED_MODULE_6__["default"], {
              apiKey: apiKey,
              id: id
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonCol, {
            className: "side-menu ion-hide-lg-down",
            size: "12",
            "size-sm": "3",
            children: documentOptions.details
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentDetailPage);

/***/ })

}])
//# sourceMappingURL=src_app_pages_DocumentDetailPage_tsx.js.map
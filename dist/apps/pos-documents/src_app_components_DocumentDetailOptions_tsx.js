(self["webpackChunkpos_documents"] = self["webpackChunkpos_documents"] || []).push([["src_app_components_DocumentDetailOptions_tsx"],{

/***/ "./src/app/components/DocumentDetailOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useDocumentDetailsOptions: () => (/* binding */ useDocumentDetailsOptions)
/* harmony export */ });
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/@ionic/react/@ionic/react");
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ionic_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/ionicons/icons/ionicons/icons");
/* harmony import */ var ionicons_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ionicons_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/app/logic/documentsLogic.ts");
/* harmony import */ var _logic_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/app/logic/functions.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/halleylucena/dev/nex-monorepo/apps/pos-documents/src/app/components/DocumentDetailOptions.tsx";









const DocumentDetailOptions = ({
  apiKey
}) => {
  const {
    id
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = (0,_ionic_react__WEBPACK_IMPORTED_MODULE_0__.useIonLoading)();
  const docType = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  const document = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(['document', id], () => _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_5__.getDocDetail(apiKey, id), {
    staleTime: 60 * 1000
  });
  if (document.isSuccess) {
    docType.current = document.data.type;
  }
  if (document.isLoading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {}, void 0, false);
  }
  if (document.isError) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonList, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonText, {
            className: "ion-padding",
            children: "Something went wrong..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
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
    }, undefined);
  }
  const showLoading = msg => {
    present({
      message: msg
    });
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonList, {
    lines: "full",
    className: "ion-no-padding",
    children: [_logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'edit') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "FS",
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.create,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Editar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'print') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "FT",
      button: true,
      detail: true,
      onClick: () => {
        showLoading('A imprimir...');
        setTimeout(() => dismiss(), 3000);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.printSharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Imprimir"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'sendEmail') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "NH",
      button: true,
      detail: true,
      onClick: () => {
        showLoading('A Enviar Email...');
        setTimeout(() => dismiss(), 3000);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.mailSharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Enviar por E-mail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'cancel') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "RG",
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.close,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Anular"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'creditNote') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "NC",
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.documentTextSharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Nota de Cr\xE9dito"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'createTransport') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "FS",
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.carSharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Criar Transporte"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'offerCoupon') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "FR",
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.giftSharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Tal\xE3o de Oferta"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'copyToSale') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "RC",
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.copySharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Copiar para a venda"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'downloadPdf') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      className: "GO",
      button: true,
      detail: true,
      onClick: () => {
        showLoading('Downloading PDF...');
        _logic_documentsLogic__WEBPACK_IMPORTED_MODULE_5__.downloadPdf(apiKey, id, document.data.number, dismiss);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.documentSharp,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Download PDF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }, undefined) : null, _logic_functions__WEBPACK_IMPORTED_MODULE_6__.docPermission(docType.current, 'registerPayment') ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonItem, {
      button: true,
      detail: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonIcon, {
        icon: ionicons_icons__WEBPACK_IMPORTED_MODULE_1__.logoEuro,
        slot: "start"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_ionic_react__WEBPACK_IMPORTED_MODULE_0__.IonLabel, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
          children: "Registrar Pagamento"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentDetailOptions);
const useDocumentDetailsOptions = apiKey => {
  const details = DocumentDetailOptions({
    apiKey: apiKey
  });
  return {
    details
  };
};

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

/***/ })

}])
//# sourceMappingURL=src_app_components_DocumentDetailOptions_tsx.js.map
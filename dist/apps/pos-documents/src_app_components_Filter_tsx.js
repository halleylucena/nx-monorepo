(self["webpackChunkpos_documents"] = self["webpackChunkpos_documents"] || []).push([["src_app_components_Filter_tsx"],{

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
//# sourceMappingURL=src_app_components_Filter_tsx.js.map
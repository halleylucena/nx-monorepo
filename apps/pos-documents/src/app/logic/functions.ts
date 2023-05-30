export const toggleArray = (array: string[], item: string): string[] => {
    const arr = array;
    if (arr.indexOf(item) === -1) {
        arr.push(item);
    } else {
        arr.splice(arr.indexOf(item), 1);
    }
    return arr;
};

type header = {
    title: string;
    size?: string | undefined;
    end?: boolean;
};

const headersFt: header[] = [
    {
        title: 'Produto',
        size: '5',
    },
    {
        title: 'Preço/Uni.',
        end: true,
    },
    {
        title: 'Qtd.',
        end: true,
    },
    {
        title: 'Preço',
        end: true,
    },
];

const headersRg: header[] = [
    {
        title: 'Documento',
        size: '6',
    },
    {
        title: 'Faturado',
        end: true,
    },
    {
        title: 'Pago',
        end: true,
    },
];

const headersNc: header[] = [
    {
        title: 'Produto',
        size: '5',
    },
    {
        title: 'Stock',
    },
    {
        title: 'Qtd.',
    },
    {
        title: 'Preço/Uni.',
    },
    {
        title: 'Preço',
        end: true,
    },
];

export const getHeaderType = (type: string): header[] => {
    if (
        [
            'FT',
            'DC',
            'FR',
            'GT',
            'GA',
            'GR',
            'GD',
            'EC',
            'PF',
            'OT',
            'FS',
        ].includes(type)
    )
        return headersFt;
    if (['RG'].includes(type)) return headersRg;
    if (['NC'].includes(type)) return headersNc;
    return [];
};

// TODO: make this function
export const toggleDocType = (type: string, items: any[]) => {
    if (
        [
            'FT',
            'DC',
            'FR',
            'GT',
            'GA',
            'GR',
            'GD',
            'EC',
            'PF',
            'OT',
            'FS',
        ].includes(type)
    ) {
        return items.map((item: any) => {
            return {
                title: item.title,
                net_unit: item.amounts.net_unit,
                qty: item.qty,
                price: item.amounts.net_total,
            };
        });
    }
    if (['NC'].includes(type)) {
        return items.map((item: any) => {
            return {
                title: item.title,
                stock: item.stock_control,
                qty: item.qty,
                net_unit: item.amounts.net_unit,
                price: item.amounts.net_total,
            };
        });
    }
    if (['RG'].includes(type)) {
        return items.map((item: any) => {
            return {
                title: item.title,
                net_unit: item.amounts.net_total,
                gross_total: item.amounts.gross_total,
            };
        });
    }
    return [];
};

const permissions: any = {
    print: [
        'FT',
        'DC',
        'FR',
        'GT',
        'GA',
        'GR',
        'GD',
        'EC',
        'PF',
        'OT',
        'FS',
        'NC',
        'RG',
    ],
    sendEmail: [
        'FT',
        'DC',
        'FR',
        'GT',
        'GA',
        'GR',
        'GD',
        'EC',
        'PF',
        'OT',
        'FS',
        'NC',
        'RG',
    ],
    creditNote: ['FT', 'FR', 'FS'],
    createTransport: ['FT', 'FR', 'FS'],
    offerCoupon: ['FT', 'FR', 'FS'],
    copyToSale: [
        'FT',
        'DC',
        'FR',
        'GT',
        'GA',
        'GR',
        'GD',
        'EC',
        'PF',
        'OT',
        'FS',
    ],
    downloadPdf: [
        'FT',
        'DC',
        'FR',
        'GT',
        'GA',
        'GR',
        'GD',
        'EC',
        'PF',
        'OT',
        'FS',
        'NC',
        'RG',
    ],
    registerPayment: [],
    edit: ['GT', 'GA', 'GR', 'GD'],
    cancel: ['GT', 'GA', 'GR', 'GD', 'EC', 'PF', 'OT', 'NC', 'RG'],
};

export const docPermission = (
    docType: string | undefined,
    permissionType: string
) => {
    if (permissions[`${permissionType}`].includes(docType)) {
        return true;
    }
    return false;
};

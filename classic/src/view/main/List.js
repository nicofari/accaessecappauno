Ext.define('AccaEsseCappaUno.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'AccaEsseCappaUno.store.Words'
    ],

    title: 'List view',

    store: {
        type: 'words'
    },

    columns: [
        { text: 'Pinyin',  dataIndex: 'pinyinToneSpace' },
        { text: 'Hanzi',  dataIndex: 'hanzi' },
        { text: 'Definition',  dataIndex: 'definition', width: 500, align: 'left' }
    ],

    listeners: {
        rowdblclick: 'onRowDblClick'
    }
});

/**
 * This view is an example list of people.
 */
Ext.define('AccaEsseCappaUno.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'AccaEsseCappaUno.store.Words'
    ],

    title: 'Words list',

    store: {
        type: 'words'
    },

    columns: [
        { text: 'Pinyin',  dataIndex: 'pinyinToneSpace' },
        { text: 'Hanzi',  dataIndex: 'hanzi' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

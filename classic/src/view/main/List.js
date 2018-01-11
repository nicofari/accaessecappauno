/**
 * This view is an example list of people.
 */
Ext.define('AccaEsseCappaUno.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'AccaEsseCappaUno.store.Words'
    ],

    title: 'Words',

    store: {
        type: 'words'
    },

    columns: [
        { text: 'Pinyin',  dataIndex: 'pinyinToneSpace' },
        { text: 'Hanzi',  dataIndex: 'hanzi' },
        { text: 'Definition',  dataIndex: 'definition', width: 500, align: 'left' }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

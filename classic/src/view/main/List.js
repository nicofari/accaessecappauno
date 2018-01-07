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
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

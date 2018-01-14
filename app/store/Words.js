Ext.define('AccaEsseCappaUno.store.Words', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    alias: 'store.words',
    storeId: 'words',

    fields: [
        'pinyinToneSpace', 'hanzi', 'definition'
    ],

    proxy: {
        type: 'ajax',
        url: 'resources/words.json',
        reader: {
            type: 'json',
            rootProperty: 'words'
        }
    }
});

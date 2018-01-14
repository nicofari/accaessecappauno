Ext.define('AccaEsseCappaUno.view.main.Card', {
    extend: 'Ext.form.Panel',
    xtype: 'maincard',
    id: 'modern-maincard',

    requires: [
        'AccaEsseCappaUno.store.Words'
    ],

    title: 'Card view',

    store: {
        type: 'words'
    },

    defaultType: 'textfield',

    items: [
        { fieldLabel: 'Pinyin',  name: 'pinyinToneSpace' },
        { fieldLabel: 'Hanzi',  name: 'hanzi' },
        { fieldLabel: 'Definition',  name: 'definition', width: 500 }
    ],

    tools: [
        { type: 'prev', iconCls: 'x-fa fa-backward', handler: 'onModernClickPrev', tooltip: 'Previous word' },
        { type: 'next', iconCls: 'x-fa fa-forward', handler: 'onModernClickNext', tooltip: 'Next word' }
    ]

});

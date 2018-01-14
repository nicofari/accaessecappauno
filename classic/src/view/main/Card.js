Ext.define('AccaEsseCappaUno.view.main.Card', {
    extend: 'Ext.form.Panel',
    xtype: 'maincard',

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

    bbar: [
        { xtype: 'button', iconCls: 'x-fa fa-fast-backward', handler: 'onClickFirst', tooltip: 'Go to first word' },
        { xtype: 'button', iconCls: 'x-fa fa-backward', handler: 'onClickPrev', tooltip: 'Previous word' },
        { xtype: 'button', iconCls: 'x-fa fa-forward', handler: 'onClickNext', tooltip: 'Next word' },
        { xtype: 'button', iconCls: 'x-fa fa-fast-forward', handler: 'onClickLast', tooltip: 'Go to last word' }
    ]

});

/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('AccaEsseCappaUno.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onRowDblClick: function (sender, record) {
        this._currentRecordPosition = this._getRecordPosition(record);
        this._getMainTabPanel().setActiveTab(2);
    },

    _getMainTabPanel: function () {
        return Ext.ComponentQuery.query('tabpanel')[0];
    },

    _getRecordPosition: function (record) {
        return this._getStore().indexOf(record);
    },

    _getStore: function () {
        return Ext.data.StoreManager.lookup('words');
    },

    onTabChange: function (tabPanel, newCard) {
        if (newCard.title === 'Cards') {
            let form = newCard.query('form')[0];
            form.loadRecord(this._getCurrentRecord());
        }
    },

    _getCurrentRecord: function () {
        if (!this._currentRecordPosition) {
            this._currentRecordPosition = 0;
        }
        return this._getStore().getAt(this._currentRecordPosition);
    },

    onClickFirst: function (sender) {
        this._currentRecordPosition = 0;
        this._loadCurrentRecord(sender);
    },

    _loadCurrentRecord: function (sender) {
        this._getForm(sender).loadRecord(this._getCurrentRecord());
    },

    _getForm: function (sender) {
        return sender.up('form');
    },

    onClickPrev: function (sender) {
        if (this._currentRecordPosition > 0) {
            this._currentRecordPosition--;
        }
        this._loadCurrentRecord(sender);
    },

    onClickNext: function (sender) {
        if (this._currentRecordPosition < this._getRecordCount() - 1) {
            this._currentRecordPosition++;
        }
        this._loadCurrentRecord(sender);
    },

    onClickLast: function (sender) {
        this._currentRecordPosition = this._getRecordCount() - 1;
        this._loadCurrentRecord(sender);
    },

    _getRecordCount: function () {
        return this._getStore().getCount();
    }
});

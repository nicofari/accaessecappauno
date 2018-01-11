/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('AccaEsseCappaUno.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'AccaEsseCappaUno',
        homeText: `<h1>Welcome to Accaessecappauno!</h1> <p />
        This is an app to practice words for HSK level 1 exam. <p />
        Click on List to see the requested words. <p />
        Words list comes from https://www.hsk.academy`
    }

    //TODO - add data, formulas and/or methods to support your view
});

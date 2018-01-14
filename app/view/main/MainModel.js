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
        Click on Cards to see the words one by one. <p />
        From the list you can switch to the card view double clicking on a row. <p />
        Words list comes from <a href="https://www.hsk.academy">Hsk Academy</a> <p />
        Comments are welcome! <p />
        nicola.farina64@gmail.com`
    }

    //TODO - add data, formulas and/or methods to support your view
});

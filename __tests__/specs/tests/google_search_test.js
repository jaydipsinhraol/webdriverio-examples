import {
    browser,
    chai
}from '../../setup/test_helper';
import google_search_page from '../pageobjects/google_search.page';
import config from '../../test.conf.js'
import Q from 'q';

let _google_search_page,_configs;


describe('Feature: getting started with webdriver.io', () => {
        before(() => {
            _configs = new config();
            _google_search_page = new google_search_page();
        });
        
        describe('Simple google search',()=>{
            it('Should open up the browser, navigate to Google, search and assert search results', (done) => {
                    let _g=_google_search_page;
                    return _g.navigate()
                           .then(_g.search)
                           .then(_g.areThereResults)
                           .then(undefined,(error)=>{console.log(error); done(error)})
                           .finally(done);
            });            
        })
})

after(() => {
    _google_search_page.end();
});

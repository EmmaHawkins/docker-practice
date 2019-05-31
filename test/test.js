import Page from './page';
const page = new Page();


fixture (`Some tests and that`)
    .page(page.uRl)
    .beforeEach( async t => {
        await t
            .expect(page.title.innerText).contains(`Register`, `Nah mate!`)
            .expect(page.navbar).ok("Nav not there mate...");
    });


    test(`Fill in the form plz`, async (t) => {        
        await t
        .typeText(page.firstName, page.user)
        .typeText(page.lastName, page.pwrd);
    });
    

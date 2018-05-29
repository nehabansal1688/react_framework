describe('sample test groupings', () => {
    it('sample test case for addition',() => {
        expect(2+3).toEqual(5);
    })

    //test marked with xit will be exculuded
    xit('exculeded test',()=>{
        expect(5-4).toEqual(1);
    })

    //test marked with fit will be the focused one
    fit("only this test case will run",()=>{
        expect(8*8).toEqual(64);
    })

    fit("this too will run",()=>{
        expect(8+8).toEqual(16);
    })

    
})
import { ReversePipe } from "./reverse.pipe"

describe('Test Reverse Pipe',()=>{
    it('should reverse the string', () => {
        let reversePipe = new ReversePipe();
            expect(reversePipe.transform('hello')).toEqual('olleh');
    })
})
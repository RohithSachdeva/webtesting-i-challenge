const enhancer = require('./enhancer.js');




// test away!

//test success, fail, repair .... insert values for the items?  
//durability: 85
//enhancement: 33  ??   or enhancement = 33?  item.enhancement. 

//     //success -> - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.


describe("Enhancer Tests", () => {
    describe("success", () => {
        it("Enhancement increases by 1, durability unchanged", () => {
            let item = {
                name: "destroyer",
                durability: 20,
                enhancement: 19
            };
            expect(enhancer.success(item)).toBe(20);
        });
    });
    describe("repair", () => {
        it("Repair durability to 100", () => {
            let item = {
                name: "Red scimitar",
                durability: 45,
                enhancement: 10,
            };
            expect(enhancer.repair(item)).toMatchObject({
                durability: 100,
            })
        })
    })
    describe("fail", () => {
        it("durability decreases if enhancement is less than 15", () => {
            let item = {
                name: "Big Kahuna",
                durability: 50,
                enhancement: 5,
            };
            expect(enhancer.fail(item)).toBe(45);
        })
    });

    describe("fail2", () => {
        it("durability decrease by 10 if enh is over 15", () => {
            let item = {
                name: "Little legend",
                durability: 50,
                enhancement: 15,
            };
            expect(enhancer.fail(item)).toMatchObject({
                durability: 40,
            });
        })
    })
    
    describe("fail3", () => {
        it("durability decrease by 10 if enh is over 15", () => {
            let item = {
                name: "Little legend2",
                durability: 50,
                enhancement: 19,
            };
            expect(enhancer.fail(item)).toMatchObject({
                durability: 40,
                enhancement: 18,
            });
        })
    })
});








// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
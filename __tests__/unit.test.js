// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone numebers test
test("1) Valid phone number testing...",()=>{
    expect(functions.isPhoneNumber("664-123-1234")).toBe(true);
})

test("2) Valid phone number testing...",()=>{
    expect(functions.isPhoneNumber("408-532-1143")).toBe(true);
})
test("3) Invalid phone number testing...",()=>{
    expect(functions.isPhoneNumber("003-223-444")).toBe(false);
})
test("4) Invalid phone number testing...",()=>{
    expect(functions.isPhoneNumber("04232354654757474")).toBe(false);
})


// Emails test
test("1) Valid email testing...",()=>{
    expect(functions.isEmail("yij011@ucsd.edu")).toBe(true);
})

test("2) Valid email testing...",()=>{
    expect(functions.isEmail("J929528617@gmail.com")).toBe(true);
})
test("3) Invalid email testing...",()=>{
    expect(functions.isEmail("yij 011@ucsd")).toBe(false);
})

test("4) Invalid email testing...",()=>{
    expect(functions.isEmail("J929528617@gmail")).toBe(false);
})

// StrongPassword test
test("1) Strong password testing...",()=>{
    expect(functions.isStrongPassword("J169yixin")).toBe(true);
})
test("2) Strong password testing...",()=>{
    expect(functions.isStrongPassword("J929528617yx")).toBe(true);
})
test("3) Weak password testing...",()=>{
    expect(functions.isStrongPassword("12345")).toBe(false);
})
test("4) Weak password testing...",()=>{
    expect(functions.isStrongPassword("hel")).toBe(false);
})

// Date Tets
test("1) Valid date testing...",()=>{
    expect(functions.isDate("11/11/2021")).toBe(true);
})
test("2) Valid date testing...",()=>{
    expect(functions.isDate("02/29/2008")).toBe(true);
})
test("3) Invalid date testing...",()=>{
    expect(functions.isDate("111120220")).toBe(false);
})
test("4) Invalid date testing...",()=>{
    expect(functions.isDate("4/3")).toBe(false);
})

// HexColor Test
test("1) Hex color testing...",()=>{
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
})
test("2) Hex color testing...",()=>{
    expect(functions.isHexColor("#130968")).toBe(true);
})
test("3) Hex color testing...",()=>{
    expect(functions.isHexColor("GGGGGG")).toBe(false);
})
test("4) Hex color testing...",()=>{
    expect(functions.isHexColor("Z12345")).toBe(false);
})
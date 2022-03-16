//One solution
const multiply = n => {
    if (n)
        for (let i = 1; i <= 10; i++)
            console.log(`${n} x  ${i} : ${n * i}`);
    else
        console.log("error");
}


multiply(process.argv[2]);




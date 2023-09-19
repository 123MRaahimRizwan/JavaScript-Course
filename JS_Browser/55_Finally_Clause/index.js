const func = () => {

    try {
        let a = 0;
        // console.log(program);
        console.log("Program ran successfully");
        return
        // finally will be executed even if you return the program
    } 
    
    catch (error) {
        console.log("There was an error");
        console.log(p);
    }
    
    finally {
        // Finally is used when there is an error in the try block or some error occurs in the catch block. Therefore finally's code will be definitely executed.
        
        console.log("Raahim is a good boy!");
        
        /* Finally is used mainly for these purposes:
        1. Close the file
        2. Exit the loop
        3. Write to the log file */
    }
};

func();
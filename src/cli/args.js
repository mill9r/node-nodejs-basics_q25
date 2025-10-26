const parseArgs = () => {
   const args = process.argv.slice(2);
   const composedArgs = args.reduce((acc, arg, i, arr) => {
    if(arg.startsWith('--')) {
      acc[arg] = null
    } else {
      acc[arr[i-1]] = arg
    }
     return acc;
   }, {})
   const out = Object.entries(composedArgs).map(([k,v]) => `${k} is ${v}`)
   console.log(out.join(', '))
};

parseArgs();

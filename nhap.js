async function abc(){
  const k = await setTimeout(()=>{
    console.log(1)
    return 99
  },0)
  console.log(k)
}
abc()
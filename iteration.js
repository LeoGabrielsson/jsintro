let name = 'Leo'
let chars = []
for(let x = 0; x < name.length;x++){
    chars.push(name[x])
}
chars.forEach(c=>{console.log(c)})

let bw = chars.map(c=>{
    return c+c
})
console.log(bw)

let q = [8,15,24,85]
let sum = q.reduce(n=>{
    return q +
})
let filtered = q.filter(n=>{
    return n!==24
})
console.log(sum)
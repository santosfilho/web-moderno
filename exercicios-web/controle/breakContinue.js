const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break //sai do for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue //ele pula pra próxima repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: //rutulo
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // sai do rotulo
        console.log(`Par = ${a},${b}`)
    }
}

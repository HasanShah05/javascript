try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) 
} finally {
  console.log('In any case I will be executed')
}

try {
    let lastName = 'shah'
    let fullName = firstName + ' ' + lastName
} catch (err) {
    console.log('The error name is:', err.name);
    console.log('The error meassage is:', err.message);
}finally{
    console.log('In any case i will be executed.');
    
}
throw new Error("required firstName");



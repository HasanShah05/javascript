//question no 1

let sentence =  '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'

let tenMostFrequentWords = (text, range=10) => {
   let pattern = /[a-z|A-Z]*\w/g;
   return Object.entries(text.match(pattern).reduce((dict, word) => {
      dict[word] = (dict[word] || 0) +1;
      return dict;
   }, {})).sort((a, b) => b[1]-a[1]).slice(0, range);
}

function cleanText(sentence) {
    let cleanedText =  sentence.replace(/[^a-zA-z\s]/gi, '')
    return tenMostFrequentWords(cleanedText)
}
console.log(cleanText(sentence));


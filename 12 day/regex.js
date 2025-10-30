/* let pattern = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern, flag)
console.log(regEx);*/

/* const str = 'I love Javascript'
const pattern = /love/g
const result = pattern.test(str)
console.log(result); */

/* const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result) */

const str = 'I love love Javascript'
const pattern = /love/gi
const result = str.search(pattern)
console.log(result);

/* const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = txt.replace(/python/gi, 'Javascript')
console.log(matchReplaced);
 */

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
matchReplaced = txt.replace(/%/gi , '')
console.log(matchReplaced);

const pattern2 = /[Aa]pple/g
const pattern3 = /[Aa]pple|[Bb]anana/g
const txt2 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away Banana. '
console.log(txt2.match(pattern2));
console.log(txt2.match(pattern3));

const txt3 = 'This regular expression example was made in January 12,  2020.'
const pattern4 = /\d/g
const pattern5 = /\d+/g
console.log(txt3.match(pattern4));
console.log(txt3.match(pattern5));

const txt4 = 'Apple and banana are fruits'
const pattern6 = /[a].*/g
console.log(txt4.match(pattern6));

const txt5 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const pattern7 = /[Ee]-?mail/g
console.log(txt5.match(pattern7));

const txt6 = 'This regular expression example was made in December 6,  2019.'
const pattern8 = /\b\w{4}\b/g 
console.log(txt6.match(pattern8));


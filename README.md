# A Luhn Algorithm Validator

The Luhn Algorithm
Credit card numbers can be validated with a process called the Luhn algorithm.<br/> 

The Luhn algorithm works like this:
<ol>
<li>Starting with the next to last digit and continuing with every other digit going back to the beginning of the card number, double the digit.</li>
<li>Sum all digits in the altered number.</li>
<li>If that total is a multiple of 10, the number is valid.</li>
</ol>

For example, given the card number 4408 0412 3456 7893:

Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3 <br/>
Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3<br/>
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70<br/>
Step 3:  70 % 10 == 0<br/>
<a href="https://en.wikipedia.org/wiki/Luhn_algorithm">Luhn Algorithm</a>
<br />
<br />
<strong>Code</strong>:
<br/>
Write a function validCard that takes a number as an argument and returns true for a valid number and false for an invalid number.
<ul>
<li>validCard(1234567890123456); //should be false</li>
<li>validCard(4408041234567893); //should be true</li>
<li>validCard(38520000023237); //should be true</li>
<li>validCard(4222222222222); //should be true</li>
</ul>



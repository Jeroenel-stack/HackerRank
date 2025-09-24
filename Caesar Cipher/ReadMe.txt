Key:

Create a alphabet that just repeats 10 times and get index from there
Its a string repeat so time complexity will be low

Steps:

Prepare alphabets

Define lowercase alphabet "abcdefghijklmnopqrstuvwxyz" and repeat it multiple times to handle wrap-around shifting.

Define uppercase alphabet as the uppercase version of the same repeated string.

Initialize result

Create an empty string finalStr to store the transformed characters.

Iterate over input string
For each character ch in s:

Case 1: Lowercase letter

Find the index of ch in the lowercase alphabet.

Append the character at position index + k to finalStr.

Case 2: Uppercase letter

Find the index of ch in the uppercase alphabet.

Append the character at position index + k to finalStr.

Case 3: Non-alphabet character

Append ch unchanged to finalStr.

Finish

Return finalStr as the encrypted string.
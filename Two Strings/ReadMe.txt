Goal: Check if two strings share at least one common character.

Initialize a lookup map (or set)

Create an empty map (or set) to keep track of characters from the first string s1.

Store characters of s1

Loop through each character in s1.

Add that character to the map, marking it as "present".

Check characters of s2

Loop through each character in s2.

For each character, check if it exists in the map.

Decision

If any character from s2 exists in the map → return "YES".

If the loop ends without finding a match → return "NO".
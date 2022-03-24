# // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# // Examples input/output:

# // XO("ooxx") => true
# // XO("xooxx") => false
# // XO("ooxXm") => true
# // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# // XO("zzoo") => false

def xo(s):
    count=0
    for x in s:
        if x=='o' or x=='O':
            count+=1
        if x=='x' or x=="X":
            count-=1
    if not count:
        return True
    if count:
        return False
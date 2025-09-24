Steps:

Sort space station indices

c.sort((a, b) => a - b)

Initialize variables

maxDist = 0 → to track maximum distance

lastCity = 0 → to track previous station

Check distance for the first city

firstCityDist = c[0]

maxDist = max(maxDist, firstCityDist)

Check distances between stations

For each city in c:

midCityDist = Math.floor((city - lastCity) / 2) → max distance for cities between lastCity and city

maxDist = max(maxDist, midCityDist)

lastCity = city

Check distance for the last city

lastCityDist = n - lastCity - 1

maxDist = max(maxDist, lastCityDist)

Return result

Return maxDist
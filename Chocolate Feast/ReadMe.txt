Steps:

Buy initial chocolates:

Compute bars = floor(n / c) (the chocolates bought with money).

Set wrappers = bars (each bar gives one wrapper).

While wrappers can be exchanged (wrappers >= m):

Compute additionalBars = floor(wrappers / m) (number of free chocolates from wrappers).

Add to total: bars = bars + additionalBars.

Update wrappers:

Use wrappers % m (remaining wrappers after exchange).

Add additionalBars (new wrappers from the free chocolates).

Repeat step 2 until wrappers < m (cannot exchange anymore).

Return total bars eaten (bars).
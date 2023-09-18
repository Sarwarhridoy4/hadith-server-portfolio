# Welcome to my Hadith server.

<b>Feature:</b>
<ul>
<li>Random hadith on each Refresh</li>
<li>Search using fiedname:
<ul>
  <li>
    hadith
  </li>
  <li>
    narrator
  </li>
  <li>
    source
  </li>
  <li>
    reference
  </li>
</ul>
</li>
</ul>


<b>Tach Stack:</b>
<ul>
<li>MongoDB</li>
<li>Mongoose</li>
<li>Express</li>
<li>Vercel</li>
</ul>

[API](https://random-hadith-server-i1yfit3my-sarwarhridoy4.vercel.app/)

# Search Hadith by:

<ul>
<li>hadith</li>
<li>narrator</li>
<li>source</li>
<li>reference</li>
</ul>

# API Structure:
<code>/search/:reference/:348</code>
<code>/:category</code> refers fildname for search like:

<ul>
<li>/search/hadith/whatever-you-search</li>
<li>/search/narrator/whatever-you-search</li>
<li>/search/source/whatever-you-search</li>
<li>/search/reference/whatever-you-search</li>
</ul>

<code>/:searchString</code> refers what to search in field

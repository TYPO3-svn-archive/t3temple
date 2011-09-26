## Constants for the first foreign language (L=1)
## (sys_language_uid doesn't have to be 1, this is set in plugin.t3temple.lang1.uid )

# cat=t3temple_lang1/uid/200; type=int; label=Syslanguage UID of foreign language
plugin.t3temple.lang1.uid = 0

# cat=t3temple_lang1/isoCode/220; type=string; label=Iso Code of first foreign language: 
plugin.t3temple.lang1.isoCode = de

# cat=t3temple_lang1/locale/240; type=string; label=Locale of first foreign language: 
plugin.t3temple.lang1.locale = de_DE.UTF-8

# cat=t3temple_lang1/titleTag/260; type=string; label=Title Tag in first foreign language: set the title tag that appears behind the page title
plugin.t3temple.lang1.titleTag = {$plugin.t3temple.titleTag}

# cat=t3temple_lang1/copyrightMessage/280; type=string; label=Copyright Message in first foreign language: Enter a footer message
plugin.t3temple.lang1.copyrightMessage = {$plugin.t3temple.copyrightMessage}

# cat=t3temple_lang1/searchWord/300; type=string; label=Search word in first foreign language: Default value shown in the search field
plugin.t3temple.lang1.searchWord = Suche

# cat=t3temple_lang1/breadcrumbYouAreHere/320; type=string; label=Text for "You are here" in the Breadcrumb in first foreign language: Enter your own text here.
plugin.t3temple.lang1.breadcrumbYouAreHere = Sie sind hier:


* Updated relativityFormsConversion.js
	- function added to privileged envelope
		+ accepts a boolean, uses a look-up if one it not received
		+ reads values, shows/hides and requires/not by GUID
	- function consumed directly by newly-added HYDRATE_LAYOUT_COMPLETE handler
	- PAGE_INTERACTION handler added
		+ distinguishes between change and submit
		+ uses GUID map to look up ID
		+ reads model data for field, sends to new privileged function
* Surface area tests altered
* test privileged function
* test eventhandlers, mocking that privileged function
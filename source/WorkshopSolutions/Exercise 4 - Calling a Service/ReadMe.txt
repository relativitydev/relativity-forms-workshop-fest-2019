
* data access layer added to privileged variables
	- url is a property of the DAL object
	- DAL function reads 4 values (1 by name 3 by GUID)
	- promiseFactory is used for its "all()" function
	- convenienceApi.relativityHttpClient keplerPost to APP-hosted Kepler API

* CREATE_CONSOLE is fleshed-out
	- creating a title, a button, a section, and appending them to rootElement
	- attaching a new function from the DAL object

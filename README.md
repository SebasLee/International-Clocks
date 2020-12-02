This project was a follow along from Linkedin learning to better understand Javascript. It definitely helped to better understand DOM manipulation and SVG's. The course built the project up only to the point where the time of the user's browser was shown. Afterwards, I decided to implement CSS styling and the times of other locations across the globe based on UTC rather than just on currrent browser location. 

The clocks' hands are accessed via DOM manipulation of the g element within the SVG's. They travel along a circular path that is defined in the HTML file and directed by the Javascript rotate method. The movement of the clocks' hands are determined by the arithmetic surrounding the 360 degrees of circles. The original product had setInterval methods calling the time functions every second. I changed it to have the function within the setIntervals so that way there'd be no need to call it.

The PM/AM feature is something I added on my own. It simply uses an if statement with DOM manipulation to indicate if the time is in the morning or afternoon. I also added DOM text color manipulation in order to better indicate to the user the meridiem. 

The times of the various cities are determined by the new Date methods calculating times with a locations' UTC and timezone offsets. It includes conversion of numbers to get the correct values. 

While I only included four cities, implementing more is very feasible since they rely on the same funcitons, just with different UTC values and HTML/CSS classes.
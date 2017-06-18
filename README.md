## Synopsis

The Knockout Truncate is a cutom binding handler that truncate the given html or plain text to first plain text and then reduce its length to given length of by default to 200

## Code Example

<div data-bind="truncate: htmlDate"></div>
<div data-bind="truncate: {value: htmlDate, length: 20 }"></div>
<script>
var myViewModel = {
    htmlDate = '<div><p>&nbsp; &amp;this is tesing content</p></div>';
};
ko.applyBindings(myviewModel)'
</script>

## Installation

<script src="./ko.truncate.min.js"></script>

## Demo
<a href="https://jsfiddle.net/sonsor/19uj8bnd/">https://jsfiddle.net/sonsor/19uj8bnd/</a>


## License
GPL

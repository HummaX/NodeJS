let tours = [{"tours1":"name of tour"}] 
// this is saved in .json file without variable, now we have to convert it from json to javscript array
// it dosent matter either it this array is in string or without string if its saved in json formate its JSON

JSON.parse(tours)
// now we can read this data in JS otherwise it will show buffer and values
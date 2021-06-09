# Data Processing Scripts

This directory holds the scripts used to preprocess the data so that it would be usable for the database. These are miscellaneous scripts that helped with processing data. 
---

## Recipe Extraction
---
<p>
  <strong> categorize_recipes_json_all.py </strong> is a python script that takes multiple json files containing recipe data and extracting recipes for my list of dishes and writes the results out to json files for each dish. The script compares titles of recipes to dish names to find the recipes for each dish. 
  
  <strong> finddishes.py </strong> is a python script that enhances the ability of the previous extraction script. Sometimes dishes have alternative names or the title has words in between the dish names in the title. This causes the simple comparison to not work and therefore we need to allow for different combinations and alternative names to allow for more accurate or complete extraction of the data. 
</p>

## Data Modification/ Cleaning
---
<p>
  <strong> checkdietstuff.py </strong> <sup>1</sup> is a script that creates diet specific json files from each dishes' recipe json file. This allows for easy identification of the diet specific recipes and are output to their own individual json file.  
  
  <strong> stringconvertor.py </strong> is a script that turned blocks of text into an array of lines. This was necessary so that the output on our display for the application would be more readable for the users. 
</p>

## Miscellaneous
---
<p>
  <strong> jsonreader.py </strong> was a test script that I used to confirm how to extract data from json files and use them in the way that I wanted. 
</p>

---

1: For the diet-based extraction of data, this is an effective but space inefficient method. A better use of this would to have tags in the documents for each recipe that indicated which diets it is suitable for. This would be more intensive on the query call for the recipes but would be more efficient in terms of memory and operations for the database. This is something that can be improved on for this project.  

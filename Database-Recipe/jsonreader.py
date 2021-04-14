import json

with open('recipebox\\recipes_raw_nosource_ar.json') as file:
    file_data = json.load(file)

file1 = open('recipes_raw_nosource_ar_titles.txt','w')

count = 0

for element in file_data:
	if file_data[element]:
		title = file_data[element]['title'] + '\n'
		file1.write(title)

		

	



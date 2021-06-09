import json

filename = "full_format_recipes"
with open( filename+'.json', encoding = 'utf-8') as file:
    file_data = json.load(file)

file1 = open(filename+'_titles.txt','w',encoding = 'utf-8')

count = 0

for element in file_data:
	if element and element['title']:
		title = element['title'] + '\n'
		file1.write(title)

		

	



import json

path = 'ModelRecipes\\'
jsonpath = 'recipebox\\'

#file2 = open('recipes_raw_nosource_ar_titles.txt','r')

file1 = jsonpath+'recipes_raw_nosource_ar.json'
file2 = jsonpath+'recipes_raw_nosource_epi.json'
file3 = jsonpath+'recipes_raw_nosource_fn.json'
file4 = 'full_format_recipes.json'

with open( file1, encoding = 'utf-8') as file1:
    file_data1 = json.load(file1)

with open( file2, encoding = 'utf-8') as file2:
    file_data2 = json.load(file2)

with open( file3, encoding = 'utf-8') as file3:
    file_data3 = json.load(file3)

with open( file4, encoding = 'utf-8') as file4:
    file_data4 = json.load(file4)

dishfile = open('newdishes.txt','r')

for dish in dishfile.readlines():
	food = dish.strip('\n')
	food1 = food.replace(' ','_')
	file = open(path+food1+'.json','w')

	file.write("[\n")
	for element in file_data1:
		if file_data1[element] and file_data1[element]['title']:
			title = file_data1[element]['title']
			if (food in title.lower()):
				print(title)
				file.write(json.dumps(file_data1[element], indent = 4) + ',\n')


	for element in file_data2:
		if file_data2[element] and file_data2[element]['title']:
			title = file_data2[element]['title']
			if (food in title.lower()):
				print(title)
				file.write(json.dumps(file_data2[element], indent = 4) + ',\n')

	for element in file_data3:
		if file_data3[element] and file_data3[element]['title']:
			title = file_data3[element]['title']
			if (food in title.lower()):
				print(title)
				file.write(json.dumps(file_data3[element], indent = 4) + ',\n')

	for element in file_data4:
		if element and element['title']:
			title = element['title']
			if (food in title.lower()):
				print(title)
				file.write(json.dumps(element, indent = 4) + ',\n')

	file.write("{}\n")
	file.write("]\n")
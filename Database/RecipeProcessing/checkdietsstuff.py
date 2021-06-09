import json
import os
import sys


#path = 'ModelRecipes\\'
#jsonpath = 'recipebox\\'
#food = 'steak'
#diet = 'vegan'
#isDiet = False

def dataJSON(datafile):
	with open(datafile, 'r',encoding= 'utf-8') as file:
		return json.load(file)


def find_diet_dishes(directory, diet):

	if diet == 'vegan':
		restrictions = ['cheese', 'prawns','pork', 'foie gras','prosciutto', 'lamb', 'goat', 'egg', 'beef', 'fish', 'chicken', 'venison', 'bacon', 'ham', 'sausage', 'shrimp', 'lobster', 'crab', 'oyster', 'mussel', 'scallop', 'clam', 'tuna', 'tilapia','squid','steak', 'salmon', 'turkey', 'mahi mahi', 'snapper', 'marlin', 'halibut', 'shark', 'duck', 'mahimahi', 'mahi-mahi', 'cod', 'rib', 'sirloin', 'octopus']
	elif diet == 'halal':
		restrictions = ['pork', 'bacon', 'alcohol', 'wine', 'liquor', 'ham', 'foie gras']
	elif diet == 'kosher':
		restrictions = ['pork', 'bacon', 'ham', 'snake', 'lobster', 'oyster', 'shrimp', 'mussel', 'scallop', 'clam']
	elif diet == 'vegetarian':
		restrictions = ['pork','prawns','prosciutto', 'foie gras', 'lamb', 'goat', 'beef', 'fish', 'chicken', 'venison', 'bacon', 'ham', 'sausage', 'shrimp', 'lobster', 'crab', 'oyster', 'mussel', 'scallop', 'clam', 'tuna', 'tilapia', 'squid','steak', 'salmon', 'turkey', 'mahi mahi', 'snapper', 'marlin', 'halibut', 'shark', 'duck', 'mahimahi', 'mahi-mahi', 'cod','rib', 'sirloin', 'octopus']
	elif diet == 'pescatarian':
		restrictions = ['pork', 'lamb', 'goat', 'beef', 'venison', 'bacon', 'ham', 'sausage','prosciutto', 'rib', 'sirloin', 'steak']
	elif diet == 'keto':
		restrictions = ['pasta', 'rice', 'cracker','sugar', 'noodle', 'potato', 'yam', 'taro', 'cassava', 'tortilla', 'bread', 'roll', 'naan', 'spaghetti', 'biscuit', 'gnocchi'];
	else: restrictions = [] 

	for filename in os.listdir(directory):
		file = os.path.join(directory,filename)
		if os.path.isfile(file):
			document = os.path.splitext(filename)[0]
			#collection.lstrip(directory + "\\")
			print(document)
			data = dataJSON(file)
		writefile = open(diet+directory + '\\' + document + '_' + diet + '.json','w')
		writefile.write('[\n')
		for element in data:
			isDiet = False
			if element and element['title']:
				title = element['title']
				if (diet in title.lower()):
					isDiet = True
					
			if element and 'categories' in element.keys():
				if element['categories']:
					categories = element['categories']
					for cat in categories:
						if diet in cat.lower():
							isDiet = True
			if element and element['ingredients']:
				ingredients = element['ingredients']
				Restricted = False
				for ingredient in ingredients:
					for restriction in restrictions:
						if restriction in ingredient.lower() or restriction in element['title'].lower():
							Restricted = True
				if not Restricted: isDiet = True
			if isDiet:
				print(element['title'])
				writefile.write(json.dumps(element, indent = 4) + ',\n')
		print('\n')
		writefile.write("{}\n")
		writefile.write("]\n")

USAGE = "Please enter the directory for the data.\n COMMAND: python checkdietsstuff.py directory diet\n"

if __name__ == '__main__':
	try:
		if len(sys.argv) == 3:
			directory = sys.argv[1]
			diet = sys.argv[2].lower()

		else:
			print(USAGE)
			exit()

		find_diet_dishes(directory,diet)

	except KeyboardInterrupt as keyboard_err:
		print("Process Interrupted\n")
	finally:
		print("Ended!")


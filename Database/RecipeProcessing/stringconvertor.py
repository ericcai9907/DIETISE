import json
import sys
import os

def convert(directory,diet):
	try:

		for filename in os.listdir(directory):
			file = os.path.join(directory,filename)
			if os.path.isfile(file):
				if diet != 'all': 
					document = os.path.splitext(filename)[0].split('_'+diet)[0]
					path = "ModifiedRecipes\\" + diet+"ModelRecipes\\"
					writefile = open(path + document + '_' + diet + '.json','w')
				else: 
					document = os.path.splitext(filename)[0]
					path = "ModifiedRecipes\\ModelRecipes\\"
					writefile = open(path + document + '.json','w')
				#collection.lstrip(directory + "\\")
				print(document)
				data = dataJSON(file)

				
				writefile.write('[\n')
				counter = 0
				for element in data:
					if element and 'instructions' in element.keys():
						if not isinstance(element['instructions'],list) and element['instructions']:
							#counter +=1
							#print(element['title'] + '\n')
							element['instructions'] = element['instructions'].split('\n')
					writefile.write(json.dumps(element, indent = 4) + ',\n')
				writefile.write('{}\n')
				writefile.write("]\n")

					
					
	except Exception as error:
		print("ERROR: {}".format(str(error)))
	else:
		print("completed\n")
		#print(str(counter) +'\n')


def dataJSON(datafile):
	with open(datafile, 'r',encoding= 'utf-8') as file:
		return json.load(file)

USAGE = "Please enter the directory for the data.\n COMMAND: python stringconvertor.py directory \n"

if __name__ == '__main__':
	try:
		if len(sys.argv) == 3:
			directory = sys.argv[1]
			diet = sys.argv[2].lower()

		else:
			print(USAGE)
			exit()

		convert(directory,diet)

	except KeyboardInterrupt as keyboard_err:
		print("Process Interrupted\n")
	finally:
		print("Ended!")
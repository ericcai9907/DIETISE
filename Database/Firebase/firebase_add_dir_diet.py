import json
import sys
import os
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

service_key = "yourservicekey.json"
dontAdd = ['artichoke_bottoms_in_olive_oil','pho']
def importData(directory,diet):
	try:
		cred_obj = credentials.Certificate(service_key)
		firebase_admin.initialize_app(cred_obj)

		db = firestore.client()

		for filename in os.listdir(directory):
			file = os.path.join(directory,filename)
			if os.path.isfile(file):
				document = os.path.splitext(filename)[0].split('_'+diet)[0]
				#collection.lstrip(directory + "\\")
				if document not in dontAdd:
					print(document)
					data = dataJSON(file)
					
					documentPtr = db.collection('recipes').document(document).collection(diet)
					for element in data:
						if element:
							documentPtr.add(element)
					
	except Exception as error:
		print("ERROR: {}".format(str(error)))
	else:
		print("completed")


def dataJSON(datafile):
	with open(datafile, 'r',encoding= 'utf-8') as file:
		return json.load(file)

USAGE = "Please enter the directory for the data.\n COMMAND: python firebase_add_dir.py directory diet\n"

if __name__ == '__main__':
	try:
		if len(sys.argv) == 3:
			directory = sys.argv[1]
			diet = sys.argv[2].lower()

		else:
			print(USAGE)
			exit()

		importData(directory,diet)

	except KeyboardInterrupt as keyboard_err:
		print("Process Interrupted\n")
	finally:
		print("Ended!")

import json
import sys
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

service_key = "yourservicekey.json"

def importData(datafile, collection):
	try:
		cred_obj = credentials.Certificate(service_key)
		firebase_admin.initialize_app(cred_obj)

		db = firestore.client()

		data = dataJSON(datafile)

		documentPtr = db.collection(collection)
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

USAGE = "Please enter the filepath for the data file and name of collection.\n COMMAND: python firebase_add.py file_path collection_name\n"

if __name__ == '__main__':
	try:
		if len(sys.argv) == 3:
			datafile = sys.argv[1]
			collection = sys.argv[2]
		else:
			print(USAGE)
			exit()

		importData(datafile,collection)

	except KeyboardInterrupt as keyboard_err:
		print("Process Interrupted\n")
	finally:
		print("Ended!")

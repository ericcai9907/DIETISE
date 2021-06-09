import json
import sys
import firebase_admin

from firebase_admin import credentials
from firebase_admin import firestore

service_key = "yourservicekey.json"



def importData(datafile, collection, diet):
	try:
		cred_obj = credentials.Certificate(service_key)
		firebase_admin.initialize_app(cred_obj)

		db = firestore.client()

		data = dataJSON(datafile)

		documentPtr = db.collection('recipes').document(collection).collection(diet)
		docs = documentPtr.stream()
		mydocs = []
		for doc in docs:
			mydocs.append(doc.id)
		print(mydocs)
		
		for i in range(len(mydocs)):
			print(mydocs[i]+': '+data[i]['title'],'\n')
			documentPtr.document(mydocs[i]).set(data[i])
			if(i == len(data)-3): break
		'''
		for element in data:
			if element:
				documentPtr.add(element)
		'''

	except Exception as error:
		print("ERROR: {}".format(str(error)))
	else:
		print("completed")


def dataJSON(datafile):
	with open(datafile, 'r',encoding= 'utf-8') as file:
		return json.load(file)

USAGE = "Please enter the filepath for the data file and name of collection.\n COMMAND: python firebase_add.py file_path collection_name diet\n"

if __name__ == '__main__':
	try:
		if len(sys.argv) == 4:
			datafile = sys.argv[1]
			collection = sys.argv[2]
			diet = sys.argv[3]
		else:
			print(USAGE)
			exit()

		importData(datafile,collection,diet)

	except KeyboardInterrupt as keyboard_err:
		print("Process Interrupted\n")
	finally:
		print("Ended!")

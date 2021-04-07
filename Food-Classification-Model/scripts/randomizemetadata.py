import os
import csv
from random import shuffle

dirpath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\Food-Classification-Model\\images"
filepath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\Food-Classification-Model\\rawmetadata.csv"
randomfile = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\Food-Classification-Model\\metadata.csv"

def writedirectoryimages(srcdir,dirname):
	csvfile = open(filepath,'a',newline='')
	csvwriter = csv.writer(csvfile)
	label = "['" + dirname.lower() + "']"
	for image in os.listdir(srcdir):
		if(image.lower().endswith(('.jpg','.png','.jpeg'))):
			csvwriter.writerow([dirname+'/'+image, label])

def randomizecsv():
	file = open(filepath, 'r')
	metadata = file.readlines()
	shuffle(metadata)
	file1 = open(randomfile,'w')
	file1.writelines(metadata)
	file.close()
	file1.close()



if __name__ == '__main__':
	randomizecsv()
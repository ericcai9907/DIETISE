import os
import csv

dirpath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\Food-Classification-Model\\images"
filepath = "C:\\Users\\eric_\\Documents\\CS 297 Capstone\\Food-Classification-Model\\rawmetadata.csv"


def writedirectoryimages(srcdir,dirname):
	csvfile = open(filepath,'a',newline='')
	csvwriter = csv.writer(csvfile)
	label = "['" + dirname.lower() + "']"
	for image in os.listdir(srcdir):
		if(image.lower().endswith(('.jpg','.png','.jpeg'))):
			csvwriter.writerow([dirname+'/'+image, label])



def buildMeta(srcdir):
	for directory in os.listdir(srcdir):
		dirpath = srcdir+"\\"+directory
		if(os.path.isdir(dirpath)):
			writedirectoryimages(dirpath,directory)

if __name__ == '__main__':
	buildMeta(dirpath)